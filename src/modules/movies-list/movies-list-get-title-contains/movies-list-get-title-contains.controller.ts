import { Controller, Get, Param } from '@nestjs/common';
import { MoviesListGetTitleContainsService } from './movies-list-get-title-contains.service';

@Controller('movies-list-get-title-contains')
export class MoviesListGetTitleContainsController {
  constructor(
    private readonly moviesListGetTitleContainsService: MoviesListGetTitleContainsService,
  ) {}
  @Get(':title')
  async handle(@Param('title') title: string) {
    return await this.moviesListGetTitleContainsService.exec(
      title.toLowerCase(),
    );
  }
}
