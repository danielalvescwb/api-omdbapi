import { Module } from '@nestjs/common';
import { MoviesListGetTitleContainsService } from './movies-list-get-title-contains.service';
import { MoviesListGetTitleContainsController } from './movies-list-get-title-contains.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesListEntity } from '../entities/movies-list.entity';
import { RedisCacheModule } from '../../../cache/redis-cache/redis-cache.module';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesListEntity]), RedisCacheModule],
  controllers: [MoviesListGetTitleContainsController],
  providers: [MoviesListGetTitleContainsService],
})
export class MoviesListGetTitleContainsModule {}
