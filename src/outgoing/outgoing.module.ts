import { Module } from '@nestjs/common';

// third party
import { IncomingService } from 'src/incoming/incoming.service';
import { OutgoingController } from './outgoing.controller';
import { OutgoingService } from './outgoing.service';

@Module({
  providers: [OutgoingService, IncomingService],
  controllers: [OutgoingController],
})
export class OutgoingModule {}
