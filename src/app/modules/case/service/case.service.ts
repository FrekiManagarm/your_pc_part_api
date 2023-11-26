import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from '../dto/create-case.dto';
import { UpdateCaseDto } from '../dto/update-case.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Case, CaseType, Prisma } from '@prisma/client';

@Injectable()
export class CaseService {
  constructor(private prisma: PrismaService) {}

  async create(createCaseDto: CreateCaseDto) {
    try {
      const response = await this.prisma.case.create({
        data: createCaseDto,
      });

      return response
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    take?: number,
    skip?: number,
    where?: Prisma.CaseWhereInput,
    orderBy?: Prisma.CaseOrderByWithAggregationInput,
  }) {
    const { where, skip, take, orderBy } = params;
    try {
      const response = await this.prisma.case.findMany({
        where,
        skip,
        take,
        orderBy,
      })
  
      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.case.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCaseDto: UpdateCaseDto) {
    try {
      const response = await this.prisma.case.update({
        where: {
          id,
        },
        data: updateCaseDto,
      });

      return response
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.case.delete({
        where: {
          id,
        },
      });

      if (!response) return false

      return true;
    } catch (error) {
      return error;
    }
  }
}
