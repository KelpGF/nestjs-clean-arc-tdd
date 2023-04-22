import { Module } from '@nestjs/common';
import { CreateUserImplementationUseCase } from './usecases/create-user-implementation.usecase';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
  providers: [
    {
      provide: 'CreateUserUseCase',
      useClass: CreateUserImplementationUseCase,
    },
  ],
  exports: [
    {
      provide: 'CreateUserUseCase',
      useClass: CreateUserImplementationUseCase,
    },
  ],
})
export class DataModule {}
