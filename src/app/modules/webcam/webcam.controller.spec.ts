import { Test, TestingModule } from '@nestjs/testing';
import { WebcamController } from './webcam.controller';
import { WebcamService } from './webcam.service';

describe('WebcamController', () => {
  let controller: WebcamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebcamController],
      providers: [WebcamService],
    }).compile();

    controller = module.get<WebcamController>(WebcamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
