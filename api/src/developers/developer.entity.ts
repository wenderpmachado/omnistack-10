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
  @Index({ spatial: true })
  location: Point;
}
