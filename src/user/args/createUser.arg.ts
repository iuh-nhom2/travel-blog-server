import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class CreateUserArgs {
  @Field((type) => String)
  @IsNotEmpty()
  readonly userName: string;

  @Field((type) => String)
  @IsNotEmpty()
  readonly password: string;

  @Field((type) => Int)
  @IsNotEmpty()
  readonly categoryUser: number;

  @Field((type) => String)
  readonly registerBy: string;
}
