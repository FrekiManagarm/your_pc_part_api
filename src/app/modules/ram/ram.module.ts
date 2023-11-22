import { Module } from '@nestjs/common';
import { RamService } from './service/ram.service';
import { RamController } from './controller/ram.controller';

@Module({
  controllers: [RamController],
  providers: [RamService],
})
export class RamModule {}
