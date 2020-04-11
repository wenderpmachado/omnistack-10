import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import axios from 'axios';

import { Point } from './../point/point.entity';
import { StringUtils } from './../utils/string.utils';
import { DeveloperDTO } from './developer.dto';
import { Developer } from './developer.entity';
import { DevelopersService } from './developers.service';

@Crud({ model: { type: Developer } })
@Controller('developers')
export class DevelopersController implements CrudController<Developer> {
  private githubAPIUrl = 'https://api.github.com/users/';

  constructor(public service: DevelopersService) {}

  @Override()
  async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: DeveloperDTO): Promise<Developer> {
    const githubUsername = dto.githubUsername;

    let dev = await this.service.findOne({ githubUsername })

    if (!dev) {
      const apiResponse = await axios.get(this.githubAPIUrl + githubUsername)

      const { login: name, avatar_url: avatarUrl, bio } = apiResponse.data;

      const techsArray = StringUtils.asArray(dto.techs);

      const location = new Point(dto);

      dev = await this.service.create({
        githubUsername,
        name,
        avatarUrl,
        bio,
        techs: techsArray,
        location
      })
    }

    return dev;
  }
}
