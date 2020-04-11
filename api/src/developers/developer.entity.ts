import { Point } from './../point/point.entity';
import { Column, Entity, ObjectID, ObjectIdColumn, Index } from 'typeorm';

@Entity()
export class Developer {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  name: string;

  @Column()
  githubUsername: string;

  @Column()
  bio: string;

  @Column()
  avatarUrl: string;

  @Column()
  techs: string[];

  @Column('point')
  // @Index('2dsphere', { spatial: true }) FIXME: Typeorm doesn't support this with mongodb ;(
  location: Point;
}
