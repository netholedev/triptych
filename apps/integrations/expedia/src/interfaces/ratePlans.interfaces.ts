import {
  AdjustmentTypes,
  AgeCategories,
  DistributionModels,
  PerStayFees,
  PricingModels,
  RateAcquisitionTypes,
  RatePlanTypes,
  Statuses,
} from '../enums';

export interface LinkDTO {
  href: string;
}

export interface RatePlanDTOLinks {
  depositPolicy: LinkDTO;
  derivedRatePlans: LinkDTO[];
  parentRatePlan: LinkDTO;
  self: LinkDTO;
}

export interface PeriodDTO {
  dateEnd: string; // Date
  dateStart: string; // Date
}

export interface RateDerivationRuleDTO {
  adjustmentType: AdjustmentTypes;
  adjustmentValue: number;
  dateEnd: string; // Date
  dateStart: string; // Date
  exclusionDates: PeriodDTO[];
}

export interface RatePlanLinkageDTO {
  deriveAvailabilityStatus: boolean;
  deriveClosedToArrival: boolean;
  deriveClosedToDeparture: boolean;
  deriveLengthOfStayRestriction: boolean;
  rateDerivationRules: RateDerivationRuleDTO[];
}

export interface ServiceFeesPerPersonDTO {
  ageCategory: AgeCategories;
  amountPerNight: number;
  amountPerStay: number;
  dateEnd: string; // Date
  dateStart: string; // Date
  isTaxable: boolean;
}

export interface ServiceFeesPerStayDTO {
  amountPerNight: number;
  amountPerStay: number;
  isTaxable: boolean;
  percent: number;
}

export interface CompensationRuleDTO {
  exceptions: CompensationExceptionRuleDTO[];
  minAmount: number;
  percent: number;
}

export interface CompensationExceptionRuleDTO {
  dateEnd: string; // Date
  dateStart: string; // Date
  fri: boolean;
  mon: boolean;
  sat: boolean;
  sun: boolean;
  thu: boolean;
  tue: boolean;
  wed: boolean;
  minAmount: number;
  percent: number;
}

export interface DistributionRuleDTO {
  compensation: CompensationRuleDTO;
  distributionModel: DistributionModels;
  expediaId: string;
  partnerCode: string;
}

export interface CancelPolicyExceptionDTO {
  startDate: string; // Date
  endDate: string; // Date
  penalties: PenaltyDTO[];
}

export interface PenaltyDTO {
  amount: number;
  deadline: number;
  perStayFee: PerStayFees;
}

export interface CancelPolicyDTO {
  defaultPenalties: PenaltyDTO[];
  exceptions: CancelPolicyExceptionDTO[];
}

export interface AdditionalGuestAmountDTO {
  ageCategory: AgeCategories;
  amount: number;
  dateStart: string; // Date
  dateEnd: string; // Date
  percent: number;
}

export interface RatePlanDTO {
  _links: RatePlanDTOLinks;
  additionalGuestAmounts: AdditionalGuestAmountDTO[];
  bookDateEnd: string; // Date
  bookDateStart: string; // Date
  cancelPolicy: CancelPolicyDTO;
  readonly creationDateTime: string; // Date
  readonly lastUpdateDateTime: string; // Date
  depositRequired: boolean;
  maxAdvBookDays: number;
  minAdvBookDays: number;

  maxLOSDefault: number;
  minLOSDefault: number;

  mobileOnly: boolean;

  occupantsForBaseRate: number;
  pricingModel: PricingModels;

  readonly rateAcquisitionType: RateAcquisitionTypes;

  status: Statuses.Active | Statuses.Inactive;

  resourceId: number;

  distributionRules: DistributionRuleDTO[];

  ratePlanLinkage: RatePlanLinkageDTO;
  serviceFeesPerPerson: ServiceFeesPerPersonDTO[];
  serviceFeesPerStay: ServiceFeesPerStayDTO[];

  taxInclusive: boolean;
  travelDateEnd: string; // Date
  travelDateStart: string; // Date

  type: RatePlanTypes;

  valueAddInclusions: string[]; // TODO ???
}
