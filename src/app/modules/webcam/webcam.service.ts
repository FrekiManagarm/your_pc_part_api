import { Injectable } from '@nestjs/common';
import { CreateWebcamDto } from './dto/create-webcam.dto';
import { UpdateWebcamDto } from './dto/update-webcam.dto';

@Injectable()
export class WebcamService {
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
