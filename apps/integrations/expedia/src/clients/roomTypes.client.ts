import { ResponseWrapperDTO, RoomTypeDTO } from '../interfaces';
import { BaseClient } from './_base.client';

export class RoomTypes extends BaseClient {
  constructor(username: string, password: string) {
    super(username, password);
  }

  async roomTypes(propertyId: string) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes`, this.baseUrl);
    return this.apiCall<ResponseWrapperDTO<RoomTypeDTO[]>>(url);
  }

  async roomTypeById(propertyId: string, roomTypeId: string) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes/${roomTypeId}`, this.baseUrl);
    return this.apiCall<ResponseWrapperDTO<RoomTypeDTO>>(url);
  }

  async createRoomType(propertyId: string, body: RoomTypeDTO) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes`, this.baseUrl);
    return this.apiCall<ResponseWrapperDTO<RoomTypeDTO>>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async updateRoomTypeById(propertyId: string, roomTypeId: string, body: RoomTypeDTO) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes/${roomTypeId}`, this.baseUrl);
    return this.apiCall<ResponseWrapperDTO<RoomTypeDTO>>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async patchRatePlanById(propertyId: string, roomTypeId: string, body: RoomTypeDTO) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes/${roomTypeId}`, this.baseUrl);
    return this.apiCall<ResponseWrapperDTO<RoomTypeDTO>>(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
}
