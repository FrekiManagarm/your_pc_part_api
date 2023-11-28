import { Module } from '@nestjs/common';
import { SoundCardService } from './service/sound-card.service';
import { SoundCardController } from './controller/sound-card.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [SoundCardController],
  providers: [SoundCardService, PrismaService],
})
export class SoundCardModule {}
