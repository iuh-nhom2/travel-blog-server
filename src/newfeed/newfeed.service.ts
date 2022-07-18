import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewFeed } from './args/createNewFeed.args';
import { NewFeedDTO } from './dto/NewFeed.dto';
import { NewFeed } from './newfeed.entity';

@Injectable()
export class NewfeedService {
  constructor(
    @InjectRepository(NewFeed)
    public readonly newFeedRepository: Repository<NewFeed>,
  ) {}

  public async createNewFeed(
    params: CreateNewFeed | any,
  ): Promise<NewFeedDTO | any> {
    return false;
  }
}
