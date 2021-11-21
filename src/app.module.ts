import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './modules/movies/movies.module';
import { MoviesListModule } from './modules/movies-list/movies-list.module';
import { OAuthModule } from './modules/o-auth/o-auth.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { RedisCacheModule } from './cache/redis-cache/redis-cache.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MoviesModule,
    MoviesListModule,
    OAuthModule,
    FavoritesModule,
    RedisCacheModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
