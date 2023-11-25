import { Injectable } from '@nestjs/common';
import { CreateCpuDto } from '../dto/create-cpu.dto';
import { UpdateCpuDto } from '../dto/update-cpu.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class CpuService {
  constructor(private prisma: PrismaService) {}

  async create(createCpuDto: CreateCpuDto) {
    return 'This action adds a new cpu';
  }

  async findAll() {
    return `This action returns all cpu`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} cpu`;
  }

  async update(id: number, updateCpuDto: UpdateCpuDto) {
    return `This action updates a #${id} cpu`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cpu`;
  }
}
