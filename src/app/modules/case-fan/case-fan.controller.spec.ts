import { Test, TestingModule } from '@nestjs/testing';
import { CaseFanController } from './case-fan.controller';
import { CaseFanService } from './case-fan.service';

describe('CaseFanController', () => {
  let controller: CaseFanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseFanController],
      providers: [CaseFanService],
    }).compile();

    controller = module.get<CaseFanController>(CaseFanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
