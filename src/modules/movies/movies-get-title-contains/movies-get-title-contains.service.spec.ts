import { Test, TestingModule } from '@nestjs/testing';
import { MoviesGetTitleContainsService } from './movies-get-title-contains.service';

describe('MoviesGetTitleContainsService', () => {
  let service: MoviesGetTitleContainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesGetTitleContainsService],
    }).compile();

    service = module.get<MoviesGetTitleContainsService>(MoviesGetTitleContainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
