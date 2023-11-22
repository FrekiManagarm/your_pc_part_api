import { Module } from '@nestjs/common';
import { HddService } from './hdd.service';
import { HddController } from './hdd.controller';

@Module({
  controllers: [HddController],
  providers: [HddService],
})
export class HddModule {}
