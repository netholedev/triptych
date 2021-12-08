import { Injectable, ConsoleLogger } from "@nestjs/common";

import { AmqpService } from "../amqp";

@Injectable()
export class LoggerService extends ConsoleLogger {
  private readonly exchangeName: string = "LOGGER_EXCHANGE";
  private readonly logsRoutingKey: string = "SUPPLIER_API_LOGS";

  constructor(private readonly amqpService: AmqpService) {
    super()
  }

  private publishToRabbitMQ(message: string, context: string = ""): void {
    const msg = {
      message,
      context,
    }

    this.amqpService.publish(this.exchangeName, this.logsRoutingKey, msg)
  }

  public log(message: string, context?: string): void {
    super.log(message, context)
    this.publishToRabbitMQ(message, context)
  }
}