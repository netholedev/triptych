import {
  AgeCategories,
  CutOffDays,
  DistributionModels,
  PricingModels,
  RateAcquisitionTypes,
  Statuses,
} from '../enums';

export interface PropertyAddressDTO {
  city: string;
  countryCode: string;
  line1: string;
  line2: string;
  postalCode: string;
  state: string;
}

export interface CutOffDTO {
  day: string;
  time: CutOffDays;
}

export interface PropertyDTO {
  address: PropertyAddressDTO;
  allowedAgeCategories: AgeCategories[];
  baseAllocationEnabled: boolean;
  cancellationTime: string;
  currency: string;
  distributionModels: DistributionModels;
  name: string;
  partnerCode: string;
  pricingModels: PricingModels;
  rateAcquisitionType: RateAcquisitionTypes;
  ratePlanLinkageEnabled: boolean;
  reservationCutOff: CutOffDTO;
  resourceId: number;
  status: Statuses;
  taxInclusive: boolean;
  timezone: string;
}
