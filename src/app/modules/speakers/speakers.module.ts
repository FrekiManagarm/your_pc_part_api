import { Module } from '@nestjs/common';
import { SpeakersService } from './service/speakers.service';
import { SpeakersController } from './controller/speakers.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [SpeakersController],
  providers: [SpeakersService, PrismaService],
})
export class SpeakersModule {}
