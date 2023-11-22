import { Injectable } from '@nestjs/common';
import { CreateSsdDto } from '../dto/create-ssd.dto';
import { UpdateSsdDto } from '../dto/update-ssd.dto';

@Injectable()
export class SsdService {
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
