import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OAuthGithubSignInModule } from './o-auth-github-sign-in/o-auth-github-sign-in.module';
import { OAuthGithubCallbackModule } from './o-auth-github-callback/o-auth-github-callback.module';
import { OAuthCheckMiddleware } from './o-auth-check.middleware';
import { OAuthGithubMeModule } from './o-auth-github-me/o-auth-github-me.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    OAuthGithubSignInModule,
    OAuthGithubCallbackModule,
    OAuthGithubMeModule,
  ],
})
export class OAuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(OAuthCheckMiddleware).forRoutes(
      {
        path: '*favorites-add*',
        method: RequestMethod.POST,
      },
      {
        path: '*favorites-remove*',
        method: RequestMethod.DELETE,
      },
      {
        path: '*favorites-show',
        method: RequestMethod.GET,
      },
      {
        path: 'o-auth-github-me',
        method: RequestMethod.GET,
      },
      {
        path: 'refresh-token',
        method: RequestMethod.POST,
      },
    );
  }
}
