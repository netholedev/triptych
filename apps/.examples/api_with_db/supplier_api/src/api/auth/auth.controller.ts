import { Body, ClassSerializerInterceptor, Controller, Get, HttpStatus, Post, Res, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';

import { UserLoginDto, UserRegisterDto } from '../../models';

import { AuthService } from './auth.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() dto: UserRegisterDto, @Res() res: Response): Promise<void> {
    await this.authService.register(dto);
    res.status(HttpStatus.CREATED);
    res.end();
  }

  @Post('login')
  async find(@Body() dto: UserLoginDto): Promise<any> {
    return this.authService.login(dto);
  }
}
