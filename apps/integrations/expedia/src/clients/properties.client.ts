import { BaseClient } from './_base.client';
import { PropertyDTO, ResponseWrapperDTO } from '../interfaces';

interface PropertiesQuery {
  limit?: number;
  offset?: number;
}

export class Properties extends BaseClient {
  constructor(username: string, password: string) {
    super(username, password);
  }

  async properties(query?: PropertiesQuery) {
    const url = new URL('/products/properties', this.baseUrl);

    url.searchParams.append('status', 'all');

    if (query?.limit) {
      url.searchParams.append('limit', this.paginationValue(query?.limit).toString());
    }

    if (query?.offset) {
      url.searchParams.append('offset', query?.offset?.toString() || '0');
    }

    return this.apiCall<ResponseWrapperDTO<PropertyDTO[]>>(url);
  }

  async propertyById(propertyId: string) {
    const url = new URL(`/products/properties/${propertyId}`, this.baseUrl);
    return this.apiCall<PropertyDTO>(url);
  }
}
