import { IsNotEmpty } from 'class-validator';
import { NewFeed } from 'src/newfeed/newfeed.entity';
import { Photo } from 'src/photo/photo.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AllowPrivacyNewFeedPeople {
  PUBLIC = 'PUBLIC',
  FRIENDS = 'FRIENDS',
  ONLY_ME = 'ONLY_ME',
}

@Entity('newfeed_detail')
export class NewfeedDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cap_status', nullable: true })
  capStatus: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToOne((type) => NewFeed, (newfeed) => newfeed.newfeedDetail)
  newfeed: NewFeed;

  @OneToMany((type) => Photo, (photo) => photo.newfeedDetail)
  photos: Photo[];

  @Column({
    name: 'privacy',
    type: 'enum',
    enum: AllowPrivacyNewFeedPeople,
    default: AllowPrivacyNewFeedPeople.PUBLIC,
  })
  privacy: AllowPrivacyNewFeedPeople;
}
