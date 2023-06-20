import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { OrderService } from './order.service';

@Controller('incoming')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createDto: OrderCreateDTO) {
    return this.orderService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: IncomingUpdateDTO) {
    return this.orderService.update(updateDto.id, updateDto);
  }

  @Get()
  getIncomings() {
    return this.orderService.getAll();
  }

  @Get(':id')
  getIncome(@Param('id') id: string) {
    return this.orderService.getById(id);
  }

  // @Delete(':id')
  // deleteList(@Param('id') id: string) {
  //   return this.orderService.remove(id);
  // }
}
