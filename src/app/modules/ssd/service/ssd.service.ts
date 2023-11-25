import { Injectable } from '@nestjs/common';
import { CreateSsdDto } from '../dto/create-ssd.dto';
import { UpdateSsdDto } from '../dto/update-ssd.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class SsdService {
  constructor(private prisma : PrismaService) {}
  
  create(createSsdDto: CreateSsdDto) {
    return 'This action adds a new ssd';
  }

  findAll() {
    return `This action returns all ssd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ssd`;
  }

  update(id: number, updateSsdDto: UpdateSsdDto) {
    return `This action updates a #${id} ssd`;
  }

  remove(id: number) {
    return `This action removes a #${id} ssd`;
  }
}
