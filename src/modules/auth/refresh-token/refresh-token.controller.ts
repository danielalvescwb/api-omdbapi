import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { RefreshTokenDTO } from './refresh-token.dto';
import { RefreshTokenService } from './refresh-token.service';

@Controller('refresh-token')
export class RefreshTokenController {
  constructor(private refreshTokenService: RefreshTokenService) {}

  @Post()
  async handle(@Req() req: Request, @Body() refreshTokenDTO: RefreshTokenDTO) {
    console.log('########## RefreshTokenController');
    const {
      tokenDecoded: { sub },
    } = req;
    return await this.refreshTokenService.exec({
      sub,
      refreshTokenDTO,
    });
  }
}
