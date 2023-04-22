import { Test, TestingModule } from '@nestjs/testing';
import {
  mockCreateUserModel,
  mockDefaultUserId,
} from '../../domain/mocks/user.mock';
import { UserController } from '../../../src/presentation/controllers/user.controller';
import { CreateUserUseCase } from '../../../src/domain/usecases';
import { CreateUserUseCaseStub } from './mocks/create-user.usecase.mock';
import { InternalServerErrorException } from '@nestjs/common';

describe('UserController', () => {
  let sut: UserController;
  let createUserUseCaseStub: CreateUserUseCase;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: 'CreateUserUseCase',
          useClass: CreateUserUseCaseStub,
        },
      ],
    }).compile();

    sut = testModule.get<UserController>(UserController);
    createUserUseCaseStub =
      testModule.get<CreateUserUseCase>('CreateUserUseCase');
  });

  describe('Create()', () => {
    test('Should call CreateUserUseCase with correct values', async () => {
      const input = mockCreateUserModel();
      const createSpy = jest.spyOn(createUserUseCaseStub, 'execute');
      await sut.create(input);

      expect(createSpy).toHaveBeenCalledWith(input);
    });

    test('Should return a 500 if CreateUserUseCase throws', async () => {
      const input = mockCreateUserModel();
      jest
        .spyOn(createUserUseCaseStub, 'execute')
        .mockRejectedValueOnce(new Error());
      const output = await sut.create(input);
      expect(output).toBeInstanceOf(InternalServerErrorException);
    });

    test('Should return a User ID if success', async () => {
      const output = await sut.create(mockCreateUserModel());
      expect(output).toEqual({ userId: mockDefaultUserId });
    });
  });
});
