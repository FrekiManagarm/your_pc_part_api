import { Test, TestingModule } from '@nestjs/testing';
import { ThermalPasteService } from './thermal-paste.service';

describe('ThermalPasteService', () => {
  let service: ThermalPasteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThermalPasteService],
    }).compile();

    service = module.get<ThermalPasteService>(ThermalPasteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
