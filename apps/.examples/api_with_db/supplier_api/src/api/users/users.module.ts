import { Module } from '@nestjs/common';

import { ArangoDBModule } from '../../storage';

import { UsersRepository } from './users.repository';

@Module({
  imports: [ArangoDBModule],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class UsersModule { }
