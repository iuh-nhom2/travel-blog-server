import { IsNotEmpty } from 'class-validator';
import { NewfeedDetail } from 'src/newfeed-detail/newfeedDetail.entity';
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

@Entity('newfeed')
export class NewFeed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.newfeeds)
  user: User;

  @OneToOne((type) => NewfeedDetail, (newfeedDetail) => newfeedDetail.newfeed)
  newfeedDetail: NewfeedDetail;
}
