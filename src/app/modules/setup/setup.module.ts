import { Module } from '@nestjs/common';
import { SetupService } from './service/setup.service';
import { SetupController } from './controller/setup.controller';
import { PsuModule } from '../psu/psu.module';
import { RamModule } from '../ram/ram.module';
import { GpuModule } from '../gpu/gpu.module';
import { CpuModule } from '../cpu/cpu.module';
import { SsdModule } from '../ssd/ssd.module';
import { HddModule } from '../hdd/hdd.module';
import { SpeakersModule } from '../speakers/speakers.module';
import { MonitorModule } from '../monitor/monitor.module';
import { CaseModule } from '../case/case.module';
import { CaseFanModule } from '../case-fan/case-fan.module';
import { MotherboardModule } from '../motherboard/motherboard.module';
import { KeyboardModule } from '../keyboard/keyboard.module';
import { HeadphonesModule } from '../headphones/headphones.module';
import { CpuCoolerModule } from '../cpu-cooler/cpu-cooler.module';
import { ThermalPasteModule } from '../thermal-paste/thermal-paste.module';
import { WebcamModule } from '../webcam/webcam.module';

@Module({
  imports: [
    PsuModule,
    RamModule,
    GpuModule,
    CpuModule,
    SsdModule,
    HddModule,
    SpeakersModule,
    MonitorModule,
    CaseModule,
    CaseFanModule,
    MotherboardModule,
    KeyboardModule,
    HeadphonesModule,
    CpuCoolerModule,
    SsdModule,
    ThermalPasteModule,
    WebcamModule,
  ],
  controllers: [SetupController],
  providers: [SetupService],
})
export class SetupModule {}
