import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authConfig } from 'src/config/authConfig';
import { UserModule } from 'src/user/user.module';
import { Auth } from './auth.entity';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthenticationStrategy } from './strategy/auth.stratgy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: authConfig.secretKeys.jwt,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    UserModule,
  ],
  providers: [AuthService, AuthResolver, AuthenticationStrategy],
  exports: [AuthService],
})
export class AuthModule {}
