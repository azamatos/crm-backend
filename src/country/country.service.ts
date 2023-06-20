import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: CountryCreateDTO) {
    try {
      return await this.prisma.country.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<CountryUpdateDTO[]> {
    try {
      return await this.prisma.country.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(countryId: string): Promise<Country> {
    const id = Number(countryId);
    try {
      return await this.prisma.country.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          cities: {
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

  async update(id: number, countryUpdateDto: CountryUpdateDTO) {
    try {
      return await this.prisma.country.update({
        where: { id },
        data: countryUpdateDto,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(countryId: string) {
    const id = Number(countryId);
    try {
      return await this.prisma.country.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
