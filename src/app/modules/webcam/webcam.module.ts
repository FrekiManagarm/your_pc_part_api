import { Module } from '@nestjs/common';
import { WebcamService } from './webcam.service';
import { WebcamController } from './webcam.controller';

@Module({
  controllers: [WebcamController],
  providers: [WebcamService],
})
export class WebcamModule {}
