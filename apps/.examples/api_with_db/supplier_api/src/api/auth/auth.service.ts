import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { aql } from 'arangojs';
import { ArrayCursor } from 'arangojs/cursor';
import { v4 } from 'uuid';
import { compareSync, hashSync } from 'bcrypt';

import { IUser } from '../../interfaces';
import { TokenResponse, UserLoginDto, UserRegisterDto } from '../../models';
import { USER_ERRORS } from '../../errors';

import { UsersRepository } from '../users';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) { }

  a: number = 1

  private async findByEmail<T>(email: string): Promise<ArrayCursor<T>> {
    const filter = aql`
    FILTER user.email == ${email}
    FILTER user.status == true
    `;

    const query = aql`
      FOR user IN users
        ${filter}
        RETURN user
    `;

    return this.usersRepository.query(query);
  }

  private async generateTokens(key: string) {
    const query = {
      token: v4(),
      refreshToken: v4()
    }

    await this.usersRepository.update(key, { ...query, lastLogin: new Date() });

    return query;
  }

  async login(dto: UserLoginDto): Promise<TokenResponse> {
    try {
      const cursor = await this.findByEmail<IUser>(dto.email);
      const foundUsers = await cursor.all();

      if (foundUsers.length) {
        const user = foundUsers[0];

        const passwordsMatched = compareSync(dto.password, user.password);

        if (passwordsMatched) {
          const newTokens = await this.generateTokens(user._key);
          return new TokenResponse(newTokens);
        }

        throw USER_ERRORS.PASSWORD_INVALID
      }

      throw USER_ERRORS.USER_NOT_FOUND
    } catch (err) {
      // TODO: DANGEROUS!!!
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  async register(dto: UserRegisterDto): Promise<boolean> {
    try {
      dto.password = hashSync(dto.password, 12);

      await this.usersRepository.insert({ ...dto, status: false });

      return true;
    } catch (err) {
      if (err.isArangoError && err.errorNum === 1210) {
        /*
          code: 409,
          error: true,
          errorMessage: "unique constraint violated - in index unique-email of type persistent over 'email'; conflicting key: 3881",
          errorNum: 1210
        */
        throw new HttpException(USER_ERRORS.EMAIL_TAKEN, HttpStatus.BAD_REQUEST)
      }

      // TODO: DANGEROUS!!!
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }
}
