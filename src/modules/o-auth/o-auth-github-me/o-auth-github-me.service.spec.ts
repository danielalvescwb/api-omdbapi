import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubMeService } from './o-auth-github-me.service';

describe('OAuthGithubMeService', () => {
  let service: OAuthGithubMeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OAuthGithubMeService],
    }).compile();

    service = module.get<OAuthGithubMeService>(OAuthGithubMeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
