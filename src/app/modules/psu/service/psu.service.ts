import { Injectable } from '@nestjs/common';
import { CreatePsuDto } from '../dto/create-psu.dto';
import { UpdatePsuDto } from '../dto/update-psu.dto';

@Injectable()
export class PsuService {
  create(createPsuDto: CreatePsuDto) {
    return 'This action adds a new psu';
  }

  findAll() {
    return `This action returns all psu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} psu`;
  }

  update(id: number, updatePsuDto: UpdatePsuDto) {
    return `This action updates a #${id} psu`;
  }

  remove(id: number) {
    return `This action removes a #${id} psu`;
  }
}
