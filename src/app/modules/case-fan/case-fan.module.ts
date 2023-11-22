import { Module } from '@nestjs/common';
import { CaseFanService } from './service/case-fan.service';
import { CaseFanController } from './controller/case-fan.controller';

@Module({
  controllers: [CaseFanController],
  providers: [CaseFanService],
})
export class CaseFanModule {}
