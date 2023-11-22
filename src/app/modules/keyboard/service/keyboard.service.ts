import { Injectable } from '@nestjs/common';
import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { UpdateKeyboardDto } from '../dto/update-keyboard.dto';

@Injectable()
export class KeyboardService {
  create(createKeyboardDto: CreateKeyboardDto) {
    return 'This action adds a new keyboard';
  }

  findAll() {
    return `This action returns all keyboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keyboard`;
  }

  update(id: number, updateKeyboardDto: UpdateKeyboardDto) {
    return `This action updates a #${id} keyboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} keyboard`;
  }
}
