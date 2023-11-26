import { Injectable } from '@nestjs/common';
import { CreateSetupDto } from '../dto/create-setup.dto';
import { UpdateSetupDto } from '../dto/update-setup.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class SetupService {
  constructor (private prisma : PrismaService) {}

  async create(createSetupDto: CreateSetupDto) {
    try {
      const response = await this.prisma.setup.create({
        data: createSetupDto,
        include: {
          case: true,
          case_fans: true,
          cpu: true,
          cpu_cooler: true,
          gpu: true,
          hdd: true,
          headphones: true,
          keyboard: true,
          monitors: true,
          motherboard: true,
          mouse: true,
          ram: true,
          sound_card: true,
          speakers: true,
          thermal_paste: true,
          user: true,
          webcam: true,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const response = await this.prisma.setup.findMany({
        include: {
          case: true,
          case_fans: true,
          cpu: true,
          cpu_cooler: true,
          gpu: true,
          hdd: true,
          headphones: true,
          keyboard: true,
          monitors: true,
          motherboard: true,
          mouse: true,
          ram: true,
          sound_card: true,
          speakers: true,
          thermal_paste: true,
          user: true,
          webcam: true,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.setup.findUnique({
        where: {
          id,
        },
        include: {
          case: true,
          case_fans: true,
          cpu: true,
          cpu_cooler: true,
          gpu: true,
          hdd: true,
          headphones: true,
          keyboard: true,
          monitors: true,
          motherboard: true,
          mouse: true,
          ram: true,
          sound_card: true,
          speakers: true,
          thermal_paste: true,
          user: true,
          webcam: true,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateSetupDto: UpdateSetupDto) {
    try {
      const response = await this.prisma.setup.update({
        where: {
          id,
        },
        data: updateSetupDto,
        include: {
          case: true,
          case_fans: true,
          cpu: true,
          cpu_cooler: true,
          gpu: true,
          hdd: true,
          headphones: true,
          keyboard: true,
          monitors: true,
          motherboard: true,
          mouse: true,
          ram: true,
          sound_card: true,
          speakers: true,
          thermal_paste: true,
          user: true,
          webcam: true,
        }
      });

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.setup.delete({
        where: {id},
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
