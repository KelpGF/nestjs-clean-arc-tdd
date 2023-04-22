import { CreateUserUseCase } from '../../../../src/domain/usecases';
import { CreateUserModel } from 'src/domain/models/user.model';
import { mockDefaultUserId } from '../../../domain/mocks/user.mock';

export class CreateUserUseCaseStub implements CreateUserUseCase {
  async execute(input: CreateUserModel): Promise<string> {
    return mockDefaultUserId;
  }
}
