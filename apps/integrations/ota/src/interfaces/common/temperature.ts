import { TEMPERATURE_UNIT } from '../codelist';

export interface Temperature {
  averageHighTemp: number;
  averageLowTemp: number;
  temperatureUnit: TEMPERATURE_UNIT;
}
