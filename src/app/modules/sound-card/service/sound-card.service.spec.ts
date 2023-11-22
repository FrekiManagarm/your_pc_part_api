import { Test, TestingModule } from '@nestjs/testing';
import { SoundCardService } from '../service/sound-card.service';

describe('SoundCardService', () => {
  let service: SoundCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundCardService],
    }).compile();

    service = module.get<SoundCardService>(SoundCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
