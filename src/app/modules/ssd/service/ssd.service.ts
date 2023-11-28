import { Injectable } from '@nestjs/common';
import { CreateSsdDto } from '../dto/create-ssd.dto';
import { UpdateSsdDto } from '../dto/update-ssd.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SsdService {
  constructor(private prisma : PrismaService) {}
  
  async create(createSsdDto: CreateSsdDto) {
    try {
      const response = await this.prisma.sSD.create({
        data: createSsdDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.SSDWhereInput,
    orderBy?: Prisma.SSDOrderByWithAggregationInput,
  }) {

    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.sSD.findMany({
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
      const response = await this.prisma.sSD.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateSsdDto: UpdateSsdDto) {
    try {
      const response = await this.prisma.sSD.update({
        data: updateSsdDto,
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.sSD.delete({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }
}
