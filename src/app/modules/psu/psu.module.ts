import { Module } from '@nestjs/common';
import { PsuService } from './psu.service';
import { PsuController } from './psu.controller';

@Module({
  controllers: [PsuController],
  providers: [PsuService],
})
export class PsuModule {}
