import { Module } from '@nestjs/common';

// third party
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
