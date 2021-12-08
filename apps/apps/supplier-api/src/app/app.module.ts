import { Module } from '@nestjs/common';

import { HelloModule } from '../hello';
import { AuthModule } from '../auth';

import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    HelloModule
  ],
  controllers: [AppController],
})
export class AppModule { }
