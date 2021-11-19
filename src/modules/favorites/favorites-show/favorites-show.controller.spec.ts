import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesShowController } from './favorites-show.controller';
import { FavoritesShowService } from './favorites-show.service';

describe('FavoritesShowController', () => {
  let controller: FavoritesShowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesShowController],
      providers: [FavoritesShowService],
    }).compile();

    controller = module.get<FavoritesShowController>(FavoritesShowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
