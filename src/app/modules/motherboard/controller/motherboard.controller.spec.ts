import { Test, TestingModule } from '@nestjs/testing';
import { MotherboardController } from '../controller/motherboard.controller';
import { MotherboardService } from '../service/motherboard.service';

describe('MotherboardController', () => {
  let controller: MotherboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotherboardController],
      providers: [MotherboardService],
    }).compile();

    controller = module.get<MotherboardController>(MotherboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
