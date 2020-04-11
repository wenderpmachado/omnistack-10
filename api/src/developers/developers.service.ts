import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Developer } from './developer.entity';
import { CrudRequest, GetManyDefaultResponse, Override } from '@nestjsx/crud';

@Injectable()
export class DevelopersService extends TypeOrmCrudService<Developer> {
  constructor(@InjectRepository(Developer) repo) {
    super(repo);
  }

  @Override()
  getMany(req: CrudRequest): Promise<GetManyDefaultResponse<Developer> | Developer[]> {
    return this.repo.find();
  }

  async create(developer: Developer) {
    return this.repo.save<Developer>(developer);
  }
}
