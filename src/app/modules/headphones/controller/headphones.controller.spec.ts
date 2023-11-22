import { Test, TestingModule } from '@nestjs/testing';
import { HeadphonesController } from '../controller/headphones.controller';
import { HeadphonesService } from '../service/headphones.service';

describe('HeadphonesController', () => {
  let controller: HeadphonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeadphonesController],
      providers: [HeadphonesService],
    }).compile();

    controller = module.get<HeadphonesController>(HeadphonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
