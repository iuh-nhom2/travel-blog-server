import { Test, TestingModule } from '@nestjs/testing';
import { NewfeedResolver } from './newfeed.resolver';

describe('NewfeedResolver', () => {
  let resolver: NewfeedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewfeedResolver],
    }).compile();

    resolver = module.get<NewfeedResolver>(NewfeedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
