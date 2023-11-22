import { Injectable } from '@nestjs/common';
import { CreateHddDto } from '../dto/create-hdd.dto';
import { UpdateHddDto } from '../dto/update-hdd.dto';

@Injectable()
export class HddService {
  create(createHddDto: CreateHddDto) {
    return 'This action adds a new hdd';
  }

  findAll() {
    return `This action returns all hdd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hdd`;
  }

  update(id: number, updateHddDto: UpdateHddDto) {
    return `This action updates a #${id} hdd`;
  }

  remove(id: number) {
    return `This action removes a #${id} hdd`;
  }
}
