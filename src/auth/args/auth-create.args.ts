import { ArgsType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

@ArgsType()
export class CreateAuthArgs {
  @Field((type) => String)
  @IsNotEmpty()
  readonly userName: string;

  @Field((type) => String)
  @IsNotEmpty()
  readonly password: string;

  // @Field(type => String)
  // @IsNotEmpty()
  // readonly token: string;

  @Field((type) => String)
  @IsNotEmpty()
  readonly typeDevice: string;

  @Field((type) => String)
  @IsNotEmpty()
  readonly deviceId: string;
}
