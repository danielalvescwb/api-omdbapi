import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubMeController } from './o-auth-github-me.controller';
import { OAuthGithubMeService } from './o-auth-github-me.service';

describe('OAuthGithubMeController', () => {
  let controller: OAuthGithubMeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OAuthGithubMeController],
      providers: [OAuthGithubMeService],
    }).compile();

    controller = module.get<OAuthGithubMeController>(OAuthGithubMeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
