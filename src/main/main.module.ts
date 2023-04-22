import { Module } from '@nestjs/common';
import { PresentationModule } from 'src/presentation/presentation.module';

@Module({
  imports: [PresentationModule],
})
export class MainModule {}
