import { Module } from '@nestjs/common';
import { FavoritesAddService } from './favorites-add.service';
import { FavoritesAddController } from './favorites-add.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteEntity } from '../entities/favorite.entity';
import { MovieEntity } from 'src/modules/movies/entities/movie.entity';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { RedisCacheModule } from '../../../cache/redis-cache/redis-cache.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FavoriteEntity, MovieEntity, OAuthEntity]),
    RedisCacheModule,
  ],
  controllers: [FavoritesAddController],
  providers: [FavoritesAddService],
})
export class FavoritesAddModule {}
