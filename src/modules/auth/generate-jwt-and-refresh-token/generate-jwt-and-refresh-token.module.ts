import { Module } from '@nestjs/common';
import { GenerateJwtAndRefreshTokenService } from './generate-jwt-and-refresh-token.service';

@Module({
  providers: [GenerateJwtAndRefreshTokenService],
  exports: [GenerateJwtAndRefreshTokenService],
})
export class GenerateJwtAndRefreshTokenModule {}
