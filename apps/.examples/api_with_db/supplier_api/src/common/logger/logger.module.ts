import { Global, Module } from '@nestjs/common';

import { AmqpModule } from '../amqp';
import { LoggerService } from './logger.service';

@Global()
@Module({
  imports: [
    AmqpModule
  ],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule { }
