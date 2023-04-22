import { Module, Provider } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { Schema } from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = async (
  options: MongooseModuleOptions = {},
) => {
  const mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();
  return {
    uri: mongoUri,
    ...options,
  };
};

export const closeInMongodConnection = async () => {
  if (mongod) await mongod.stop();
};

export const makeImportMongooseModule = async (
  collections: {
    provideName: string;
    collectionName: string;
    schema: Schema;
  }[],
) => {
  const mongo = await rootMongooseTestModule();
  return [
    {
      provide: 'MockMongo',
      useFactory: (): Promise<typeof mongoose> => mongoose.connect(mongo.uri),
    },
    ...collections.map<Provider>(({ provideName, collectionName, schema }) => ({
      provide: provideName,
      inject: ['MockMongo'],
      useFactory: (connection: mongoose.Connection) =>
        connection.model(collectionName, schema),
    })),
  ];
};
