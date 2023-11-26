import { Injectable } from '@nestjs/common';
import { CreateHeadphoneDto } from '../dto/create-headphone.dto';
import { UpdateHeadphoneDto } from '../dto/update-headphone.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HeadphonesService {
  constructor(private prisma : PrismaService) {}

  async create(createHeadphoneDto: CreateHeadphoneDto) {
    try {
      const response = await this.prisma.headphones.create({
        data: createHeadphoneDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.HeadphonesWhereInput,
    orderBy?: Prisma.HeadphonesOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.headphones.findMany({
        skip,
        take,
        where,
        orderBy
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.headphones.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateHeadphoneDto: UpdateHeadphoneDto) {
    try {
      const response = await this.prisma.headphones.update({
        where: {
          id,
        },
        data: updateHeadphoneDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.headphones.delete({
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
