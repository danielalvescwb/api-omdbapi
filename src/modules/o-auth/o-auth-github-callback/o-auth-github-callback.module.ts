import { Module } from '@nestjs/common';
import { OAuthGithubCallbackService } from './o-auth-github-callback.service';
import { OAuthGithubCallbackController } from './o-auth-github-callback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthEntity } from '../entities/o-auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthEntity])],
  controllers: [OAuthGithubCallbackController],
  providers: [OAuthGithubCallbackService],
})
export class OAuthGithubCallbackModule {}
