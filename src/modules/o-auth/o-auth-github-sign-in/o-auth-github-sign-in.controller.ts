import { Controller, Get } from '@nestjs/common';
import { OAuthGithubSignInService } from './o-auth-github-sign-in.service';

@Controller('o-auth-github-sign-in')
export class OAuthGithubSignInController {
  constructor(
    private readonly oAuthGithubSignInService: OAuthGithubSignInService,
  ) {}

  @Get()
  handle() {
    return this.oAuthGithubSignInService.exec();
  }
}
