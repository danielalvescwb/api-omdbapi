import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuthGithubSignInService {
  exec() {
    return {
      url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_OAUTH_PUBLIC_CLIENT_ID}`,
    };
  }
}
