import { Module } from '@nestjs/common';
import { MonitorService } from './service/monitor.service';
import { MonitorController } from './controller/monitor.controller';

@Module({
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
