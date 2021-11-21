import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuthEntity } from '../entities/o-auth.entity';

@Injectable()
export class OAuthGithubMeService {
  constructor(
    @InjectRepository(OAuthEntity)
    private readonly oauthRepository: Repository<OAuthEntity>,
  ) {}
  async exec({ id }: { id: number }) {
    const userExists = await this.oauthRepository.findOne({
      select: ['avatar_url', 'name', 'id', 'email'],
      where: { id },
    });
    if (!userExists) {
      throw new BadRequestException({
        error: true,
        code: 'credential.invalid',
        message: 'User not found',
      });
    }
    return userExists;
  }
}
