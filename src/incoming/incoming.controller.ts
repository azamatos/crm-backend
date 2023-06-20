import {
  Body,
  Controller,
  Post,
  Param,
  Get,
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

  @Post()
  create(@Body() createDto: IncomingCreateDTO) {
    return this.incomingService.create(createDto);
  }

  @Patch()
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
    return this.incomingService.getAll();
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
