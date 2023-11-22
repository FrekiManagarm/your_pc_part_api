import { Module } from '@nestjs/common';
import { HddService } from './service/hdd.service';
import { HddController } from './controller/hdd.controller';

@Module({
  controllers: [HddController],
  providers: [HddService],
})
export class HddModule {}
