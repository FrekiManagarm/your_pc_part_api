import { Module } from '@nestjs/common';
import { PsuService } from './service/psu.service';
import { PsuController } from './controller/psu.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [PsuController],
  providers: [PsuService, PrismaService],
})
export class PsuModule {}
