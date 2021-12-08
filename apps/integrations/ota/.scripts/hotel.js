const fs = require('fs');

const hotelStr = fs.readFileSync('./.hotel/HotelDescriptiveContent.json', 'utf-8');

const hotel = JSON.parse(hotelStr);

const hotelKeys = [
  'objID',
  'language',
  'DescriptiveContentRef',
  'Identifier',
  'CurrencyCode',
  'DistanceUnitOfMeasure',
  'AreaUnitOfMeasure',
  'WeightUnitOfMeasure',
  'TimeZone',
  'DateTimeSpanWindows',
  'DestinationSystemCode',
  'WeatherInfo',
  'BasicPropertyInfo',
  'HotelPropertyInfo',
  'FacilityInfo',
  'HotelPolicies',
  'AreaInformation',
  'AffiliationInfo',
  'MultimediaCollection',
  'ContactInformation',
  'GDS_Information',
  'EffectivePeriod',
  'RoomBlockInformation',
  'EnvironmentalImpact',
];

console.log(Object.keys(hotel.HotelDescriptiveContentSummary));
