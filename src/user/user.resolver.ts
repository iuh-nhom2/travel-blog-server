import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { CreateUserArgs } from './args/createUser.arg';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDTO])
  public async users(): Promise<any> {
    const users = await this.userService.findAll();
    return users;
  }

  @Mutation(() => UserDTO)
  public async createUser(
    @Args() args: CreateUserArgs,
  ): Promise<UserDTO | any> {
    const passwordBcrypt = await bcrypt.hash(args.password, 10);

    const input = {
      ...args,
      password: passwordBcrypt,
    };

    const user = await this.userService.createUser(input);

    return user;
  }
}
