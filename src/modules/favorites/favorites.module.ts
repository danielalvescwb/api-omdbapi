import { Module } from '@nestjs/common';
import { FavoritesAddModule } from './favorites-add/favorites-add.module';
import { FavoritesRemoveModule } from './favorites-remove/favorites-remove.module';
import { FavoritesShowModule } from './favorites-show/favorites-show.module';

@Module({
  imports: [FavoritesAddModule, FavoritesRemoveModule, FavoritesShowModule],
  controllers: [],
  providers: [],
})
export class FavoritesModule {}
