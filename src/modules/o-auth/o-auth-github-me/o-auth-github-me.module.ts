import { Module } from '@nestjs/common';
import { OAuthGithubMeService } from './o-auth-github-me.service';
import { OAuthGithubMeController } from './o-auth-github-me.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthEntity } from '../entities/o-auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthEntity])],
  controllers: [OAuthGithubMeController],
  providers: [OAuthGithubMeService],
})
export class OAuthGithubMeModule {}
