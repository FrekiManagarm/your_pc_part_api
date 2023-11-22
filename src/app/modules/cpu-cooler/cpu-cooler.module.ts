import { Module } from '@nestjs/common';
import { CpuCoolerService } from './service/cpu-cooler.service';
import { CpuCoolerController } from './controller/cpu-cooler.controller';

@Module({
  controllers: [CpuCoolerController],
  providers: [CpuCoolerService],
})
export class CpuCoolerModule {}
