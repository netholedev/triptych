import { Observable } from 'rxjs';
import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

import { IHelloService, ISayHiResponse } from './hello.interfaces';

@Injectable()
export class HelloService {
  private helloClient: IHelloService;

  constructor(@Inject('HELLO_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.helloClient = this.client.getService<IHelloService>('HelloService');
  }


  getHello(): Observable<ISayHiResponse> {
    const metadata = new Metadata();
    metadata.add('Authorization', 'Bearer d1c0fc51-134f-4fc2-a0d3-063669f9aed2');

    return this.helloClient.sayHi(null, metadata);
  }
}
