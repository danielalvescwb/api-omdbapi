import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisCacheService } from 'src/cache/redis-cache/redis-cache.service';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { Repository } from 'typeorm';
import { FavoriteEntity } from '../entities/favorite.entity';

@Injectable()
export class FavoritesRemoveService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoriteRepository: Repository<FavoriteEntity>,
    @InjectRepository(OAuthEntity)
    private readonly oauthRepository: Repository<OAuthEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}
  async exec({ id, imdbID }: { id: number; imdbID: string }) {
    const userExists = await this.oauthRepository.findOne({ where: { id } });
    if (!userExists)
      throw new BadRequestException({
        error: true,
        code: 'credential.invalid',
        message: 'User not found',
      });

    const favoriteDeleted = await this.favoriteRepository.delete({
      o_auth_id: id,
      movie_id: imdbID,
    });

    if (!favoriteDeleted.affected)
      throw new BadRequestException({
        error: true,
        code: 'request.invalid',
        message: 'Favorite not found',
      });

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
