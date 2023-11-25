import { Module } from '@nestjs/common';
import { CaseService } from './service/case.service';
import { CaseController } from './controller/case.controller';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [CaseController],
  providers: [CaseService, PrismaService],
})
export class CaseModule {}
