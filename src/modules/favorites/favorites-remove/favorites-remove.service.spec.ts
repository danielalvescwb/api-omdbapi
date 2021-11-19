import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesRemoveService } from './favorites-remove.service';

describe('FavoritesRemoveService', () => {
  let service: FavoritesRemoveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesRemoveService],
    }).compile();

    service = module.get<FavoritesRemoveService>(FavoritesRemoveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
