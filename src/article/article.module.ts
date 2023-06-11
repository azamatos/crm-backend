import { Module } from '@nestjs/common';

// third party
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
