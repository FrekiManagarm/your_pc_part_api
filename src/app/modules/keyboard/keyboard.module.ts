import { Module } from '@nestjs/common';
import { KeyboardService } from './service/keyboard.service';
import { KeyboardController } from './controller/keyboard.controller';

@Module({
  controllers: [KeyboardController],
  providers: [KeyboardService],
})
export class KeyboardModule {}
