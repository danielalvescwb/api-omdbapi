import { Controller, Get, Param } from '@nestjs/common';
import { MoviesByImdbIdService } from './movies-by-imdb-id.service';

@Controller('movies-by-imdb-id')
export class MoviesByImdbIdController {
  constructor(private readonly moviesByImdbIdService: MoviesByImdbIdService) {}
  @Get(':imdbID')
  async handle(@Param('imdbID') imdbID: string) {
    return this.moviesByImdbIdService.exec({ imdbID });
  }
}
