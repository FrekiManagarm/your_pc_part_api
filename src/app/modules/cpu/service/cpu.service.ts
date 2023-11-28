import { Injectable } from '@nestjs/common';
import { CreateCpuDto } from '../dto/create-cpu.dto';
import { UpdateCpuDto } from '../dto/update-cpu.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CpuService {
  constructor(private prisma: PrismaService) {}

  async create(createCpuDto: CreateCpuDto) {
    try {
      const response = await this.prisma.cPU.create({
        data: createCpuDto,
      });

      return response
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.CPUWhereInput,
    orderBy?: Prisma.CPUOrderByWithAggregationInput,
  }) {
    const { orderBy, skip, take, where } = params; 
    try {
      const response = await this.prisma.cPU.findMany({
        orderBy,
        skip,
        take,
        where
      });

      return response
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.cPU.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCpuDto: UpdateCpuDto) {
    try {
      const response = await this.prisma.cPU.update({
        where: {
          id,
        },
        data: updateCpuDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.cPU.delete({
        where: {id},
      });

      if (!response) return false;

      return true;
    } catch (error) {
      return error;
    }
  }
}
