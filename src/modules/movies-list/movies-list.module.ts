import { Module } from '@nestjs/common';
import { MoviesListGetTitleContainsModule } from './movies-list-get-title-contains/movies-list-get-title-contains.module';

@Module({
  controllers: [],
  providers: [],
  imports: [MoviesListGetTitleContainsModule],
})
export class MoviesListModule {}
