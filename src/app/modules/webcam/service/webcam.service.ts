import { Injectable } from '@nestjs/common';
import { CreateWebcamDto } from '../dto/create-webcam.dto';
import { UpdateWebcamDto } from '../dto/update-webcam.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class WebcamService {
  constructor(private prisma : PrismaService) {}
  
  create(createWebcamDto: CreateWebcamDto) {
    return 'This action adds a new webcam';
  }

  findAll() {
    return `This action returns all webcam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webcam`;
  }

  update(id: number, updateWebcamDto: UpdateWebcamDto) {
    return `This action updates a #${id} webcam`;
  }

  remove(id: number) {
    return `This action removes a #${id} webcam`;
  }
}
