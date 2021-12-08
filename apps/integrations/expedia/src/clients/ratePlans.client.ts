import { BaseClient } from './_base.client';
import { RatePlanDTO, ResponseWrapperDTO } from '../interfaces';

export class RatePlans extends BaseClient {
  constructor(username: string, password: string) {
    super(username, password);
  }

  async ratePlans(propertyId: string, roomTypeId: string) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RatePlanDTO[]>>(url);
  }

  async ratePlanById(propertyId: string, roomTypeId: string, ratePlanId: string) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans/${ratePlanId}`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RatePlanDTO>>(url);
  }

  async deleteRatePlanById(propertyId: string, roomTypeId: string, ratePlanId: string) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans/${ratePlanId}`,
      this.baseUrl,
    );
    return this.apiCall<never>(url, { method: 'DELETE' });
  }

  async createRatePlanById(propertyId: string, roomTypeId: string, body: RatePlanDTO) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans`,
      this.baseUrl,
    );
    return this.apiCall<never>(url, { method: 'POST', body: JSON.stringify(body) });
  }

  async updateRatePlanById(
    propertyId: string,
    roomTypeId: string,
    ratePlanId: string,
    body: RatePlanDTO,
  ) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans/${ratePlanId}`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RatePlanDTO>>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async patchRatePlanById(
    propertyId: string,
    roomTypeId: string,
    ratePlanId: string,
    body: string,
  ) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/ratePlans/${ratePlanId}`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RatePlanDTO>>(url, { method: 'PATCH', body });
  }
}
