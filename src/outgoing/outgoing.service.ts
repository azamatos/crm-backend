import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { IncomingService } from '../incoming/incoming.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OutgoingService {
  constructor(
    private prisma: PrismaService,
    private incomingService: IncomingService,
  ) {}
  async create(createDTO: OutgoingCreateDTO) {
    try {
      return await this.prisma.outgoing.create({
        data: createDTO,
      });
      // getting ordered by created date incomings, to sell them by FIFO
      // const incomings = await this.incomingService.getOrderedByDate(
      //   createDTO.articleId,
      // );
      // checking if we are able to sell that amount
      // const incomingsCount = getIncomingCount(incomings);
      // if (incomingsCount < createDTO.count) {
      //   throw new BadRequestException("Outgoing's count higher than incomings");
      // }
      // selling by FIFO using all left count
      // for (let i = 0; i < incomings.length; i++) {
      //   const incoming = incomings[i];
      //   createDTO.incomingId = incoming.id;
      // if incomings count more than outgoings,
      // everythin is okay and we just sell it and break the loop
      //   if (incoming.count > createDTO.count) {
      //     await this.createOutgoing(createDTO);
      //     break;
      // if outgoing's count more than current incomings,
      // we sell of we have, and go for the next one
      // also we change isSold flag to true, it means this income with specific article totally sold
      //   } else if (incoming.count < createDTO.count) {
      //     await this.createOutgoing(
      //       { ...createDTO, count: incoming.count },
      //       incoming,
      //     );
      //     createDTO.count = createDTO.count - incoming.count;
      //     // if they are equal, we change isSold flag
      //   } else {
      //     await this.createOutgoing(createDTO, incoming);
      //     break;
      //   }
      // }
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<Outgoing[]> {
    try {
      return await this.prisma.outgoing.findMany();

      //   return outgoings.length > 0 ? outgoings : ([] as Outgoing[]);
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(outgoingId: string): Promise<Outgoing> {
    const id = Number(outgoingId);
    try {
      return await this.prisma.outgoing.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async update(
    id: number,
    updateoutgoingInput: OutgoingUpdateDTO,
  ): Promise<Outgoing> {
    try {
      return this.prisma.outgoing.update({
        where: { id },
        data: updateoutgoingInput,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async remove(outgoingId: string) {
    const id = Number(outgoingId);
    try {
      return this.prisma.outgoing.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }
}
