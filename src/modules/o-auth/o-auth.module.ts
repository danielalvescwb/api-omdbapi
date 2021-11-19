import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OAuthGithubSignInModule } from './o-auth-github-sign-in/o-auth-github-sign-in.module';
import { OAuthGithubCallbackModule } from './o-auth-github-callback/o-auth-github-callback.module';
import { OAuthCheckMiddleware } from './o-auth-check.middleware';

@Module({
  controllers: [],
  providers: [],
  imports: [OAuthGithubSignInModule, OAuthGithubCallbackModule],
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
    );
  }
}
