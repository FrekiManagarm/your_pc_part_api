import { Module } from '@nestjs/common';
import { CaseService } from './service/case.service';
import { CaseController } from './controller/case.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CaseController],
  providers: [CaseService, PrismaService],
})
export class CaseModule {}
