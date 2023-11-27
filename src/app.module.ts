import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { CpuModule } from './app/modules/cpu/cpu.module';
import { GpuModule } from './app/modules/gpu/gpu.module';
import { HddModule } from './app/modules/hdd/hdd.module';
import { RamModule } from './app/modules/ram/ram.module';
import { SsdModule } from './app/modules/ssd/ssd.module';
import { LoggerMiddleware } from './app/common/middleware/logger.middleware';
import { UserModule } from './app/modules/user/user.module';
import { MotherboardModule } from './app/modules/motherboard/motherboard.module';
import { MonitorModule } from './app/modules/monitor/monitor.module';
import { CaseModule } from './app/modules/case/case.module';
import { CpuCoolerModule } from './app/modules/cpu-cooler/cpu-cooler.module';
import { PsuModule } from './app/modules/psu/psu.module';
import { MouseModule } from './app/modules/mouse/mouse.module';
import { KeyboardModule } from './app/modules/keyboard/keyboard.module';
import { CaseFanModule } from './app/modules/case-fan/case-fan.module';
import { WebcamModule } from './app/modules/webcam/webcam.module';
import { SpeakersModule } from './app/modules/speakers/speakers.module';
import { HeadphonesModule } from './app/modules/headphones/headphones.module';
import { ThermalPasteModule } from './app/modules/thermal-paste/thermal-paste.module';
import { SoundCardModule } from './app/modules/sound-card/sound-card.module';
import { SetupModule } from './app/modules/setup/setup.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env"}),
    CpuModule, 
    GpuModule, 
    HddModule, 
    RamModule, 
    SsdModule, 
    UserModule, 
    MotherboardModule, 
    MonitorModule, 
    CaseModule, 
    CpuCoolerModule, 
    PsuModule, 
    MouseModule, 
    KeyboardModule, 
    CaseFanModule, 
    WebcamModule, 
    SpeakersModule, 
    HeadphonesModule, 
    ThermalPasteModule, 
    SoundCardModule, SetupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
