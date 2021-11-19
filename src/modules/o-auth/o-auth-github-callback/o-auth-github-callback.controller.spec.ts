import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubCallbackController } from './o-auth-github-callback.controller';
import { OAuthGithubCallbackService } from './o-auth-github-callback.service';

describe('OAuthGithubCallbackController', () => {
  let controller: OAuthGithubCallbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OAuthGithubCallbackController],
      providers: [OAuthGithubCallbackService],
    }).compile();

    controller = module.get<OAuthGithubCallbackController>(OAuthGithubCallbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
