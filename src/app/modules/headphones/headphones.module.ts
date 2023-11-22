import { Module } from '@nestjs/common';
import { HeadphonesService } from './headphones.service';
import { HeadphonesController } from './headphones.controller';

@Module({
  controllers: [HeadphonesController],
  providers: [HeadphonesService],
})
export class HeadphonesModule {}
