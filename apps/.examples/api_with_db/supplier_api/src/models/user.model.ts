import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Expose, Transform } from "class-transformer";
import { snakeCase } from "change-case";
import { IUser } from "../interfaces";
import { COMMON_ERRORS, USER_ERRORS } from "../errors";

export class User implements IUser {
  status: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class UserLoginDto {
  @IsEmail({}, { message: USER_ERRORS.EMAIL_INVALID })
  email: string;

  @IsString({ message: USER_ERRORS.PASSWORD_INVALID })
  password: string;
}

export class UserRegisterDto {
  @IsEmail({}, { message: USER_ERRORS.EMAIL_INVALID })
  email: string;

  @IsString({ message: USER_ERRORS.PASSWORD_TOO_WEAK })
  @MinLength(2, { message: COMMON_ERRORS.MUST_BE_LESS_THAN_X_CHARACTERS(2) })
  @MaxLength(20, { message: COMMON_ERRORS.MUST_BE_MORE_THAN_X_CHARACTERS(20) })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: USER_ERRORS.PASSWORD_TOO_WEAK })
  password: string;

  @IsString({ message: COMMON_ERRORS.MUST_BE_A_STRING })
  @MinLength(2, { message: COMMON_ERRORS.MUST_BE_LESS_THAN_X_CHARACTERS(2) })
  @MaxLength(20, { message: COMMON_ERRORS.MUST_BE_MORE_THAN_X_CHARACTERS(20) })
  @Expose({ name: "first_name" })
  firstName: string;

  @IsString({ message: COMMON_ERRORS.MUST_BE_A_STRING })
  @MinLength(2, {
    message: COMMON_ERRORS.MUST_BE_LESS_THAN_X_CHARACTERS(2)
  })
  @MaxLength(20, { message: COMMON_ERRORS.MUST_BE_MORE_THAN_X_CHARACTERS(20) })
  @Expose({ name: "last_name" })
  lastName: string;
}

export class TokenResponse {
  token: string;

  @Expose({ name: "refresh_token" })
  refreshToken: string;

  constructor(partial: TokenResponse) {
    Object.assign(this, partial);
  }
}