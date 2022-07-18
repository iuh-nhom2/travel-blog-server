import { Args, ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { PhotoNewFeedDTO } from 'src/photo/dto/photo.dto';

@ArgsType()
export class CreateNewFeed {
  @Field((type) => String)
  readonly capStatus: string;

  @Field((type) => [String])
  readonly photo: PhotoNewFeedDTO[];
}
