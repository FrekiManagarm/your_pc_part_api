import { Module } from '@nestjs/common';
import { MouseService } from './service/mouse.service';
import { MouseController } from './controller/mouse.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [MouseController],
  providers: [MouseService, PrismaService],
})
export class MouseModule {}
