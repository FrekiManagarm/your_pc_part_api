import { Test, TestingModule } from '@nestjs/testing';
import { SetupController } from '../controller/setup.controller';
import { SetupService } from '../service/setup.service';

describe('SetupController', () => {
  let controller: SetupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetupController],
      providers: [SetupService],
    }).compile();

    controller = module.get<SetupController>(SetupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
