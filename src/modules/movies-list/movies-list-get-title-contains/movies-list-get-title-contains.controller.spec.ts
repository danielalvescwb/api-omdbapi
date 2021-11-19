import { Test, TestingModule } from '@nestjs/testing';
import { MoviesListGetTitleContainsController } from './movies-list-get-title-contains.controller';
import { MoviesListGetTitleContainsService } from './movies-list-get-title-contains.service';

describe('MoviesListGetTitleContainsController', () => {
  let controller: MoviesListGetTitleContainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesListGetTitleContainsController],
      providers: [MoviesListGetTitleContainsService],
    }).compile();

    controller = module.get<MoviesListGetTitleContainsController>(MoviesListGetTitleContainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
