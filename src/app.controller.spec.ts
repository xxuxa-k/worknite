import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return list of endpoints', () => {
      expect(appController.getEndpoints())
      .toBe('{"/":"list of endpoints","/storegroups":"list of store groups","/stores":"list of stores","/users":"list of users"}');
    });
  });
});
