import { Module } from '@nestjs/common';
import { SoundCardService } from './sound-card.service';
import { SoundCardController } from './sound-card.controller';

@Module({
  controllers: [SoundCardController],
  providers: [SoundCardService],
})
export class SoundCardModule {}
