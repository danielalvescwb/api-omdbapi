import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { FavoritesShowService } from './favorites-show.service';

@Controller('favorites-show')
export class FavoritesShowController {
  constructor(private readonly favoritesShowService: FavoritesShowService) {}

  @Get()
  async handle(@Req() req: Request) {
    const {
      tokenDecoded: { id },
    } = req;
    return this.favoritesShowService.exec({ id });
  }
}
