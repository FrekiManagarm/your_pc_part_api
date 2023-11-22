import { Injectable } from '@nestjs/common';
import { CreateSoundCardDto } from './dto/create-sound-card.dto';
import { UpdateSoundCardDto } from './dto/update-sound-card.dto';

@Injectable()
export class SoundCardService {
  create(createSoundCardDto: CreateSoundCardDto) {
    return 'This action adds a new soundCard';
  }

  findAll() {
    return `This action returns all soundCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soundCard`;
  }

  update(id: number, updateSoundCardDto: UpdateSoundCardDto) {
    return `This action updates a #${id} soundCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} soundCard`;
  }
}
