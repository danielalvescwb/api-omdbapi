import { Module } from '@nestjs/common';
import { MoviesGetTitleContainsModule } from './movies-get-title-contains/movies-get-title-contains.module';
import { MoviesByImdbIdModule } from './movies-by-imdb-id/movies-by-imdb-id.module';

@Module({
  imports: [MoviesGetTitleContainsModule, MoviesByImdbIdModule],
  controllers: [],
  providers: [],
})
export class MoviesModule {}
