import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', nullable: false })
  @IsNotEmpty({ message: 'user id not null' })
  userId: string;

  @Column({ name: 'userName', nullable: false })
  @IsNotEmpty({ message: 'user id not null' })
  userName: string;

  @Column({ name: 'token', nullable: false })
  @IsNotEmpty({ message: 'token is not empty' })
  token: string;

  @Column({ name: 'type_device', nullable: false })
  @IsNotEmpty({ message: 'type devices not null' })
  typeDevice: string;

  @Column({ name: 'devie_id', nullable: true })
  deviceId: string;

  @Column({ name: 'os', nullable: true })
  os: string;

  @Column({ name: 'ban_dit', nullable: true })
  banDit: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;
}
