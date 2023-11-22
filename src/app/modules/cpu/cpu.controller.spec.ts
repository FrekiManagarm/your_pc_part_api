import { Test, TestingModule } from '@nestjs/testing';
import { CpuController } from './controller/cpu.controller';
import { CpuService } from './service/cpu.service';

describe('CpuController', () => {
  let controller: CpuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpuController],
      providers: [CpuService],
    }).compile();

    controller = module.get<CpuController>(CpuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
