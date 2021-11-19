import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubCallbackService } from './o-auth-github-callback.service';

describe('OAuthGithubCallbackService', () => {
  let service: OAuthGithubCallbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OAuthGithubCallbackService],
    }).compile();

    service = module.get<OAuthGithubCallbackService>(OAuthGithubCallbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
