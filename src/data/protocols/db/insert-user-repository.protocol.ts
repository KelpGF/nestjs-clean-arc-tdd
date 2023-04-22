import { CreateUserModel } from 'src/domain/models/user.model';

export interface InsertUserRepository {
  insert: (
    input: InsertUserRepository.Input,
  ) => Promise<InsertUserRepository.Output>;
}

export namespace InsertUserRepository {
  export type Input = CreateUserModel;
  export type Output = string;
}
