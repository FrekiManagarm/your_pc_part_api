import { Module } from '@nestjs/common';
import { HddService } from './service/hdd.service';
import { HddController } from './controller/hdd.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [HddController],
  providers: [HddService, PrismaService],
})
export class HddModule {}
