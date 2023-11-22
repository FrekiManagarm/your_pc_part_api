import { Module } from '@nestjs/common';
import { MotherboardService } from './service/motherboard.service';
import { MotherboardController } from './controller/motherboard.controller';

@Module({
  controllers: [MotherboardController],
  providers: [MotherboardService],
})
export class MotherboardModule {}
