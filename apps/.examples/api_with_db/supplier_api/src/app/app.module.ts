import { Module } from '@nestjs/common';

import { AuthModule } from '../api';
import { HelloService } from '../services';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    // LoggerModule
  ],
  controllers: [AppController],
  providers: [HelloService, AppService],
})
export class AppModule { }
