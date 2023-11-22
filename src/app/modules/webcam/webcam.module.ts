import { Module } from '@nestjs/common';
import { WebcamService } from './service/webcam.service';
import { WebcamController } from './controller/webcam.controller';

@Module({
  controllers: [WebcamController],
  providers: [WebcamService],
})
export class WebcamModule {}
