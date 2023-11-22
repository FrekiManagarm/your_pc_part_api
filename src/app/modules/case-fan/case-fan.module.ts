import { Module } from '@nestjs/common';
import { CaseFanService } from './case-fan.service';
import { CaseFanController } from './case-fan.controller';

@Module({
  controllers: [CaseFanController],
  providers: [CaseFanService],
})
export class CaseFanModule {}
