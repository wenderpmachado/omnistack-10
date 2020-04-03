import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersController } from './developers.controller';

describe('Developers Controller', () => {
  let controller: DevelopersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopersController],
    }).compile();

    controller = module.get<DevelopersController>(DevelopersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
