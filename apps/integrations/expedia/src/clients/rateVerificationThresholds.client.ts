import { BaseClient } from './_base.client';
import { RateVerificationThresholdsDTO, ResponseWrapperDTO } from '../interfaces';

export class RateVerificationThresholds extends BaseClient {
  constructor(username: string, password: string) {
    super(username, password);
  }

  async rateVerificationThresholds(propertyId: string, roomTypeId: string) {
    const url = new URL(
      `/products/properties/${propertyId}/roomTypes/${roomTypeId}/rateThresholds`,
      this.baseUrl,
    );
    return this.apiCall<ResponseWrapperDTO<RateVerificationThresholdsDTO>>(url);
  }
}
