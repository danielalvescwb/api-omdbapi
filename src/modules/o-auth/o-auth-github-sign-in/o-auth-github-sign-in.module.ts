import { Module } from '@nestjs/common';
import { OAuthGithubSignInService } from './o-auth-github-sign-in.service';
import { OAuthGithubSignInController } from './o-auth-github-sign-in.controller';

@Module({
  controllers: [OAuthGithubSignInController],
  providers: [OAuthGithubSignInService]
})
export class OAuthGithubSignInModule {}
