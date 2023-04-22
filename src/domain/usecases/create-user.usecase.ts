import { CreateUserModel } from '../models/user.model';

export interface CreateUserUseCase {
  execute: (
    input: CreateUserUseCase.Input,
  ) => Promise<CreateUserUseCase.Output>;
}

export namespace CreateUserUseCase {
  export type Input = CreateUserModel;
  export type Output = string;
}
