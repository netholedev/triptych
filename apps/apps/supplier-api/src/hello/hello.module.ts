import { join } from 'path';
import { copySync } from 'fs-extra';

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { HelloService } from './hello.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'HELLO_CLIENT',
        useFactory: () => {
          // const srcPath = '/workspace/internal/hello/hello.proto';
          const distPath = join(__dirname, './hello.proto');
  
          // copySync(srcPath, distPath);
  
          return {
            transport: Transport.GRPC,
            options: {
              url: 'localhost:8000',
              package: 'hello',
              protoPath: distPath,
            }
          }
        },
      }
    ]),
  ],
  providers: [HelloService],
  exports: [HelloService],
})
export class HelloModule { }
