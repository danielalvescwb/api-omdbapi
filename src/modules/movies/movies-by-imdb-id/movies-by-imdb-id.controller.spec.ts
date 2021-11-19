import { Test, TestingModule } from '@nestjs/testing';
import { MoviesByImdbIdController } from './movies-by-imdb-id.controller';
import { MoviesByImdbIdService } from './movies-by-imdb-id.service';

describe('MoviesByImdbIdController', () => {
  let controller: MoviesByImdbIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesByImdbIdController],
      providers: [MoviesByImdbIdService],
    }).compile();

    controller = module.get<MoviesByImdbIdController>(MoviesByImdbIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
