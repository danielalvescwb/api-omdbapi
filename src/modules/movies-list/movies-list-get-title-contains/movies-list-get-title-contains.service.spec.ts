import { Test, TestingModule } from '@nestjs/testing';
import { MoviesListGetTitleContainsService } from './movies-list-get-title-contains.service';

describe('MoviesListGetTitleContainsService', () => {
  let service: MoviesListGetTitleContainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesListGetTitleContainsService],
    }).compile();

    service = module.get<MoviesListGetTitleContainsService>(MoviesListGetTitleContainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
