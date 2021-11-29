import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { Repository } from 'typeorm';
import { GenerateJwtAndRefreshTokenService } from '../generate-jwt-and-refresh-token/generate-jwt-and-refresh-token.service';
import { RefreshTokenDTO } from './refresh-token.dto';

interface IRefreshTokenService extends DecodedToken {
  refreshTokenDTO: RefreshTokenDTO;
}

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(OAuthEntity)
    private usersRepository: Repository<OAuthEntity>,
    private readonly generateJwtAndRefreshTokenService: GenerateJwtAndRefreshTokenService,
  ) {}

  async exec({ sub, refreshTokenDTO }: IRefreshTokenService) {
    console.log('########## RefreshTokenService');

    if (!sub) {
      throw new BadRequestException({
        error: true,
        code: 'credentials.invalid',
        message: 'E-mail or refreshToken incorrect.',
      });
    }

    const user = await this.usersRepository.findOne({
      where: { email: sub },
      withDeleted: true,
    });

    if (!user)
      throw new BadRequestException({
        error: true,
        code: 'request.invalid',
        message: 'User Not found',
      });

    console.log(
      'refreshTokenDTO.refreshToken !== user.refresh_token',
      refreshTokenDTO.refreshToken,
      user.refresh_token,
    );

    if (refreshTokenDTO.refreshToken !== user.refresh_token) {
      throw new BadRequestException({
        error: true,
        code: 'credentials.invalid',
        message: 'E-mail or refreshToken incorrect..',
        action: 'logout',
      });
    }

    const { refreshToken, token } =
      this.generateJwtAndRefreshTokenService.execute({
        email: sub,
        payload: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
        },
      });

    await this.usersRepository.update(user.primary_id, {
      refresh_token: refreshToken,
    });

    return {
      token,
      refreshToken,
      email: sub,
      id: user.id,
      name: user.name,
      avatar_url: user.avatar_url,
    };
  }
}
