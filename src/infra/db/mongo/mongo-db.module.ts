import { Module, Provider } from '@nestjs/common';
import {
  makeMongoDbCollectionProviders,
  makeMongoDbDatabaseProviders,
} from './schemas/';
import { UserRepositoryMongoDbImplementation } from './repositories';

const providers: Provider[] = [
  ...makeMongoDbDatabaseProviders(),
  ...makeMongoDbCollectionProviders(),
  {
    provide: 'InsertUserRepositoryDefault',
    useClass: UserRepositoryMongoDbImplementation,
  },
];

@Module({
  providers: providers,
  exports: providers,
})
export class MongoDbModule {}
