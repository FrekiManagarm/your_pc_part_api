import { Injectable } from '@nestjs/common';
import { CreateMouseDto } from '../dto/create-mouse.dto';
import { UpdateMouseDto } from '../dto/update-mouse.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class MouseService {
  constructor(private prisma : PrismaService) {}
  
  create(createMouseDto: CreateMouseDto) {
    return 'This action adds a new mouse';
  }

  findAll() {
    return `This action returns all mouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mouse`;
  }

  update(id: number, updateMouseDto: UpdateMouseDto) {
    return `This action updates a #${id} mouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} mouse`;
  }
}
