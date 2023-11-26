import { Injectable } from '@nestjs/common';
import { CreateMotherboardDto } from '../dto/create-motherboard.dto';
import { UpdateMotherboardDto } from '../dto/update-motherboard.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Motherboard, Prisma } from '@prisma/client';

@Injectable()
export class MotherboardService {
  constructor(private prisma : PrismaService) {}
  
  async create(createMotherboardDto: CreateMotherboardDto) : Promise<Motherboard> {
    const response = await this.prisma.motherboard.create({
      data: createMotherboardDto
    });

    return response;
  }

  async findAll(params : {
    take: number,
    skip: number,
    where: Prisma.MotherboardWhereInput,
    orderBy: Prisma.MotherboardOrderByWithAggregationInput
  }) {
    const { where, orderBy, take, skip } = params
    try {
      const response = await this.prisma.motherboard.findMany({
        where,
        orderBy,
        take,
        skip
      });
  
      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response : Motherboard = await this.prisma.motherboard.findUnique({
        where: {
          id,
        }
      });
  
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateMotherboardDto: UpdateMotherboardDto) {
    try {
      const response = await this.prisma.motherboard.update({
        where: {
          id,
        },
        data: updateMotherboardDto,
      });
  
      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.motherboard.delete({
        where: {
          id
        },
      });
  
      return true;
    } catch (error) {
      return error;
    }
  }
}
