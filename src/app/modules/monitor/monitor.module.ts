import { Module } from '@nestjs/common';
import { MonitorService } from './service/monitor.service';
import { MonitorController } from './controller/monitor.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [MonitorController],
  providers: [MonitorService, PrismaService],
})
export class MonitorModule {}
