import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../auth';
import { HelloService } from '../hello';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService, 
    private readonly helloService: HelloService
  ) {}

  @Get()
  getHello() {
    return this.helloService.getHello();
  }

  @Get("profile")
  getProfile() {
    return this.authService.getProfile();
  }
}
