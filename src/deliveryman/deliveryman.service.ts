import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeliverymanService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: DeliveryManCreateDTO) {
    try {
      return await this.prisma.deliveryman.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<DeliverymanResponse[]> {
    try {
      return await this.prisma.deliveryman.findMany({
        select: {
          id: true,
          name: true,
          phoneNumber: true,
          desciption: true,
          city: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(deliverymanId: string): Promise<DeliverymanResponse> {
    const id = Number(deliverymanId);
    try {
      return await this.prisma.deliveryman.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          phoneNumber: true,
          desciption: true,
          city: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async getDeliverymanOutgoings(deliverymanId: string): Promise<Deliveryman> {
    const id = Number(deliverymanId);
    try {
      return await this.prisma.deliveryman.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          phoneNumber: true,
          desciption: true,
          city: {
            select: {
              id: true,
              name: true,
            },
          },
          deliveryOutgoings: {
            select: {
              description: true,
              sum: true,
              createdAt: true,
              outgoing: {
                select: {
                  id: true,
                  createdAt: true,
                  type: true,
                  updatedAt: true,
                  incoming: {
                    select: {
                      id: true,
                      isSold: true,
                      createdAt: true,
                      updatedAt: true,
                    },
                  },
                  order: {
                    select: {
                      id: true,
                      isCompleted: true,
                      createdAt: true,
                      updatedAt: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async update(id: number, deliverymanUpdateDTO: DeliverymanUpdateDTO) {
    try {
      return await this.prisma.deliveryman.update({
        where: { id },
        data: deliverymanUpdateDTO,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(deliverymanId: string) {
    const id = Number(deliverymanId);
    try {
      return await this.prisma.deliveryman.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
