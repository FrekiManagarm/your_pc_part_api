import { Test, TestingModule } from '@nestjs/testing';
import { HeadphonesService } from '../service/headphones.service';

describe('HeadphonesService', () => {
  let service: HeadphonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeadphonesService],
    }).compile();

    service = module.get<HeadphonesService>(HeadphonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
