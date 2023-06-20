import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create(@Body() createDto: CityCreateDTO) {
    return this.cityService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: CityUpdateDTO) {
    return this.cityService.update(updateDto.id, updateDto);
  }

  @Get()
  getCities() {
    return this.cityService.getAll();
  }

  @Get(':id/customers')
  getCustomers(@Param('id') id: string) {
    return this.cityService.getCustomers(id);
  }

  @Get(':id/deliverymen')
  getDeliverymen(@Param('id') id: string) {
    return this.cityService.getDeliverymen(id);
  }

  @Get(':id')
  getCityById(@Param('id') id: string) {
    return this.cityService.getById(id);
  }
}
