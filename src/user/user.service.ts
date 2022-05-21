import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserArgs } from './args/createUser.arg';
import { User } from './user.entity';

/**
 * @author Le Tuan Kiet <letuankietdhth@gmail.com>
 * @note class User services
 * @exports @class UserService
 * */

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) public readonly userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async createUser(data: CreateUserArgs | any): Promise<User[]> {
    return this.userRepository.save(data);
  }

  public async findOne(userName: string): Promise<User> {
    return this.userRepository.findOne({
      where: { userName },
    });
  }
}
