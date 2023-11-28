import { Injectable } from '@nestjs/common';
import { CreateCaseFanDto } from '../dto/create-case-fan.dto';
import { UpdateCaseFanDto } from '../dto/update-case-fan.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CaseFanService {
  constructor(private prisma: PrismaService) {}

  async create(createCaseFanDto: CreateCaseFanDto) {
    try {
      const response = await this.prisma.caseFan.create({
        data: createCaseFanDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    take?: number,
    skip?: number,
    where?: Prisma.CaseFanWhereInput,
    orderBy?: Prisma.CaseFanOrderByWithAggregationInput
  }) {
    const { orderBy, skip, take, where } = params;
    try {
      const response = await this.prisma.caseFan.findMany({
        orderBy,
        take,
        skip,
        where,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.caseFan.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCaseFanDto: UpdateCaseFanDto) {
    try {
      const response = await this.prisma.caseFan.update({
        where: {
          id,
        },
        data: updateCaseFanDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.caseFan.delete({
        where: {
          id
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
