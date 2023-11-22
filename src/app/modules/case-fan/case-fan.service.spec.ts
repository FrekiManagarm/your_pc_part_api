import { Test, TestingModule } from '@nestjs/testing';
import { CaseFanService } from './case-fan.service';

describe('CaseFanService', () => {
  let service: CaseFanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseFanService],
    }).compile();

    service = module.get<CaseFanService>(CaseFanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
