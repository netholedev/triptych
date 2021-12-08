import { RateAcquisitionTypes, RateThresholdsSources } from '../enums';
import { LinkDTO } from './ratePlans.interfaces';

export interface RateVerificationThresholdsDTOLinks {
  self: LinkDTO;
}

export interface RateVerificationThresholdsDTO {
  _links: RateVerificationThresholdsDTOLinks;
  maxAmount: number;
  minAmount: number;
  source: RateThresholdsSources;
  type: RateAcquisitionTypes;
}
