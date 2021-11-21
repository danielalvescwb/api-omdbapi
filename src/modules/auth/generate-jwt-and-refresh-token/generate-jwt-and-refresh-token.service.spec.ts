import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJwtAndRefreshTokenService } from './generate-jwt-and-refresh-token.service';

describe('GenerateJwtAndRefreshTokenService', () => {
  let service: GenerateJwtAndRefreshTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateJwtAndRefreshTokenService],
    }).compile();

    service = module.get<GenerateJwtAndRefreshTokenService>(
      GenerateJwtAndRefreshTokenService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
