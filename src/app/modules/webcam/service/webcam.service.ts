import { Injectable } from '@nestjs/common';
import { CreateWebcamDto } from '../dto/create-webcam.dto';
import { UpdateWebcamDto } from '../dto/update-webcam.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class WebcamService {
  constructor(private prisma : PrismaService) {}
  
  async create(createWebcamDto: CreateWebcamDto) {
    return 'This action adds a new webcam';
  }

  async findAll() {
    return `This action returns all webcam`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} webcam`;
  }

  async update(id: number, updateWebcamDto: UpdateWebcamDto) {
    return `This action updates a #${id} webcam`;
  }

  async remove(id: number) {
    return `This action removes a #${id} webcam`;
  }
}
