import { Observable } from 'rxjs';
import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

import { IAuthService, IProfileResponse, ITokenResponse } from './auth.interfaces';

@Injectable()
export class AuthService {
  private authClient: IAuthService;

  constructor(@Inject('AUTH_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.authClient = this.client.getService<IAuthService>('AuthService');
  }

  getProfile(): Observable<IProfileResponse> {
    const metadata = new Metadata();
    metadata.add('Authorization', 'Bearer d1c0fc51-134f-4fc2-a0d3-063669f9aed2');

    return this.authClient.profile(null, metadata);
  }

  register(data: any): Observable<ITokenResponse> {
    // const metadata = new Metadata();
    // metadata.add('Authorization', 'Bearer d1c0fc51-134f-4fc2-a0d3-063669f9aed2');

    return this.authClient.register({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    });
  }
}
