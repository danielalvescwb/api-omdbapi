import { Controller, Req, Param, Post } from '@nestjs/common';
import { FavoritesAddService } from './favorites-add.service';
import { Request } from 'express';

@Controller('favorites-add')
export class FavoritesAddController {
  constructor(private readonly favoritesAddService: FavoritesAddService) {}

  @Post(':imdbID')
  async handle(@Req() req: Request, @Param('imdbID') imdbID: string) {
    const {
      tokenDecoded: { id },
    } = req;
    return await this.favoritesAddService.exec({ id, imdbID });
  }
}
