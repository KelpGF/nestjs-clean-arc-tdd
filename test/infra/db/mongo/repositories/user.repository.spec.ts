import { Test, TestingModule } from '@nestjs/testing';
import { UserRepositoryMongoDbImplementation } from '../../../../../src/infra/db/mongo/repositories/user.repository';
import { NEST_CLEAN_ARCH_DB_COLLECTIONS } from '../../../../../src/infra/db/mongo/mongo-db.enum';
import { UserSchema } from '../../../../../src/infra/db/mongo/schemas';
import { makeImportMongooseModule } from '../mock/mongo-server.mock';
import { mockCreateUserModel } from '../../../../domain/mocks/user.mock';
import mongoose from 'mongoose';

describe('UserRepository', () => {
  let sut: UserRepositoryMongoDbImplementation;

  beforeEach(async () => {
    const mongoDbProviders = await makeImportMongooseModule([
      {
        provideName: NEST_CLEAN_ARCH_DB_COLLECTIONS.USERS,
        schema: UserSchema,
        collectionName: 'users',
      },
    ]);
    const testModule: TestingModule = await Test.createTestingModule({
      providers: [UserRepositoryMongoDbImplementation, ...mongoDbProviders],
    }).compile();

    sut = testModule.get<UserRepositoryMongoDbImplementation>(
      UserRepositoryMongoDbImplementation,
    );
  });

  describe('Insert()', () => {
    test('Should return a userId if success', async () => {
      const output = await sut.insert(mockCreateUserModel());
      expect(output).toBe(String(new mongoose.Types.ObjectId(output)));
    });
  });
});
