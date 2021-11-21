import { Module } from '@nestjs/common';
import { OAuthGithubCallbackService } from './o-auth-github-callback.service';
import { OAuthGithubCallbackController } from './o-auth-github-callback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthEntity } from '../entities/o-auth.entity';
import { GenerateJwtAndRefreshTokenModule } from 'src/modules/auth/generate-jwt-and-refresh-token/generate-jwt-and-refresh-token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OAuthEntity]),
    GenerateJwtAndRefreshTokenModule,
  ],
  controllers: [OAuthGithubCallbackController],
  providers: [OAuthGithubCallbackService],
})
export class OAuthGithubCallbackModule {}
