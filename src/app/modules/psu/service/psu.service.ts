import { Injectable } from '@nestjs/common';
import { CreatePsuDto } from '../dto/create-psu.dto';
import { UpdatePsuDto } from '../dto/update-psu.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class PsuService {
  constructor(private prisma : PrismaService) {}
  
  async create(createPsuDto: CreatePsuDto) {
    return 'This action adds a new psu';
  }

  async findAll() {
    return `This action returns all psu`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} psu`;
  }

  async update(id: number, updatePsuDto: UpdatePsuDto) {
    return `This action updates a #${id} psu`;
  }

  async remove(id: number) {
    return `This action removes a #${id} psu`;
  }
}
