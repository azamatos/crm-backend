import { Module } from '@nestjs/common';

// third party
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';

@Module({
  providers: [DeliverymanService],
  controllers: [DeliverymanController],
})
export class DeliverymanModule {}
