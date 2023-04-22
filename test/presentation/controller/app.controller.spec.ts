import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../src/presentation/controllers/app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  test('Should return "NestJS Clean Arc API!"', () => {
    expect(appController.getHello()).toBe('NestJS Clean Arc API!');
  });
});
