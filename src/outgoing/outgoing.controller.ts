import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { OutgoingService } from './outgoing.service';

@Controller('outgoing')
export class OutgoingController {
  constructor(private readonly outgoingService: OutgoingService) {}

  @Post()
  create(@Body() createDto: OutgoingCreateDTO) {
    return this.outgoingService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: OutgoingUpdateDTO) {
    return this.outgoingService.update(updateDto.id, updateDto);
  }

  @Get()
  getAll() {
    return this.outgoingService.getAll();
  }

  @Get(':id')
  getIncomingById(@Param('id') id: string) {
    return this.outgoingService.getById(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.outgoingService.remove(id);
  // }
}
