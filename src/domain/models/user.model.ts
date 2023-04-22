import { UserEntity } from '../entities/user.entity';

export type CreateUserModel = Omit<UserEntity, 'id'>;
