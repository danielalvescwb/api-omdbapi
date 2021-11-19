import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisCacheService } from 'src/cache/redis-cache/redis-cache.service';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesShowService {
  constructor(
    @InjectRepository(OAuthEntity)
    private readonly oauthRepository: Repository<OAuthEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}
  async exec({ id }: { id: number }) {
    const favoritesCache = await this.cacheManager.get(`favorites-of-.${id}`);

    if (favoritesCache) return favoritesCache;

    const favoritesDb = await this.oauthRepository.find({
      where: { id },
      relations: ['favoritesInOAuth'],
    });

    await this.cacheManager.set(`favorites-of-.${id}`, {
      resource: 'cache',
      data: favoritesDb,
      totalResults: favoritesDb[0].favoritesInOAuth.length,
    });

    return {
      resource: 'database',
      data: favoritesDb,
      totalResults: favoritesDb[0].favoritesInOAuth.length,
    };
  }
}
