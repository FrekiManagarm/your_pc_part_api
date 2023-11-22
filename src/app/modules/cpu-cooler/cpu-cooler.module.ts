import { Module } from '@nestjs/common';
import { CpuCoolerService } from './cpu-cooler.service';
import { CpuCoolerController } from './cpu-cooler.controller';

@Module({
  controllers: [CpuCoolerController],
  providers: [CpuCoolerService],
})
export class CpuCoolerModule {}
