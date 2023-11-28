import { Module } from '@nestjs/common';
import { GpuService } from './service/gpu.service';
import { GpuController } from './controller/gpu.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [GpuController],
  providers: [GpuService, PrismaService],
})
export class GpuModule {}
