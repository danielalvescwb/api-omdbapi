import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { OAuthGithubMeService } from './o-auth-github-me.service';

@Controller('o-auth-github-me')
export class OAuthGithubMeController {
  constructor(private readonly oAuthGithubMeService: OAuthGithubMeService) {}

  @Get()
  async handle(@Req() req: Request) {
    const {
      tokenDecoded: { id },
    } = req;

    return this.oAuthGithubMeService.exec({ id });
  }
}
