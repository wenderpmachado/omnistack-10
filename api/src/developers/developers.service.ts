import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Developer } from './developer.entity';

@Injectable()
export class DevelopersService extends TypeOrmCrudService<Developer> {
  constructor(@InjectRepository(Developer) repo) {
    super(repo);
  }
}
