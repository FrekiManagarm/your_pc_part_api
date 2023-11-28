import { Injectable } from '@nestjs/common';
import { CreatePsuDto } from '../dto/create-psu.dto';
import { UpdatePsuDto } from '../dto/update-psu.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PsuService {
  constructor(private prisma : PrismaService) {}
  
  async create(createPsuDto: CreatePsuDto) {
    try {
      const response = await this.prisma.pSU.create({
        data: createPsuDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.PSUWhereInput,
    orderBy?: Prisma.PSUOrderByWithAggregationInput,
  }) {
    const { orderBy, skip, take, where } = params;
    try {
      const response = await this.prisma.pSU.findMany({
        orderBy,
        skip,
        take,
        where,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.pSU.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updatePsuDto: UpdatePsuDto) {
    try {
      const response = await this.prisma.pSU.update({
        where: {
          id,
        },
        data: updatePsuDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.pSU.delete({
        where: {
          id,
        }
      });

      return true;
    } catch (error) {
      return error;
    }
  }
}
