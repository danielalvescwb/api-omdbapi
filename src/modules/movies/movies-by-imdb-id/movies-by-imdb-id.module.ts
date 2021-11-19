import { Module } from '@nestjs/common';
import { MoviesByImdbIdService } from './movies-by-imdb-id.service';
import { MoviesByImdbIdController } from './movies-by-imdb-id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from '../entities/movie.entity';
import { RedisCacheModule } from 'src/cache/redis-cache/redis-cache.module';
import { RatingEntity } from '../entities/rating.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity, RatingEntity]),
    RedisCacheModule,
  ],
  controllers: [MoviesByImdbIdController],
  providers: [MoviesByImdbIdService],
})
export class MoviesByImdbIdModule {}
