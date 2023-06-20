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
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

// project imports
import { ArticleService } from './article.service';

// utils
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

  @Post()
  create(@Body() createDto: ArticleCreateDTO) {
    return this.articleService.create(createDto);
  }

  @Patch()
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

  @Get(':id/incomes')
  getArticleIncomes(@Param('id') id: string) {
    return this.articleService.getIncomes(id);
  }

  @Get(':id/outgoings')
  getArticleOutgoings(@Param('id') id: string) {
    return this.articleService.getOutgoings(id);
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
