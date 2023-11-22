import { Test, TestingModule } from '@nestjs/testing';
import { MotherboardService } from '../service/motherboard.service';

describe('MotherboardService', () => {
  let service: MotherboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotherboardService],
    }).compile();

    service = module.get<MotherboardService>(MotherboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
