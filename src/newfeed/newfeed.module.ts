import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewFeed } from './newfeed.entity';
import { NewfeedResolver } from './newfeed.resolver';
import { NewfeedService } from './newfeed.service';

@Module({
  imports: [TypeOrmModule.forFeature([NewFeed])],
  providers: [NewfeedResolver, NewfeedService],
})
export class NewfeedModule {}
