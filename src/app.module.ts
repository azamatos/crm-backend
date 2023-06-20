import { Module } from '@nestjs/common';
import { IncomingModule } from './incoming/incoming.module';
import { PrismaModule } from './prisma/prisma.module';
import { OutgoingModule } from './outgoing/outgoing.module';
import { ArticleModule } from './article/article.module';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { CustomerModule } from './customer/customer.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    PrismaModule,
    IncomingModule,
    OutgoingModule,
    ArticleModule,
    DeliverymanModule,
    CustomerModule,
    CityModule,
    CountryModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class AppModule {}
