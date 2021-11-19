import { Controller, Get, Query } from '@nestjs/common';
import { OAuthGithubCallbackService } from './o-auth-github-callback.service';

@Controller('o-auth-github-callback')
export class OAuthGithubCallbackController {
  constructor(
    private readonly oAuthGithubCallbackService: OAuthGithubCallbackService,
  ) {}
  @Get()
  handle(@Query('code') code: string) {
    return this.oAuthGithubCallbackService.exec(code);
  }
}
