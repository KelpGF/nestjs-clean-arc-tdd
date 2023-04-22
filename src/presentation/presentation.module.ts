import { Module } from '@nestjs/common';
import { AppController, UserController } from './controllers';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
  controllers: [AppController, UserController],
})
export class PresentationModule {}
