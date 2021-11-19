import { Controller, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { FavoritesRemoveService } from './favorites-remove.service';

@Controller('favorites-remove')
export class FavoritesRemoveController {
  constructor(
    private readonly favoritesRemoveService: FavoritesRemoveService,
  ) {}

  @Delete(':imdbID')
  async handle(@Req() req: Request, @Param('imdbID') imdbID: string) {
    const {
      tokenDecoded: { id },
    } = req;
    return await this.favoritesRemoveService.exec({ id, imdbID });
  }
}
