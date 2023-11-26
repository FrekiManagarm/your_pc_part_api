import { Injectable } from '@nestjs/common';
import { CreateWebcamDto } from '../dto/create-webcam.dto';
import { UpdateWebcamDto } from '../dto/update-webcam.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WebcamService {
  constructor(private prisma: PrismaService) { }

  async create(createWebcamDto: CreateWebcamDto) {
    try {
      const response = await this.prisma.webcam.create({
        data: createWebcamDto
      })

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    where?: Prisma.WebcamWhereInput,
    orderBy?: Prisma.WebcamOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params
    try {
      const response = await this.prisma.webcam.findMany({
        skip, take, where, orderBy,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.webcam.findUnique({
        where: { id, }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateWebcamDto: UpdateWebcamDto) {
    try {
      const response = await this.prisma.webcam.update({
        data: updateWebcamDto,
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
      const response = await this.prisma.webcam.delete({ where: { id, }, })

      return response;
    } catch (error) {
      return error
    }
  }
}
