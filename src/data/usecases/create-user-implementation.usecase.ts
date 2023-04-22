import { Inject } from '@nestjs/common';
import { CreateUserUseCase } from 'src/domain/usecases';
import { InsertUserRepository } from '../protocols/db/insert-user-repository.protocol';

export class CreateUserImplementationUseCase implements CreateUserUseCase {
  constructor(
    @Inject('InsertUserRepositoryDefault')
    private readonly insertUserRepository: InsertUserRepository,
  ) {}

  async execute(
    input: CreateUserUseCase.Input,
  ): Promise<CreateUserUseCase.Output> {
    const userId = await this.insertUserRepository.insert(input);
    return userId;
  }
}
