import { Module } from '@nestjs/common';
import { MoviesGetTitleContainsService } from './movies-get-title-contains.service';
import { MoviesGetTitleContainsController } from './movies-get-title-contains.controller';
import { RedisCacheModule } from '../../../cache/redis-cache/redis-cache.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from '../entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity]), RedisCacheModule],
  controllers: [MoviesGetTitleContainsController],
  providers: [MoviesGetTitleContainsService],
})
export class MoviesGetTitleContainsModule {}
