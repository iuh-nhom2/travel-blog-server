import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: Number(configService.get('DATABASE_PORT')),
        username: 'travelbogadmin',
        password: 'travelbogadmin',
        database: 'travel-blog',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: !(process.env.NODE_ENV.trim() === 'production'),
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
