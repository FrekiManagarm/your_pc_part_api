import { Module } from '@nestjs/common';
import { CpuCoolerService } from './service/cpu-cooler.service';
import { CpuCoolerController } from './controller/cpu-cooler.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [CpuCoolerController],
  providers: [CpuCoolerService, PrismaService],
})
export class CpuCoolerModule {}
