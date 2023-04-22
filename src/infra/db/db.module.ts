import { Module } from '@nestjs/common';
import { MongoDbModule } from './mongo/mongo-db.module';

@Module({
  imports: [MongoDbModule],
  exports: [MongoDbModule],
})
export class DbModule {}
