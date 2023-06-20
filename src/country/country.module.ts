import { Module } from '@nestjs/common';

// third party
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
