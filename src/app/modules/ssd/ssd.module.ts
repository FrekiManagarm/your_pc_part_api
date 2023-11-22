import { Module } from '@nestjs/common';
import { SsdService } from './service/ssd.service';
import { SsdController } from './controller/ssd.controller';

@Module({
  controllers: [SsdController],
  providers: [SsdService],
})
export class SsdModule {}
