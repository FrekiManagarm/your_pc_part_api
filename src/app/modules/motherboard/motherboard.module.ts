import { Module } from '@nestjs/common';
import { MotherboardService } from './service/motherboard.service';
import { MotherboardController } from './controller/motherboard.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [MotherboardController],
  providers: [MotherboardService, PrismaService],
})
export class MotherboardModule {}
