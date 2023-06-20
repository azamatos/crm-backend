import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';
import { convertExcelToIncoming } from 'src/utils/uploadUtils';

@Injectable()
export class IncomingService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: IncomingCreateDTO): Promise<Incoming> {
    try {
      return await this.prisma.incoming.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll() {
    try {
      return await this.prisma.incoming.findMany({
        where: { isSold: false },
      });

      // return incomings.length > 0 ? incomings : ([] as Incoming[]);
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(incomingId: string): Promise<Incoming> {
    const id = Number(incomingId);
    try {
      return await this.prisma.incoming.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  // async getOrderedByDate(articleId: number): Promise<Incoming[]> {
  //   try {
  //     const incomings = await this.prisma.incoming.findMany({
  //       where: { articleId },
  //       orderBy: { createdAt: 'asc' },
  //       select: {
  //         id: true,
  //         count: true,
  //         isSold: true,
  //         price: true,
  //         outgoings: true,
  //         articleId: true,
  //       },
  //     });

  //     return incomings?.map((incoming) => {
  //       const outgoingsCount = getOutgoingCount(incoming?.outgoings);

  //       return {
  //         ...incoming,
  //         count: incoming.count - outgoingsCount,
  //       };
  //     });
  //   } catch (err) {
  //     throw new BadRequestException('Something went wrong');
  //   }
  // }

  async update(id: number, incomingUpdateDTO: IncomingUpdateDTO) {
    try {
      return await this.prisma.incoming.update({
        where: { id },
        data: incomingUpdateDTO,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async uploadFile(file: Express.Multer.File) {
    try {
      const data = convertExcelToIncoming(file);

      return await this.prisma.incoming.createMany({
        data,
        skipDuplicates: false,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(incomingId: string) {
    const id = Number(incomingId);
    try {
      return await this.prisma.incoming.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
