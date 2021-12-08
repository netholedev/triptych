import { RATE_PERIOD } from '../codelist';

export interface RateQualifier {
  value: string;
  code: string;
  rateAuthorizationCode: string;
  rateID: string;
  ratePeriod: RATE_PERIOD;
  description: string;
}
