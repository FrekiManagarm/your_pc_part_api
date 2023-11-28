import { Module } from '@nestjs/common';
import { HeadphonesService } from './service/headphones.service';
import { HeadphonesController } from './controller/headphones.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [HeadphonesController],
  providers: [HeadphonesService, PrismaService],
})
export class HeadphonesModule {}
