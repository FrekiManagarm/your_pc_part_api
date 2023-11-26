import { Injectable } from '@nestjs/common';
import { CreateSpeakerDto } from '../dto/create-speaker.dto';
import { UpdateSpeakerDto } from '../dto/update-speaker.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class SpeakersService {
  constructor(private prisma : PrismaService) {}
  
  async create(createSpeakerDto: CreateSpeakerDto) {
    return 'This action adds a new speaker';
  }

  async findAll() {
    return `This action returns all speakers`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} speaker`;
  }

  async update(id: number, updateSpeakerDto: UpdateSpeakerDto) {
    return `This action updates a #${id} speaker`;
  }

  async remove(id: number) {
    return `This action removes a #${id} speaker`;
  }
}
