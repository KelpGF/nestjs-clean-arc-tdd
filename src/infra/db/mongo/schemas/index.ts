export * from './user.schema';

import { Provider } from '@nestjs/common';
import {
  DATABASE_CONNECTIONS,
  NEST_CLEAN_ARCH_DB_COLLECTIONS,
} from '../mongo-db.enum';
import * as mongoose from 'mongoose';
import { UserSchema } from './';
import env from '../../../../main/constants/env';

export const makeMongoDbCollectionProviders = (): Provider[] => [
  {
    provide: NEST_CLEAN_ARCH_DB_COLLECTIONS.USERS,
    useFactory: (connection: mongoose.Connection) =>
      connection.model('users', UserSchema),
    inject: [DATABASE_CONNECTIONS.NEST_CLEAN_ARCH],
  },
];

export const makeMongoDbDatabaseProviders = (): Provider[] => [
  {
    provide: DATABASE_CONNECTIONS.NEST_CLEAN_ARCH,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(env.NESTJS_CLEAN_ARCH_DB_CONNECTION),
  },
];
