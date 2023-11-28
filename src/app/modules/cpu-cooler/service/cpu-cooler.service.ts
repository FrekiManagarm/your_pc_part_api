import { Injectable } from '@nestjs/common';
import { CreateCpuCoolerDto } from '../dto/create-cpu-cooler.dto';
import { UpdateCpuCoolerDto } from '../dto/update-cpu-cooler.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CpuCoolerService {
  constructor(private prisma : PrismaService) {}

  async create(createCpuCoolerDto: CreateCpuCoolerDto) {
    try {
      const response = await this.prisma.cPUCooler.create({
        data: createCpuCoolerDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.CPUCoolerWhereInput,
    orderBy?: Prisma.CPUCoolerOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.cPUCooler.findMany({
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
      const response = await this.prisma.cPUCooler.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCpuCoolerDto: UpdateCpuCoolerDto) {
    try {
      const response = await this.prisma.cPUCooler.update({
        where: {
          id,
        },
        data: updateCpuCoolerDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.cPUCooler.delete({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
