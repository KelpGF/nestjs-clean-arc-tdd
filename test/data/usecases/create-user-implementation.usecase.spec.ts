import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserImplementationUseCase } from '../../../src/data/usecases/create-user-implementation.usecase';
import { InsertUserRepositoryStub } from './mocks/insert-user-repository.mock';
import { InsertUserRepository } from '../../../src/data/protocols/db/insert-user-repository.protocol';
import {
  mockCreateUserModel,
  mockDefaultUserId,
} from '../../domain/mocks/user.mock';

describe('CreateUserUseCase', () => {
  let sut: CreateUserImplementationUseCase;
  let insertUserRepositoryStub: InsertUserRepository;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserImplementationUseCase,
        {
          provide: 'InsertUserRepositoryDefault',
          useClass: InsertUserRepositoryStub,
        },
      ],
    }).compile();

    sut = testModule.get<CreateUserImplementationUseCase>(
      CreateUserImplementationUseCase,
    );
    insertUserRepositoryStub = testModule.get<InsertUserRepository>(
      'InsertUserRepositoryDefault',
    );
  });

  test('Should call InsertUserRepository with correct values', async () => {
    const input = mockCreateUserModel();
    const insertSpy = jest.spyOn(insertUserRepositoryStub, 'insert');
    await sut.execute(input);

    expect(insertSpy).toHaveBeenCalledWith(input);
  });

  test('Should throw if InsertUserRepository throws', async () => {
    const input = mockCreateUserModel();
    jest
      .spyOn(insertUserRepositoryStub, 'insert')
      .mockRejectedValueOnce(new Error());
    const promise = sut.execute(input);
    await expect(promise).rejects.toThrow();
  });

  test('Should return a User ID if success', async () => {
    const output = await sut.execute(mockCreateUserModel());
    expect(output).toEqual(mockDefaultUserId);
  });
});
