import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

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
}
