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

  constructor(dto?: Partial<DeveloperDTO>) {
    if (dto && dto.longitude && dto.latitude) {
      this.coordinates = [
        Number.parseFloat(dto.longitude.toString()),
        Number.parseFloat(dto.latitude.toString())
      ];
    }
  }

  toJSON() {
    return {
      type: this.type,
      coordinates: this.coordinates
    }
  }
}
