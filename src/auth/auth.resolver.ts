import { HttpException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { CreateAuthArgs } from './args/auth-create.args';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => AuthDTO)
  public async userLogin(@Args() args: CreateAuthArgs): Promise<AuthDTO | any> {
    try {
      const resultLogin = await this.authService.login(args);
      if (resultLogin) {
        return resultLogin;
      } else {
        throw new HttpException('Login Failed', 403);
      }
    } catch (error) {
      throw new HttpException('Wrong username or password', 403);
    }
  }
}
