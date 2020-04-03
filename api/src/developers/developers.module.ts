import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Developer } from './developer.entity';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  providers: [DevelopersService],
  exports: [DevelopersService],
  controllers: [DevelopersController]
})
export class DevelopersModule {}
