import { Injectable } from '@nestjs/common';
import { CreateCaseFanDto } from '../dto/create-case-fan.dto';
import { UpdateCaseFanDto } from '../dto/update-case-fan.dto';

@Injectable()
export class CaseFanService {
  create(createCaseFanDto: CreateCaseFanDto) {
    return 'This action adds a new caseFan';
  }

  findAll() {
    return `This action returns all caseFan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caseFan`;
  }

  update(id: number, updateCaseFanDto: UpdateCaseFanDto) {
    return `This action updates a #${id} caseFan`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseFan`;
  }
}
