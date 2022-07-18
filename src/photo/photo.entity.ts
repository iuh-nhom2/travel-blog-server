import { IsNotEmpty } from 'class-validator';
import { NewfeedDetail } from 'src/newfeed-detail/newfeedDetail.entity';
import { NewFeed } from 'src/newfeed/newfeed.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('photo')
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url', nullable: false })
  url: string;

  @ManyToOne((type) => NewfeedDetail, (newfeedDetail) => newfeedDetail.photos)
  newfeedDetail: NewfeedDetail;

  @ManyToOne((type) => User, (user) => user.photos)
  user: User;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
