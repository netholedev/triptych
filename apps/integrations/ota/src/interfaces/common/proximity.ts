import { UNIT_OF_MEASURE } from '../codelist';
import { INDEX_POINT_CODE } from './index-point-code';

export interface Proximity {
  value: string;
  postalCode: string;
  cityName: string;
  stateProv: string;
  countryCode: string;
  resortName: string;
  refPointType: INDEX_POINT_CODE;
  name: string;
  distance: number;
  distanceMeasure: string;
  direction: string;
  distanceMax: number;
  unitOfMeasureCode: UNIT_OF_MEASURE;
}
