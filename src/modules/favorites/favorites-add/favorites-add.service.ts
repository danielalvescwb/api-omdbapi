import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieInterface } from 'src/modules/movies/entities/interfaces/movie.interfaces';
import { MovieEntity } from 'src/modules/movies/entities/movie.entity';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { RedisCacheService } from '../../../cache/redis-cache/redis-cache.service';
import { axiosApi } from 'src/services/axiosApi';
import { Repository } from 'typeorm';
import { FavoriteEntity } from '../entities/favorite.entity';

@Injectable()
export class FavoritesAddService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoriteRepository: Repository<FavoriteEntity>,
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(OAuthEntity)
    private readonly oauthRepository: Repository<OAuthEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}

  async exec({ id, imdbID }: { id: number; imdbID: string }) {
    const userExists = await this.oauthRepository.findOne({ where: { id } });
    if (!userExists) {
      throw new BadRequestException({
        error: true,
        code: 'credential.invalid',
        message: 'User not found',
      });
    }

    const movieExists = await this.movieRepository.findOne({
      where: { imdbID },
    });

    if (!movieExists) {
      const { data } = await axiosApi.get<MovieInterface>('/', {
        params: {
          i: imdbID,
        },
      });
      await this.movieRepository.save(data);
    }

    const favoriteExists = await this.favoriteRepository.find({
      o_auth_id: id,
      movie_id: imdbID,
    });

    if (favoriteExists.length > 0)
      throw new BadRequestException({
        error: true,
        code: 'request.invalid',
        message: 'favorite already exists',
      });

    await this.favoriteRepository.save({ o_auth_id: id, movie_id: imdbID });

    const favoritesDb = await this.oauthRepository.find({
      where: { id },
      relations: ['favoritesInOAuth'],
    });

    await this.cacheManager.set(`favorites-of-.${id}`, {
      resource: 'cache',
      data: favoritesDb,
      totalResults: favoritesDb[0].favoritesInOAuth.length,
    });
  }
}
