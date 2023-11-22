import { Test, TestingModule } from '@nestjs/testing';
import { CpuCoolerController } from '../controller/cpu-cooler.controller';
import { CpuCoolerService } from '../service/cpu-cooler.service';

describe('CpuCoolerController', () => {
  let controller: CpuCoolerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpuCoolerController],
      providers: [CpuCoolerService],
    }).compile();

    controller = module.get<CpuCoolerController>(CpuCoolerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
