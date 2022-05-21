import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) public readonly authRepository: Repository<Auth>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async login(conditionLogin: any): Promise<any> {
    const { userName, password, typeDevice, deviceId } = conditionLogin;

    const userExit = await this.userService.findOne(userName);

    if (!userExit) {
      throw new HttpException('User does not exit', 400);
    }

    // check password
    const comparePassword = await bcrypt.compare(password, userExit.password);

    if (!comparePassword) {
      throw new HttpException('Wrong password', 402);
    }

    const checkUserSigned = await this.authRepository.findOne({
      where: { userId: userExit.id },
    });

    if (checkUserSigned) {
      const data = {
        token: this.jwtService.sign({
          userName: userName,
          userId: userExit.id,
        }),
        typeDevice: typeDevice,
        deviceId: deviceId,
      };
      let updateLogin;
      await this.authRepository.manager.transaction(async (tx) => {
        updateLogin = await tx.update(Auth, { userId: userExit.id }, data);
      });

      if (updateLogin?.raw) {
        const dataReponse = this.authRepository.findOne({
          where: { token: data.token },
        });
        return dataReponse;
      } else {
        return [
          {
            data: null,
          },
        ];
      }
    } else {
      const data = {
        userId: userExit.id,
        userName,

        token: this.jwtService.sign({
          userName: userName,
          userId: userExit.id,
        }),

        typeDevice: typeDevice,
        deviceId: deviceId,
      };

      let insertLogin;
      await this.authRepository.manager.transaction(async (tx) => {
        insertLogin = await tx.save(this.authRepository.create(data));
      });
      console.log('insertLogin', insertLogin);
      if (insertLogin) {
        return insertLogin;
      } else {
        return [
          {
            data: null,
          },
        ];
      }
    }
  }
}
