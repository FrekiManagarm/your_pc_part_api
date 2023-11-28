import { Module } from '@nestjs/common';
import { WebcamService } from './service/webcam.service';
import { WebcamController } from './controller/webcam.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [WebcamController],
  providers: [WebcamService, PrismaService],
})
export class WebcamModule {}
