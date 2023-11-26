import { Injectable } from '@nestjs/common';
import { CreateSpeakerDto } from '../dto/create-speaker.dto';
import { UpdateSpeakerDto } from '../dto/update-speaker.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SpeakersService {
  constructor(private prisma : PrismaService) {}
  
  async create(createSpeakerDto: CreateSpeakerDto) {
    try {
      const response = await this.prisma.speakers.create({
        data: createSpeakerDto,
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async findAll(params: {
    skip: number,
    take: number,
    where: Prisma.SpeakersWhereInput,
    orderBy: Prisma.SpeakersOrderByWithAggregationInput,
  }) {
    const { skip, take, where, orderBy } = params;
    try {
      const response = await this.prisma.speakers.findMany({
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
      const response = await this.prisma.speakers.findUnique({
        where: {
          id,
        }
      });

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateSpeakerDto: UpdateSpeakerDto) {
    try {
      const response = await this.prisma.speakers.update({
        data: updateSpeakerDto,
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
      const response = await this.prisma.speakers.delete({
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
