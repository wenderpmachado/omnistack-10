import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetManyDefaultResponse } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Point } from './../point/point.entity';
import { StringUtils } from './../utils/string.utils';
import { DeveloperDTO } from './developer.dto';
import { Developer } from './developer.entity';

@Injectable()
export class DevelopersService extends TypeOrmCrudService<Developer> {
  constructor(@InjectRepository(Developer) repo) {
    super(repo);
  }

  getManyCustom(dto: Partial<DeveloperDTO>): Promise<GetManyDefaultResponse<Developer> | Developer[]> {
    const techsArray = StringUtils.asArray(dto.techs);

    const point = new Point(dto);

    const options = {
      where: {
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: point.toJSON(),
            $maxDistance: 10000,
          },
        },
      }
    }

    return this.repo.find(options);
  }

  async create(developer: Developer) {
    return this.repo.save<Developer>(developer);
  }
}
