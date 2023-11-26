import { Injectable } from '@nestjs/common';
import { CreateSoundCardDto } from '../dto/create-sound-card.dto';
import { UpdateSoundCardDto } from '../dto/update-sound-card.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class SoundCardService {
  constructor(private prisma : PrismaService) {}
  
  async create(createSoundCardDto: CreateSoundCardDto) {
    return 'This action adds a new soundCard';
  }

  async findAll() {
    return `This action returns all soundCard`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} soundCard`;
  }

  async update(id: number, updateSoundCardDto: UpdateSoundCardDto) {
    return `This action updates a #${id} soundCard`;
  }

  async remove(id: number) {
    return `This action removes a #${id} soundCard`;
  }
}
