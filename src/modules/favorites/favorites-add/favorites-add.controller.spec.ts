import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesAddController } from './favorites-add.controller';
import { FavoritesAddService } from './favorites-add.service';

describe('FavoritesAddController', () => {
  let controller: FavoritesAddController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesAddController],
      providers: [FavoritesAddService],
    }).compile();

    controller = module.get<FavoritesAddController>(FavoritesAddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
