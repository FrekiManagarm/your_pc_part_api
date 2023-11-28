import { Injectable } from '@nestjs/common';
import { CreateMonitorDto } from '../dto/create-monitor.dto';
import { UpdateMonitorDto } from '../dto/update-monitor.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MonitorService {
  constructor(private prisma : PrismaService) {}
  
  async create(createMonitorDto: CreateMonitorDto) {
    try {
      const response = await this.prisma.monitor.create({
        data: createMonitorDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.MonitorWhereInput,
    orderBy?: Prisma.MonitorOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params
    try {
      const response = await this.prisma.monitor.findMany({
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
      const response = await this.prisma.monitor.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateMonitorDto: UpdateMonitorDto) {
    try {
      const response = await this.prisma.monitor.update({
        data: updateMonitorDto,
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
      const response = await this.prisma.monitor.delete({
        where: {
          id
        }
      });

      if (!response) return false;

      return true;
    } catch (error) {
      return error
    }
  }
}
