import { Module } from '@nestjs/common';
import { ThermalPasteService } from './thermal-paste.service';
import { ThermalPasteController } from './thermal-paste.controller';

@Module({
  controllers: [ThermalPasteController],
  providers: [ThermalPasteService],
})
export class ThermalPasteModule {}
