import { Injectable } from '@nestjs/common';
import { CreateMouseDto } from '../dto/create-mouse.dto';
import { UpdateMouseDto } from '../dto/update-mouse.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MouseService {
  constructor(private prisma : PrismaService) {}
  
  async create(createMouseDto: CreateMouseDto) {
    try {
      const response = await this.prisma.mouse.create({
        data: createMouseDto,
      });
      
      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params : {
    skip?: number,
    take?: number,
    where?: Prisma.MouseWhereInput,
    orderBy?: Prisma.MouseOrderByWithAggregationInput,
  }) {
    const { where, orderBy, skip, take } = params;
    try {
      const response = await this.prisma.mouse.findMany({
        where,
        orderBy,
        skip,
        take,
      });

      return response;
    } catch (error) {
      return {
        error: error,
      }
    }
  }

  async findOne(id: number) : Promise<{message: string, statusCode: number} | any> {
    try {
      const response = await this.prisma.mouse.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateMouseDto: UpdateMouseDto) {
    try {
      const response = await this.prisma.mouse.update({
        where: {
          id,
        },
        data: updateMouseDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.mouse.delete({
        where: {
          id,
        }
      });

      if (!response) {
        return false;
      }

      return true;
    } catch (error) {
      return error;
    }
  }
}
