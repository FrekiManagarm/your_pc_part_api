import { Injectable } from '@nestjs/common';
import { CreateSpeakerDto } from '../dto/create-speaker.dto';
import { UpdateSpeakerDto } from '../dto/update-speaker.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class SpeakersService {
  constructor(private prisma : PrismaService) {}
  
  create(createSpeakerDto: CreateSpeakerDto) {
    return 'This action adds a new speaker';
  }

  findAll() {
    return `This action returns all speakers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speaker`;
  }

  update(id: number, updateSpeakerDto: UpdateSpeakerDto) {
    return `This action updates a #${id} speaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} speaker`;
  }
}
