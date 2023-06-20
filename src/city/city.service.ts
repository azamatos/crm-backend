import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: CityCreateDTO) {
    try {
      return await this.prisma.city.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<CityResponse[]> {
    try {
      return await this.prisma.city.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getCustomers(cityId: string): Promise<CityWithCustomers> {
    const id = Number(cityId);
    try {
      return await this.prisma.city.findFirst({
        select: {
          id: true,
          name: true,
          customers: {
            select: {
              id: true,
              name: true,
              desciption: true,
              phoneNumber: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getDeliverymen(cityId: string): Promise<CityWithDeliverymen> {
    const id = Number(cityId);
    try {
      return await this.prisma.city.findFirst({
        select: {
          id: true,
          name: true,
          deliverymen: {
            select: {
              id: true,
              name: true,
              desciption: true,
              phoneNumber: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(cityId: string): Promise<CityResponse> {
    const id = Number(cityId);
    try {
      return await this.prisma.city.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async update(id: number, cityUpdateDTO: CityUpdateDTO) {
    try {
      return await this.prisma.city.update({
        where: { id },
        data: cityUpdateDTO,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(cityId: string) {
    const id = Number(cityId);
    try {
      return await this.prisma.city.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
