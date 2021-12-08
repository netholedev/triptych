import fetch, { RequestInit } from 'node-fetch';
import { ResponseWrapperDTO } from '../interfaces';

export abstract class BaseClient {
  constructor(private username: string, private password: string) {}

  protected baseUrl = 'https://services.expediapartnercentral.com';

  protected paginationValue(limit?: number) {
    if (limit) {
      return limit >= 1 && limit <= 200 ? limit : 1;
    }

    return 1;
  }

  protected async apiCall<T>(url: URL, init?: RequestInit): Promise<T> {
    let baseInit = {
      method: 'GET',
    };

    if (init) {
      baseInit = Object.assign(baseInit, init);
    }

    const response = await fetch(url.toString(), baseInit);
    const body = await response.json();
    return body;
  }
}
