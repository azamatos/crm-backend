import {
  Body,
  Controller,
  Post,
  Delete,
  Param,
  Get,
  Put,
  UploadedFile,
  UseInterceptors,
  Patch,
} from '@nestjs/common';

// project imports
import { IncomingService } from './incoming.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('incoming')
export class IncomingController {
  constructor(private readonly incomingService: IncomingService) {}

  @Post('create')
  create(@Body() createDto: IncomingCreateDTO) {
    return this.incomingService.create(createDto);
  }

  @Patch('update')
  update(@Body() updateDto: IncomingUpdateDTO) {
    return this.incomingService.update(updateDto.id, updateDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.incomingService.uploadFile(file);
  }

  @Get()
  getMyLists() {
    return this.incomingService.getOrderedByDate(1);
  }

  @Get(':id')
  getList(@Param('id') id: string) {
    return this.incomingService.getById(id);
  }

  // @Delete(':id')
  // deleteList(@Param('id') id: string) {
  //   return this.incomingService.remove(id);
  // }
}
