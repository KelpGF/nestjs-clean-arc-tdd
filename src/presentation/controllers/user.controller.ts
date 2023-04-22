import {
  Body,
  Controller,
  Inject,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateUserUseCase } from 'src/domain/usecases';

@Controller('users')
export class UserController {
  constructor(
    @Inject('CreateUserUseCase')
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async create(@Body() body) {
    try {
      const usecaseInput: CreateUserUseCase.Input = {
        email: body.email,
        name: body.name,
      };
      const newUserId = await this.createUserUseCase.execute(usecaseInput);
      return { userId: newUserId };
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
