import { Module } from '@nestjs/common';
import { BcryptProviderService } from './bcrypt-provider.service';

@Module({
  providers: [BcryptProviderService],
  exports: [BcryptProviderService],
})
export class BcryptProviderModule {}
