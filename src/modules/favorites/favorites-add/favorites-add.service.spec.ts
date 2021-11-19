import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesAddService } from './favorites-add.service';

describe('FavoritesAddService', () => {
  let service: FavoritesAddService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesAddService],
    }).compile();

    service = module.get<FavoritesAddService>(FavoritesAddService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
