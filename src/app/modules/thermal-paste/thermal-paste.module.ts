import { Module } from '@nestjs/common';
import { ThermalPasteService } from './service/thermal-paste.service';
import { ThermalPasteController } from './controller/thermal-paste.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [ThermalPasteController],
  providers: [ThermalPasteService, PrismaService],
})
export class ThermalPasteModule {}
