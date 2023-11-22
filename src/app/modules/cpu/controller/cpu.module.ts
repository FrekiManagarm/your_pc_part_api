import { Module } from '@nestjs/common';
import { CpuService } from '../service/cpu.service';
import { CpuController } from './cpu.controller';

@Module({
  controllers: [CpuController],
  providers: [CpuService],
})
export class CpuModule {}