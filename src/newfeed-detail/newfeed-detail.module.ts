import { Module } from '@nestjs/common';
import { NewfeedDetailResolver } from './newfeed-detail.resolver';
import { NewfeedDetailService } from './newfeed-detail.service';

@Module({
  providers: [NewfeedDetailResolver, NewfeedDetailService],
})
export class NewfeedDetailModule {}
