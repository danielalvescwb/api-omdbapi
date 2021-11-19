import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisCacheService } from 'src/cache/redis-cache/redis-cache.service';
import { axiosApi } from 'src/services/axiosApi';
import { Repository } from 'typeorm';
import { MovieEntity } from '../entities/movie.entity';
import { RatingEntity } from '../entities/rating.entity';

@Injectable()
export class MoviesByImdbIdService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(RatingEntity)
    private readonly ratingRepository: Repository<RatingEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}
  async exec({ imdbID }: { imdbID: string }) {
    const movieEsistsInCache = await this.cacheManager.get(
      `movies-by-imdbID.${imdbID}`,
    );
    if (movieEsistsInCache) return movieEsistsInCache;
    const movieEsistsInDb = await this.movieRepository.findOne({
      where: { imdbID },
      relations: ['Ratings'],
    });
    if (movieEsistsInDb) {
      await this.cacheManager.set(`movies-by-imdbID.${imdbID}`, {
        resource: 'cache',
        data: movieEsistsInDb,
        totalResults: 1,
      });
      return {
        resource: 'database',
        data: movieEsistsInDb,
        totalResults: 1,
      };
    }

    const movieEsistsInApi = await axiosApi.get<MovieEntity>('/', {
      params: {
        i: imdbID,
        plot: 'full',
      },
    });

    if (movieEsistsInApi.data.Response === 'True') {
      await this.cacheManager.set(`movies-by-imdbID.${imdbID}`, {
        resource: 'cache',
        data: movieEsistsInApi.data,
        totalResults: 1,
      });

      const movie = await this.movieRepository.save(movieEsistsInApi.data);
      const ratings = [];
      movieEsistsInApi.data.Ratings.forEach(({ Source, Value }) => {
        ratings.push({
          Source,
          Value,
          movieId: movie.id,
        });
      });

      await this.ratingRepository.save([...ratings]);

      return {
        resource: 'omdbapi',
        data: movieEsistsInApi.data,
        totalResults: 1,
      };
    }
  }
}
