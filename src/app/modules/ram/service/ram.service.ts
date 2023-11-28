import { Injectable } from '@nestjs/common';
import { CreateRamDto } from '../dto/create-ram.dto';
import { UpdateRamDto } from '../dto/update-ram.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RamService {
  constructor(private prisma : PrismaService) {}
  
  async create(createRamDto: CreateRamDto) {
    try {
      const response = await this.prisma.rAM.create({
        data: createRamDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    take?: number,
    skip?: number,
    where?: Prisma.RAMWhereInput,
    orderBy?: Prisma.RAMOrderByWithAggregationInput,
  }) {
    const { take, skip, where, orderBy } = params
    try {
      const response = await this.prisma.rAM.findMany({
        take,
        skip,
        where,
        orderBy,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.rAM.findUnique({
        where: {
          id,
        }
      });
  
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateRamDto: UpdateRamDto) {
    try {
      const response = await this.prisma.rAM.update({
        where: {
          id,
        },
        data: updateRamDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.rAM.delete({
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
