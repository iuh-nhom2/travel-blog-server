import { IsNotEmpty } from 'class-validator';
import { NewFeed } from 'src/newfeed/newfeed.entity';
import { Photo } from 'src/photo/photo.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_name', nullable: false })
  @IsNotEmpty({ message: 'username not null' })
  userName: string;

  @Column({ name: 'password', nullable: false })
  @IsNotEmpty({ message: 'password can not null' })
  password: string;

  @Column({ name: 'category_user' }) // 1: admin, 2: user
  @IsNotEmpty({ message: 'category user not null' })
  categoryUser: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @Column({ name: 'register_by', nullable: false }) // facebook, google, apple
  @IsNotEmpty({ message: 'Can not null' })
  registerBy: string;

  @OneToMany((type) => NewFeed, (newfeed) => newfeed.user)
  newfeeds: NewFeed[];

  @OneToMany((type) => Photo, (photo) => photo.user)
  photos: Photo[];
}
