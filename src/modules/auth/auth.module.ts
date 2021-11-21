import { Module } from '@nestjs/common';
import { BcryptProviderModule } from './bcrypt-provider/bcrypt-provider.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
@Module({
  imports: [BcryptProviderModule, RefreshTokenModule],
})
export class AuthModule {}
