import { Module } from '@nestjs/common';

// third party
import { IncomingController } from './incoming.controller';
import { IncomingService } from './incoming.service';

@Module({
  providers: [IncomingService],
  controllers: [IncomingController],
})
export class IncomingModule {}
