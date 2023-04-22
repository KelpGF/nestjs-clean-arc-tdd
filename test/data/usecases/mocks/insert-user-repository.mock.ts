import { InsertUserRepository } from '../../../../src/data/protocols/db/insert-user-repository.protocol';
import { mockDefaultUserId } from '../../../domain/mocks/user.mock';

export class InsertUserRepositoryStub implements InsertUserRepository {
  async insert(
    input: InsertUserRepository.Input,
  ): Promise<InsertUserRepository.Output> {
    return mockDefaultUserId;
  }
}
