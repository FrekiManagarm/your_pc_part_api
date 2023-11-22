import { Test, TestingModule } from '@nestjs/testing';
import { PsuController } from '../controller/psu.controller';
import { PsuService } from '../service/psu.service';

describe('PsuController', () => {
  let controller: PsuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsuController],
      providers: [PsuService],
    }).compile();

    controller = module.get<PsuController>(PsuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
