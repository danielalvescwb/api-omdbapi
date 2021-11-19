import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubSignInController } from './o-auth-github-sign-in.controller';
import { OAuthGithubSignInService } from './o-auth-github-sign-in.service';

describe('OAuthGithubSignInController', () => {
  let controller: OAuthGithubSignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OAuthGithubSignInController],
      providers: [OAuthGithubSignInService],
    }).compile();

    controller = module.get<OAuthGithubSignInController>(OAuthGithubSignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
