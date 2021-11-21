import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { GenerateJwtAndRefreshTokenModule } from '../generate-jwt-and-refresh-token/generate-jwt-and-refresh-token.module';
import { RefreshTokenController } from './refresh-token.controller';
import { RefreshTokenService } from './refresh-token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OAuthEntity]),
    GenerateJwtAndRefreshTokenModule,
  ],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService],
})
export class RefreshTokenModule {}
