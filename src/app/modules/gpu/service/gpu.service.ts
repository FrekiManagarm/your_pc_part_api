import { Injectable } from '@nestjs/common';
import { CreateGpuDto } from '../dto/create-gpu.dto';
import { UpdateGpuDto } from '../dto/update-gpu.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class GpuService {
  constructor(private prisma: PrismaService) {}

  async create(createGpuDto: CreateGpuDto) {
    return 'This action adds a new gpu';
  }

  async findAll() {
    return `This action returns all gpu`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} gpu`;
  }

  async update(id: number, updateGpuDto: UpdateGpuDto) {
    return `This action updates a #${id} gpu`;
  }

  async remove(id: number) {
    return `This action removes a #${id} gpu`;
  }
}
