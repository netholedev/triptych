import { Observable } from 'rxjs';

import { Metadata } from '@grpc/grpc-js';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';

import { IHelloService, ISayHiResponse } from './hello.interfaces';
import { helloClientOptions } from './hello.options';

@Injectable()
export class HelloService implements OnModuleInit {
  @Client(helloClientOptions) private readonly client: ClientGrpc;

  private service: IHelloService;

  onModuleInit() {
    this.service = this.client.getService<IHelloService>('HelloService');
  }

  sayHi(): Observable<any> {
    const metadata = new Metadata();
    metadata.add('Authorization', 'Bearer d1c0fc51-134f-4fc2-a0d3-063669f9aed2');
    return this.service.sayHi(null, metadata);
  }
}
