import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createDto: CustomerCreateDTO) {
    return this.customerService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: CustomerUpdateDTO) {
    return this.customerService.update(updateDto.id, updateDto);
  }

  @Get()
  getCustomers() {
    return this.customerService.getAll();
  }

  @Get(':id/orders')
  getCustomerOrders(@Param('id') id: string) {
    return this.customerService.getCustomerOrders(id);
  }

  @Get(':id/outgoings')
  getCustomerOutgoings(@Param('id') id: string) {
    return this.customerService.getCustomerOutgoings(id);
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customerService.getById(id);
  }
}
