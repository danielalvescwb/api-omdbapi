import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesRemoveController } from './favorites-remove.controller';
import { FavoritesRemoveService } from './favorites-remove.service';

describe('FavoritesRemoveController', () => {
  let controller: FavoritesRemoveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesRemoveController],
      providers: [FavoritesRemoveService],
    }).compile();

    controller = module.get<FavoritesRemoveController>(FavoritesRemoveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
