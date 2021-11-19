import { Test, TestingModule } from '@nestjs/testing';
import { OAuthGithubSignInService } from './o-auth-github-sign-in.service';

describe('OAuthGithubSignInService', () => {
  let service: OAuthGithubSignInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OAuthGithubSignInService],
    }).compile();

    service = module.get<OAuthGithubSignInService>(OAuthGithubSignInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
