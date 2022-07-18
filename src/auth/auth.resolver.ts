import { HttpException } from '@nestjs/common';
import { Args, Mutation, Parent, Resolver } from '@nestjs/graphql';
import { GraphQLInputObjectType } from 'graphql';
import { UserService } from 'src/user/user.service';
import { CreateAuthArgs } from './args/auth-create.args';
import { AuthService } from './auth.service';
import { AuthDTO, ResponseAuth } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => ResponseAuth)
  public async userLogin(
    @Args() args: CreateAuthArgs,
  ): Promise<ResponseAuth | any> {
    try {
      const resultLogin = await this.authService.login(args);
      if (resultLogin) {
        return {
          isSuccess: true,
          message: 'Login Success',
          statusCode: 402,
          auth: resultLogin,
        };
      } else {
        return {
          isSuccess: false,
          message: 'Login Failure',
          statusCode: 403,
          auth: null,
        };
      }
    } catch (error) {
      return {
        isSuccess: false,
        message: error.message,
        statusCode: error.status,
        auth: null,
      };
      return error;
    }
  }
}
