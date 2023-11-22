import { Test, TestingModule } from '@nestjs/testing';
import { WebcamController } from '../controller/webcam.controller';
import { WebcamService } from '../service/webcam.service';

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
