import { CreateUserModel } from '../../../src/domain/models/user.model';

export const mockDefaultUserId = 'userId';

export const mockCreateUserModel = (): CreateUserModel => ({
  email: 'mock-user@mail.com',
  name: 'Mock User',
});
