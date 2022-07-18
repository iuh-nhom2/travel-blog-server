import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuards } from 'src/guards/auth.guard';
import { CreateNewFeed } from './args/createNewFeed.args';
import { NewFeedDTO } from './dto/NewFeed.dto';
import { NewfeedService } from './newfeed.service';

@Resolver()
export class NewfeedResolver {
  constructor(private readonly newfeedService: NewfeedService) {}

  @Mutation(() => NewFeedDTO)
  @UseGuards(JwtAuthGuards)
  public async createNewfeed(
    @Args() args: CreateNewFeed,
  ): Promise<NewFeedDTO | any> {
    const newFeed = await this.newfeedService.createNewFeed(args);

    return newFeed;
  }
}
