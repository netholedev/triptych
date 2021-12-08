import { UNIT_OF_MEASURE } from '../codelist';

export interface Distance {
  value: number;
  distanceMeasure: string;
  direction: string;
  distanceMax: number;
  unitOfMeasureCode: UNIT_OF_MEASURE;
}
