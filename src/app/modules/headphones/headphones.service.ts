import { Injectable } from '@nestjs/common';
import { CreateHeadphoneDto } from './dto/create-headphone.dto';
import { UpdateHeadphoneDto } from './dto/update-headphone.dto';

@Injectable()
export class HeadphonesService {
  create(createHeadphoneDto: CreateHeadphoneDto) {
    return 'This action adds a new headphone';
  }

  findAll() {
    return `This action returns all headphones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} headphone`;
  }

  update(id: number, updateHeadphoneDto: UpdateHeadphoneDto) {
    return `This action updates a #${id} headphone`;
  }

  remove(id: number) {
    return `This action removes a #${id} headphone`;
  }
}
