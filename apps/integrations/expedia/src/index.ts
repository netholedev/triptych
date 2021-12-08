import {
  Properties,
  RateVerificationThresholds,
  RatePlans,
  RoomTypes,
  RoomTypeAmenities,
} from './clients';

export default function Expedia(username: string, password: string) {
  return {
    properties: new Properties(username, password),
    rateVerificationThresholds: new RateVerificationThresholds(username, password),
    ratePlans: new RatePlans(username, password),
    roomTypes: new RoomTypes(username, password),
    roomTypeAmenities: new RoomTypeAmenities(username, password),
  };
}
