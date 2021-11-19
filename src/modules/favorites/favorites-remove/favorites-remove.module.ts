import { Module } from '@nestjs/common';
import { FavoritesRemoveService } from './favorites-remove.service';
import { FavoritesRemoveController } from './favorites-remove.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheModule } from 'src/cache/redis-cache/redis-cache.module';
import { FavoriteEntity } from '../entities/favorite.entity';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FavoriteEntity, OAuthEntity]),
    RedisCacheModule,
  ],
  controllers: [FavoritesRemoveController],
  providers: [FavoritesRemoveService],
})
export class FavoritesRemoveModule {}
