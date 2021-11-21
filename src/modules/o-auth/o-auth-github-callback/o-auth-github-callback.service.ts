import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { OAuthEntity } from '../entities/o-auth.entity';
import { IAccessTokenResponse } from '../interfaces/IAccessTokenResponse';
import { IGithubUserInfo } from '../interfaces/IGithubUserInfo';
import { GenerateJwtAndRefreshTokenService } from 'src/modules/auth/generate-jwt-and-refresh-token/generate-jwt-and-refresh-token.service';

@Injectable()
export class OAuthGithubCallbackService {
  constructor(
    @InjectRepository(OAuthEntity)
    private readonly oAuthRepository: Repository<OAuthEntity>,
    private readonly generateJwtAndRefreshTokenService: GenerateJwtAndRefreshTokenService,
  ) {}
  async exec(code: string) {
    try {
      const {
        data: { access_token },
      } = await axios.post<IAccessTokenResponse>(
        'https://github.com/login/oauth/access_token',
        null,
        {
          params: {
            client_id: process.env.GITHUB_OAUTH_PUBLIC_CLIENT_ID,
            client_secret: process.env.GITHUB_OAUTH_SECRET_CLIENT_ID,
            code,
          },
          headers: {
            Accept: 'application/json',
          },
        },
      );

      const { data: githubUserInfo } = await axios.get<IGithubUserInfo>(
        'https://api.github.com/user',
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        },
      );

      const { name, avatar_url, id, email } = githubUserInfo;
      let user = await this.oAuthRepository.findOne({ where: { id } });

      const { refreshToken, token } =
        this.generateJwtAndRefreshTokenService.execute({
          email: email,
          payload: {
            id,
            name,
            avatar_url,
          },
        });
      githubUserInfo.refresh_token = refreshToken;

      if (!user) {
        user = await this.oAuthRepository.save(githubUserInfo);
      }

      return {
        token,
        refreshToken,
        name,
        avatar_url,
        id,
        email,
      };
    } catch (error) {
      throw new BadRequestException({
        error: true,
        code: 'credential.invalid',
        message: 'Error on request token github',
      });
    }
  }
}
