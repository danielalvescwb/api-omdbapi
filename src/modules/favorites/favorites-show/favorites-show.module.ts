import { Module } from '@nestjs/common';
import { FavoritesShowService } from './favorites-show.service';
import { FavoritesShowController } from './favorites-show.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { RedisCacheModule } from 'src/cache/redis-cache/redis-cache.module';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthEntity]), RedisCacheModule],
  controllers: [FavoritesShowController],
  providers: [FavoritesShowService],
})
export class FavoritesShowModule {}
