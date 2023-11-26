import { Injectable } from '@nestjs/common';
import { CreateRamDto } from '../dto/create-ram.dto';
import { UpdateRamDto } from '../dto/update-ram.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class RamService {
  constructor(private prisma : PrismaService) {}
  
  async create(createRamDto: CreateRamDto) {
    return 'This action adds a new ram';
  }

  async findAll() {
    return `This action returns all ram`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} ram`;
  }

  async update(id: number, updateRamDto: UpdateRamDto) {
    return `This action updates a #${id} ram`;
  }

  async remove(id: number) {
    return `This action removes a #${id} ram`;
  }
}
