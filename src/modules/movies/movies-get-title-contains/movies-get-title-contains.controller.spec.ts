import { Test, TestingModule } from '@nestjs/testing';
import { MoviesGetTitleContainsController } from './movies-get-title-contains.controller';
import { MoviesGetTitleContainsService } from './movies-get-title-contains.service';

describe('MoviesGetTitleContainsController', () => {
  let controller: MoviesGetTitleContainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesGetTitleContainsController],
      providers: [MoviesGetTitleContainsService],
    }).compile();

    controller = module.get<MoviesGetTitleContainsController>(
      MoviesGetTitleContainsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
