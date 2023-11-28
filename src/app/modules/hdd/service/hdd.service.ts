import { Injectable } from '@nestjs/common';
import { CreateHddDto } from '../dto/create-hdd.dto';
import { UpdateHddDto } from '../dto/update-hdd.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HddService {
  constructor(private prisma : PrismaService) {}

  async create(createHddDto: CreateHddDto) {
    try {
      const response = await this.prisma.hDD.create({
        data: createHddDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.HDDWhereInput,
    orderBy?: Prisma.HDDOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params
    try {
      const response = await this.prisma.hDD.findMany({
        skip,
        take,
        where,
        orderBy,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.hDD.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateHddDto: UpdateHddDto) {
    try {
      const response = await this.prisma.hDD.update({
        where: {
          id,
        },
        data: updateHddDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.hDD.delete({
        where: {
          id,
        }
      });

      if (!response) return false;

      return true;
    } catch (error) {
      return error
    }
  }
}
