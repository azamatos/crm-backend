import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: CustomerCreateDTO) {
    try {
      return await this.prisma.customer.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<CustomerResponse[]> {
    try {
      return await this.prisma.customer.findMany({
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

  async getCustomerOrders(customerId: string): Promise<CustomerOrders> {
    const id = Number(customerId);
    try {
      return await this.prisma.customer.findFirst({
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
          orders: {
            select: {
              id: true,
              createdAt: true,
              updatedAt: true,
              isCompleted: true,
              articleOrders: {
                select: {
                  count: true,
                  primePrice: true,
                  sellPrice: true,
                  article: {
                    select: {
                      id: true,
                      name: true,
                      description: true,
                      imageUrl: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getCustomerOutgoings(customerId: string): Promise<CustomerOutgoings> {
    const id = Number(customerId);
    try {
      return await this.prisma.customer.findFirst({
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
          outgoings: {
            select: {
              id: true,
              type: true,
              createdAt: true,
              updatedAt: true,
              articleOutgoings: {
                select: {
                  count: true,
                  description: true,
                  createdAt: true,
                  sum: true,
                  article: {
                    select: {
                      id: true,
                      name: true,
                      articleIncomes: true,
                      description: true,
                      imageUrl: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(customerId: string): Promise<CustomerResponse> {
    const id = Number(customerId);
    try {
      return await this.prisma.customer.findFirst({
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

  async update(id: number, customerUpdateDto: CustomerUpdateDTO) {
    try {
      return await this.prisma.customer.update({
        where: { id },
        data: customerUpdateDto,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(customerId: string) {
    const id = Number(customerId);
    try {
      return await this.prisma.customer.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
