import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() data: any) {
    console.log(data)
    return this.authService.register(data);
  }
}
