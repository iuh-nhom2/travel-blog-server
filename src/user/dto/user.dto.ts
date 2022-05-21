import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field((type) => ID)
  readonly id: string;

  @Field({ nullable: false })
  readonly userName: string;

  @Field({ nullable: false })
  readonly categoryUser: number;

  @Field({ nullable: true })
  readonly createdAt?: string;

  @Field({ nullable: true })
  readonly updatedAt?: string;

  @Field({ nullable: false })
  readonly registerBy: string;
}
