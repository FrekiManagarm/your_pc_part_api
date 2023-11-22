import { Test, TestingModule } from '@nestjs/testing';
import { ThermalPasteController } from './thermal-paste.controller';
import { ThermalPasteService } from './thermal-paste.service';

describe('ThermalPasteController', () => {
  let controller: ThermalPasteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThermalPasteController],
      providers: [ThermalPasteService],
    }).compile();

    controller = module.get<ThermalPasteController>(ThermalPasteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
