import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { DeliverymanService } from './deliveryman.service';

@Controller('deliveryman')
export class DeliverymanController {
  constructor(private readonly deliverymanService: DeliverymanService) {}

  @Post()
  create(@Body() createDto: DeliveryManCreateDTO) {
    return this.deliverymanService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: DeliverymanUpdateDTO) {
    return this.deliverymanService.update(updateDto.id, updateDto);
  }

  @Get()
  getDeliverymen() {
    return this.deliverymanService.getAll();
  }

  @Get(':id/outgoings')
  getDeliverymanOutgoings(@Param('id') id: string) {
    return this.deliverymanService.getDeliverymanOutgoings(id);
  }

  @Get(':id')
  getDeliverymanById(@Param('id') id: string) {
    return this.deliverymanService.getById(id);
  }
}
