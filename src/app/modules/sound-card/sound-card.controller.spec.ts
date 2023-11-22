import { Test, TestingModule } from '@nestjs/testing';
import { SoundCardController } from './sound-card.controller';
import { SoundCardService } from './sound-card.service';

describe('SoundCardController', () => {
  let controller: SoundCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundCardController],
      providers: [SoundCardService],
    }).compile();

    controller = module.get<SoundCardController>(SoundCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
