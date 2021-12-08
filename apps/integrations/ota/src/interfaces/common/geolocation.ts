import { UNIT_OF_MEASURE } from '../codelist';

export interface Geolocation {
  latitude: string;
  longitude: string;
  altitude: string;
  altitudeUnitOfMeasure_Enum: UNIT_OF_MEASURE;
  mapURL: string;
  formatURL: string;
}
