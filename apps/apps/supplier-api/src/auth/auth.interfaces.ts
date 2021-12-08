import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";

export interface IProfileResponse {
  email: string;
  first_name: string;
  last_name: string;
}

export interface IRegisterRequest {
  fist_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
  refresh_token: string;
}

export interface IAuthService {
  register(data: IRegisterRequest, meta: Metadata): Observable<ITokenResponse>;
  login(data: ILoginRequest, meta: Metadata): Observable<ITokenResponse>;
  profile(data: null, meta: Metadata): Observable<IProfileResponse>;
}
