import { Injectable } from '@nestjs/common';
import { CreateCpuCoolerDto } from '../dto/create-cpu-cooler.dto';
import { UpdateCpuCoolerDto } from '../dto/update-cpu-cooler.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class CpuCoolerService {
  constructor(private prisma : PrismaService) {}

  async create(createCpuCoolerDto: CreateCpuCoolerDto) {
    return 'This action adds a new cpuCooler';
  }

  async findAll() {
    return `This action returns all cpuCooler`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} cpuCooler`;
  }

  async update(id: number, updateCpuCoolerDto: UpdateCpuCoolerDto) {
    return `This action updates a #${id} cpuCooler`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cpuCooler`;
  }
}
