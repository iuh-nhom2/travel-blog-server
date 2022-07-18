import { Args, ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PhotoNewFeedDTO {
  @Field((type) => String)
  url: string;
}
