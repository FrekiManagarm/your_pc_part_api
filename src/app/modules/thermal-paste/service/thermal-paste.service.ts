import { Injectable } from '@nestjs/common';
import { CreateThermalPasteDto } from '../dto/create-thermal-paste.dto';
import { UpdateThermalPasteDto } from '../dto/update-thermal-paste.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ThermalPasteService {
  constructor(private prisma : PrismaService) {}
  
  async create(createThermalPasteDto: CreateThermalPasteDto) {
    try {
      const response = await this.prisma.thermalPaste

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip: number,
    take: number,
    where: Prisma.ThermalPasteWhereInput,
    orderBy: Prisma.ThermalPasteOrderByWithAggregationInput,
  }) {
    try {
      const response = await this.prisma.thermalPaste

      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.thermalPaste

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateThermalPasteDto: UpdateThermalPasteDto) {
    try {
      const response = await this.prisma.thermalPaste

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.thermalPaste

      return response;
    } catch (error) {
      return error
    }
  }
}
