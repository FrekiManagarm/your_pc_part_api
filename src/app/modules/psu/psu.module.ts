import { Module } from '@nestjs/common';
import { PsuService } from './service/psu.service';
import { PsuController } from './controller/psu.controller';

@Module({
  controllers: [PsuController],
  providers: [PsuService],
})
export class PsuModule {}
