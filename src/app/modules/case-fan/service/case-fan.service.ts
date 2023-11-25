import { Injectable } from '@nestjs/common';
import { CreateCaseFanDto } from '../dto/create-case-fan.dto';
import { UpdateCaseFanDto } from '../dto/update-case-fan.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class CaseFanService {
  constructor(private prisma: PrismaService) {}

  async create(createCaseFanDto: CreateCaseFanDto) {
    return 'This action adds a new caseFan';
  }

  async findAll() {
    return `This action returns all caseFan`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} caseFan`;
  }

  async update(id: number, updateCaseFanDto: UpdateCaseFanDto) {
    return `This action updates a #${id} caseFan`;
  }

  async remove(id: number) {
    return `This action removes a #${id} caseFan`;
  }
}
