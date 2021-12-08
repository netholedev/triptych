import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";

export interface ISayHiResponse {
  msg: string;
}

export interface IHelloService {
  sayHi(data: null, meta: Metadata): Observable<ISayHiResponse>;
}

