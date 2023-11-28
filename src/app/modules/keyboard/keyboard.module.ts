import { Module } from '@nestjs/common';
import { KeyboardService } from './service/keyboard.service';
import { KeyboardController } from './controller/keyboard.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [KeyboardController],
  providers: [KeyboardService, PrismaService],
})
export class KeyboardModule {}
