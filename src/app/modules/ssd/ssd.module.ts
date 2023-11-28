import { Module } from '@nestjs/common';
import { SsdService } from './service/ssd.service';
import { SsdController } from './controller/ssd.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [SsdController],
  providers: [SsdService, PrismaService],
})
export class SsdModule {}
