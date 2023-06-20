import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: OrderCreateDTO): Promise<Omit<Order, 'outgoings'>> {
    try {
      return await this.prisma.order.create({
        data: {
          customerId: createDTO.customerId,
          articleOrders: {
            createMany: {
              data: createDTO.articleOrders,
            },
          },
        },
        select: {
          id: true,
          isCompleted: true,
          createdAt: true,
          updatedAt: true,
          customer: {
            select: {
              id: true,
              name: true,
            },
          },
          articleOrders: {
            select: {
              count: true,
              createdAt: true,
              primePrice: true,
              sellPrice: true,
              article: {
                select: {
                  id: true,
                  description: true,
                  imageUrl: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll() {
    try {
      return await this.prisma.order.findMany({
        where: { isCompleted: false },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(orderId: string): Promise<Omit<Order, 'outgoings'>> {
    const id = Number(orderId);
    try {
      return await this.prisma.order.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          isCompleted: true,
          createdAt: true,
          updatedAt: true,
          customer: {
            select: {
              id: true,
              name: true,
            },
          },
          articleOrders: {
            select: {
              primePrice: true,
              sellPrice: true,
              count: true,
              createdAt: true,
              article: {
                select: {
                  id: true,
                  name: true,
                  imageUrl: true,
                  description: true,
                  createdAt: true,
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

  // async getOrderedByDate(articleId: number): Promise<order[]> {
  //   try {
  //     const orders = await this.prisma.order.findMany({
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

  //     return orders?.map((order) => {
  //       const outgoingsCount = getOutgoingCount(order?.outgoings);

  //       return {
  //         ...order,
  //         count: order.count - outgoingsCount,
  //       };
  //     });
  //   } catch (err) {
  //     throw new BadRequestException('Something went wrong');
  //   }
  // }

  async update(id: number, orderUpdateDTO: OrderUpdateDTO) {
    try {
      return await this.prisma.order.update({
        where: { id },
        data: orderUpdateDTO,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(orderId: string) {
    const id = Number(orderId);
    try {
      return await this.prisma.order.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
