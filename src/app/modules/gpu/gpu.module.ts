import { Module } from '@nestjs/common';
import { GpuService } from './service/gpu.service';
import { GpuController } from './controller/gpu.controller';

@Module({
  controllers: [GpuController],
  providers: [GpuService],
})
export class GpuModule {}
