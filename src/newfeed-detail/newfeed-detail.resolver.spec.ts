import { Test, TestingModule } from '@nestjs/testing';
import { NewfeedDetailResolver } from './newfeed-detail.resolver';

describe('NewfeedDetailResolver', () => {
  let resolver: NewfeedDetailResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewfeedDetailResolver],
    }).compile();

    resolver = module.get<NewfeedDetailResolver>(NewfeedDetailResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
