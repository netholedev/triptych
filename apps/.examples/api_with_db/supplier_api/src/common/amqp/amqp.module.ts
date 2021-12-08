import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

import { AmqpService } from './amqp.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://guest:guest@localhost:5672',
      connectionManagerOptions: {
        heartbeatIntervalInSeconds: 2,
        reconnectTimeInSeconds: 1,
      }
    }),
  ],
  providers: [AmqpService],
  exports: [AmqpService],
})
export class AmqpModule { }
