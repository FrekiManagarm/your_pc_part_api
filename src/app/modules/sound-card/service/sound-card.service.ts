import { Injectable } from '@nestjs/common';
import { CreateSoundCardDto } from '../dto/create-sound-card.dto';
import { UpdateSoundCardDto } from '../dto/update-sound-card.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SoundCardService {
  constructor(private prisma : PrismaService) {}
  
  async create(createSoundCardDto: CreateSoundCardDto) {
    try {
      const response = await this.prisma.soundCard.create({
        data: createSoundCardDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: {
    skip: number,
    take: number,
    where: Prisma.SoundCardWhereInput,
    orderBy: Prisma.SoundCardOrderByWithAggregationInput,
  }) {
    const { orderBy, skip, take, where } = params;
    try {
      const response = await this.prisma.soundCard.findMany({
        orderBy,
        skip,
        take,
        where,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.soundCard.findUnique({
        where: {
          id
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateSoundCardDto: UpdateSoundCardDto) {
    try {
      const response = await this.prisma.soundCard.update({
        where: {
          id,
        },
        data: updateSoundCardDto,
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.soundCard.delete({
        where: {
          id,
        }
      });

      if (!response) {
        return false;
      }

      return true;
    } catch (error) {
      return error;
    }
  }
}
