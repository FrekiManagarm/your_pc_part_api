import { Injectable } from '@nestjs/common';
import { CreateCpuCoolerDto } from './dto/create-cpu-cooler.dto';
import { UpdateCpuCoolerDto } from './dto/update-cpu-cooler.dto';

@Injectable()
export class CpuCoolerService {
  create(createCpuCoolerDto: CreateCpuCoolerDto) {
    return 'This action adds a new cpuCooler';
  }

  findAll() {
    return `This action returns all cpuCooler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpuCooler`;
  }

  update(id: number, updateCpuCoolerDto: UpdateCpuCoolerDto) {
    return `This action updates a #${id} cpuCooler`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpuCooler`;
  }
}
