import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

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
  readonly deviceId: string;

  @Field((type) => String)
  @IsNotEmpty()
  readonly os: string;
}

export const CreateInputObjectLogin = new GraphQLInputObjectType({
  name: 'CreateAuthArgs',
  description: 'Input Login',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    typeDevice: {
      type: new GraphQLNonNull(GraphQLString),
    },
    deviceId: {
      type: GraphQLString,
    },
    os: {
      type: GraphQLString,
    },
  }),
});
