import { DeveloperDTO } from './../developers/developer.dto';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Point {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  type = 'Point';

  @Column()
  coordinates: number[];

  constructor(dto?: DeveloperDTO) {
    if (dto) {
      this.coordinates = [dto.longitude, dto.latitude];
    }
  }
}
