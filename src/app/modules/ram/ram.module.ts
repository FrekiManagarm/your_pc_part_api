import { Module } from '@nestjs/common';
import { RamService } from './service/ram.service';
import { RamController } from './controller/ram.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [RamController],
  providers: [RamService, PrismaService],
})
export class RamModule {}
