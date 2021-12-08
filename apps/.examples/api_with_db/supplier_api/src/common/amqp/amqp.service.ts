import { Injectable } from "@nestjs/common";
import { Options } from 'amqplib';

import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AmqpService {
  constructor(private readonly amqpconnection: AmqpConnection) { }

  // onModuleInit() {
  //   this.amqpconnection.connection.on('close', () => {
  //     setInterval(() => {
  //       console.log("trtying...")
  //       this.amqpconnection.init()
  //     }, 5000)
  //   })
  // }

  public publish(exchange: string, routingKey: string, message: any, options?: Options.Publish): Promise<void> {
    return this.amqpconnection.publish(exchange, routingKey, message, options);
  }

  public append(): void {
    // return this.amqpconnection.publish(exchange, routingKey, message, options);
  }
}