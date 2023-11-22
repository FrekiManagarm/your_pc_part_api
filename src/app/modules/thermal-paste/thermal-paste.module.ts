import { Module } from '@nestjs/common';
import { ThermalPasteService } from './service/thermal-paste.service';
import { ThermalPasteController } from './controller/thermal-paste.controller';

@Module({
  controllers: [ThermalPasteController],
  providers: [ThermalPasteService],
})
export class ThermalPasteModule {}
