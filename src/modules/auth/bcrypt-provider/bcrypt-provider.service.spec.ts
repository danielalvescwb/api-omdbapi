import { Test, TestingModule } from '@nestjs/testing';
import { BcryptProviderService } from './bcrypt-provider.service';

describe('BcryptProviderService', () => {
  let service: BcryptProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptProviderService],
    }).compile();

    service = module.get<BcryptProviderService>(BcryptProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
