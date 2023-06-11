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
import { ArticleService } from './article.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from 'src/utils/uploadUtils';

const storage = {
  storage: diskStorage({
    destination: './uploads/images',
    filename: editFileName,
  }),
};

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  create(@Body() createDto: ArticleCreateDTO) {
    return this.articleService.create(createDto);
  }

  @Patch('update')
  update(@Body() updateDto: ArticleUpdateDTO) {
    return this.articleService.update(updateDto.id, updateDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
    };
  }

  @Get()
  getArticles() {
    return this.articleService.getAll();
  }

  @Get(':id')
  getArticleById(@Param('id') id: string) {
    return this.articleService.getById(id);
  }

  // @Delete(':id')
  // deleteList(@Param('id') id: string) {
  //   return this.articleService.remove(id);
  // }
}
