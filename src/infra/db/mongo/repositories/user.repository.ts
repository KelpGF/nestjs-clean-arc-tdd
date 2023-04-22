import { Inject } from '@nestjs/common';
import { InsertUserRepository } from 'src/data/protocols/db/insert-user-repository.protocol';
import { CreateUserModel } from 'src/domain/models/user.model';
import { NEST_CLEAN_ARCH_DB_COLLECTIONS } from '../mongo-db.enum';
import { Model } from 'mongoose';
import { UserDocument } from '../schemas';

export class UserRepositoryMongoDbImplementation
  implements InsertUserRepository
{
  constructor(
    @Inject(NEST_CLEAN_ARCH_DB_COLLECTIONS.USERS)
    private readonly userRepository: Model<UserDocument>,
  ) {}

  async insert(input: CreateUserModel): Promise<string> {
    const result = await this.userRepository.create({
      email: input.email,
      name: input.name,
    });

    return String(result._id);
  }
}
