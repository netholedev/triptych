import { RoomTypeAmenityDTO, ResponseWrapperDTO } from '../interfaces';
import { BaseClient } from './_base.client';

export class RoomTypeAmenities extends BaseClient {
  constructor(username: string, password: string) {
    super(username, password);
  }

  async roomTypeAmenities(propertyId: string, roomTypeId: string) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/amenities`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RoomTypeAmenityDTO[]>>(url);
  }

  async updateroomTypeAmenities(
    propertyId: string,
    roomTypeId: string,
    body: RoomTypeAmenityDTO[],
  ) {
    const url = new URL(`/products/properties/${propertyId}/roomTypes/${roomTypeId}`, this.baseUrl);
    return this.apiCall<RoomTypeAmenityDTO[]>(url, { method: 'PUT', body: JSON.stringify(body) });
  }
}
