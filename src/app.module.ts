import { Module } from '@nestjs/common';
import { IncomingModule } from './incoming/incoming.module';
import { PrismaModule } from './prisma/prisma.module';
import { OutgoingModule } from './outgoing/outgoing.module';
import { ArticleModule } from './article/article.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    PrismaModule,
    IncomingModule,
    OutgoingModule,
    ArticleModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class AppModule {}
