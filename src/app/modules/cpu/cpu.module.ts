import { Module } from '@nestjs/common';
import { CpuService } from './service/cpu.service';
import { CpuController } from './controller/cpu.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [CpuController],
  providers: [CpuService, PrismaService],
  exports: [CpuService]
})
export class CpuModule {}
