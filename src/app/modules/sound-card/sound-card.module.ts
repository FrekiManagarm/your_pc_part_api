import { Module } from '@nestjs/common';
import { SoundCardService } from './service/sound-card.service';
import { SoundCardController } from './controller/sound-card.controller';

@Module({
  controllers: [SoundCardController],
  providers: [SoundCardService],
})
export class SoundCardModule {}
