import { UNIT_OF_MEASURE } from '../codelist';

export interface PositionWithMap {
  mapURL: string;
  latitude: string;
  longitude: string;
  altitude: string;
  altitudeUnitOfMeasure_Enum: UNIT_OF_MEASURE;
  formatURL: string;
}
