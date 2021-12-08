import { RATING_SYMBOL } from '../codelist';

export interface Rating {
  value: string;
  provider: string;
  description: string;
  ratingSymbol: RATING_SYMBOL;
  rating: string;
  date: string;
  officialAppointmentInd: boolean;
}
