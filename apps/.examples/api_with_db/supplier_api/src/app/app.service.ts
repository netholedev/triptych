import { Injectable } from '@nestjs/common';

import { HelloService } from '../services';

@Injectable()
export class AppService {
  constructor(private readonly helloService: HelloService) { }

  getHello(): string {
    console.log(this.helloService.sayHi())
    return 'Hello World!';
  }
}
