import { Test, TestingModule } from '@nestjs/testing';
import { HddController } from './hdd.controller';
import { HddService } from './hdd.service';

describe('HddController', () => {
  let controller: HddController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HddController],
      providers: [HddService],
    }).compile();

    controller = module.get<HddController>(HddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
