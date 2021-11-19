import { Controller, Get, Param } from '@nestjs/common';
import { MoviesGetTitleContainsService } from './movies-get-title-contains.service';
@Controller('movies-get-title-contains')
export class MoviesGetTitleContainsController {
  constructor(
    private readonly moviesGetTitleContainsService: MoviesGetTitleContainsService,
  ) {}
  @Get(':title')
  async handle(@Param('title') title: string) {
    return await this.moviesGetTitleContainsService.exec(title);
  }
}
