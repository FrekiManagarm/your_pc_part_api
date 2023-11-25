import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  initApp(): {
    app: { name: string; version: string; github: string; };
    developers: { name: string; github: string; }[];
  } {
    return this.appService.initApp();
  }
}
