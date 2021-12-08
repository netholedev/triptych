import { TIME_UNIT } from '../codelist';

export interface RateRange {
  minRate: number;
  maxRate: number;
  fixedRate: number;
  rateTimeUnit: TIME_UNIT;
  currencyCode: string;
}
