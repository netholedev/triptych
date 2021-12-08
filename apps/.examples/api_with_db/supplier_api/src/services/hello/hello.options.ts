import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const helloClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:8000',
    package: 'hello',
    protoPath: join(__dirname, '../../../../../../internal/hello.proto'),
  },
};
