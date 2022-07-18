import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { GraphqlModule } from './graphql/graphql.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { NewfeedModule } from './newfeed/newfeed.module';
import { NewfeedDetailModule } from './newfeed-detail/newfeed-detail.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    GraphqlModule,
    UserModule,
    DatabaseModule,
    AuthModule,
    NewfeedModule,
    NewfeedDetailModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
