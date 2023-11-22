import { Module } from '@nestjs/common';
import { MouseService } from './service/mouse.service';
import { MouseController } from './controller/mouse.controller';

@Module({
  controllers: [MouseController],
  providers: [MouseService],
})
export class MouseModule {}
