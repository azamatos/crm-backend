import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';
import { getOutgoingCount } from 'src/utils/serviceMappings';
import { getUploadedImage } from 'src/utils/uploadUtils';

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
      const articles = await this.prisma.article.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          image_url: true,
          incomings: {
            select: {
              id: true,
              count: true,
              price: true,
              outgoings: {
                select: {
                  id: true,
                  count: true,
                  price: true,
                },
              },
            },
          },
          orders: {
            select: {
              id: true,
              count: true,
              price: true,
              outgoing: {
                select: {
                  id: true,
                  count: true,
                  price: true,
                },
              },
            },
          },
        },
      });

      const result: BasicArticle[] = articles?.map((article) => {
        const image = getUploadedImage(article.image_url);

        let incomingsTotalCount = 0;
        let incomingsSoldCount = 0;
        article?.incomings?.forEach((incoming) => {
          const outgoingsCount = getOutgoingCount(incoming?.outgoings);

          incomingsTotalCount += incoming.count;
          incomingsSoldCount += outgoingsCount;
        });

        let ordersTotalCount = 0;
        let ordersSoldCount = 0;
        article?.orders?.forEach((order) => {
          ordersTotalCount += order.count;
          ordersSoldCount += order.outgoing?.count || 0;
        });

        return {
          id: article.id,
          name: article.name,
          description: article.description,
          image,
          orders: {
            ordersTotalCount,
            ordersSoldCount,
          },
          incomings: {
            incomingsTotalCount,
            incomingsSoldCount,
          },
        };
      });
      return result;
    } catch (err) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async getById(articleId: string) {
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

  async update(id: number, articleUpdateDTO: ArticleUpdateDTO) {
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
