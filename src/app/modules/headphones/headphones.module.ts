import { Module } from '@nestjs/common';
import { HeadphonesService } from './service/headphones.service';
import { HeadphonesController } from './controller/headphones.controller';

@Module({
  controllers: [HeadphonesController],
  providers: [HeadphonesService],
})
export class HeadphonesModule {}
