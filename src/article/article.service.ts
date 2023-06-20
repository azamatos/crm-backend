import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: ArticleCreateDTO) {
    try {
      return await this.prisma.article.create({
        data: createDTO,
      });
    } catch (err) {
      throw new BadRequestException('Wrong input data');
    }
  }

  async getAll(): Promise<BasicArticle[]> {
    try {
      return this.prisma.article.findMany();
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getIncomes(articleId: string): Promise<ArticleIncomes> {
    const id = Number(articleId);
    try {
      return await this.prisma.article.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          createdAt: true,
          description: true,
          imageUrl: true,
          name: true,
          articleIncomes: {
            select: {
              count: true,
              primePrice: true,
              sellPrice: true,
              createdAt: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async getOutgoings(articleId: string): Promise<ArticleOutgoings> {
    const id = Number(articleId);
    try {
      return await this.prisma.article.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          imageUrl: true,
          description: true,
          createdAt: true,
          articleOutgoings: {
            select: {
              count: true,
              createdAt: true,
              description: true,
              sum: true,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async getById(articleId: string): Promise<BasicArticle> {
    const id = Number(articleId);
    try {
      return await this.prisma.article.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new BadRequestException('Please check ur input data and rights');
    }
  }

  async update(
    id: number,
    articleUpdateDTO: ArticleUpdateDTO,
  ): Promise<BasicArticle> {
    try {
      return await this.prisma.article.update({
        where: { id },
        data: articleUpdateDTO,
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(articleId: string) {
    const id = Number(articleId);
    try {
      return await this.prisma.article.delete({
        where: { id },
      });
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
