import { Injectable } from '@nestjs/common';
import { CreateGpuDto } from '../dto/create-gpu.dto';
import { UpdateGpuDto } from '../dto/update-gpu.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GpuService {
  constructor(private prisma: PrismaService) {}

  async create(createGpuDto: CreateGpuDto) {
    try {
      const response = await this.prisma.gPU.create({
        data: createGpuDto,
      });

      return response
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.GPUWhereInput,
    orderBy?: Prisma.GPUOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.gPU.findMany({
        skip,
        take,
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
      const response = await this.prisma.gPU.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateGpuDto: UpdateGpuDto) {
    try {
      const response = await this.prisma.gPU.update({
        where: {
          id,
        },
        data: updateGpuDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.gPU.delete({
        where: {
          id,
        }
      });

      if (!response) return false

      return true;
    } catch (error) {
      return error;
    }
  }
}
