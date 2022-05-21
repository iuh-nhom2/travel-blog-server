import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthDTO {
  @Field((type) => ID)
  readonly id: number;

  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false })
  userName: string;

  @Field({ nullable: false })
  token: string;

  @Field({ nullable: false })
  typeDevice: string;

  @Field({ nullable: true })
  deviceId: string;

  @Field({ nullable: true })
  banDit: boolean;

  @Field({ nullable: true })
  readonly createdAt?: Date;

  @Field({ nullable: true })
  readonly updatedAt?: Date;
}
