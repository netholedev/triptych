import { join } from 'path';
import { copySync } from 'fs-extra';

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_CLIENT',
        useFactory: () => {
          // const srcPath = '../../../../internal/auth/auth.proto';
          const distPath = join(__dirname, './auth.proto');

          // copySync(srcPath, distPath);
  
          return {
            transport: Transport.GRPC,
            options: {
              url: 'localhost:8000',
              package: 'auth',
              protoPath: distPath,
            }
          }
        },
      }
    ]),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }
