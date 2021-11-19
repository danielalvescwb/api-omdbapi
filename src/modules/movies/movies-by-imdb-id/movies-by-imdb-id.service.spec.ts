import { Test, TestingModule } from '@nestjs/testing';
import { MoviesByImdbIdService } from './movies-by-imdb-id.service';

describe('MoviesByImdbIdService', () => {
  let service: MoviesByImdbIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesByImdbIdService],
    }).compile();

    service = module.get<MoviesByImdbIdService>(MoviesByImdbIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
