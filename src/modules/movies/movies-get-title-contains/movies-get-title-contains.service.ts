import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedisCacheService } from '../../../cache/redis-cache/redis-cache.service';
import { MovieEntity } from '../entities/movie.entity';

@Injectable()
export class MoviesGetTitleContainsService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieEntity: Repository<MovieEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}
  async exec(title: string) {
    const titleExists = await this.cacheManager.get(
      `movies-get-title-contains.${title}`,
    );
    if (titleExists) return titleExists;

    // this.movieEntity.find
    console.log(titleExists);
  }
}
