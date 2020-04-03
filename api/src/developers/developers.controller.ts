import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Developer } from './developer.entity';
import { DevelopersService } from './developers.service';

@Crud({ model: { type: Developer } })
@Controller('developers')
export class DevelopersController implements CrudController<Developer> {
  constructor(public service: DevelopersService) {}
}
