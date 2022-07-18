import { Test, TestingModule } from '@nestjs/testing';
import { NewfeedDetailService } from './newfeed-detail.service';

describe('NewfeedDetailService', () => {
  let service: NewfeedDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewfeedDetailService],
    }).compile();

    service = module.get<NewfeedDetailService>(NewfeedDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
