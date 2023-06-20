import { Module } from '@nestjs/common';

// third party
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
