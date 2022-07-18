import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/user/dto/user.dto';

@ObjectType()
export class NewFeedDTO {
  @Field((type) => ID)
  readonly id: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: false })
  user: UserDTO;
}
