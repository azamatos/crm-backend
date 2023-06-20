import { Module } from '@nestjs/common';

// third party
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
