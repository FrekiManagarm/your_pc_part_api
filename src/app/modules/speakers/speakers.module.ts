import { Module } from '@nestjs/common';
import { SpeakersService } from './service/speakers.service';
import { SpeakersController } from './controller/speakers.controller';

@Module({
  controllers: [SpeakersController],
  providers: [SpeakersService],
})
export class SpeakersModule {}
