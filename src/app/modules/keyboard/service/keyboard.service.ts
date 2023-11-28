import { Injectable } from '@nestjs/common';
import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { UpdateKeyboardDto } from '../dto/update-keyboard.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KeyboardService {
  constructor(private prisma : PrismaService) {}

  async create(createKeyboardDto: CreateKeyboardDto) {
    try {
      const response = await this.prisma.keyboard.create({
        data: createKeyboardDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.KeyboardWhereInput,
    orderBy?: Prisma.KeyboardOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.keyboard.findMany({
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
      const response = await this.prisma.keyboard.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateKeyboardDto: UpdateKeyboardDto) {
    try {
      const response = await this.prisma.keyboard.update({
        where: {
          id
        },
        data: updateKeyboardDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.keyboard.delete({
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
