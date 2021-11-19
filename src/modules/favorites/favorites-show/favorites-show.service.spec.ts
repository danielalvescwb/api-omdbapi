import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesShowService } from './favorites-show.service';

describe('FavoritesShowService', () => {
  let service: FavoritesShowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesShowService],
    }).compile();

    service = module.get<FavoritesShowService>(FavoritesShowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
