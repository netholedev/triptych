import {
  AgeCategories,
  BedSizes,
  BedTypes,
  ExtraBedTypes,
  registrationNumberTypes,
  RegulatoryRecordCategories,
  SmokingReferences,
  Statuses,
  SurchargeTypes,
  Views,
} from '../enums';
import { LinkDTO } from './ratePlans.interfaces';

export interface RoomTypeNameAttributes {
  accessibility?: boolean;
  area?: string;
  bedroomDetails?: string;
  customLabel?: string;
  featuredAmenity?: string;
  includedBedType?: boolean;
  includeSmokingPref?: boolean;
  roomClass?: string;
  typeOfRoom: string;
  view?: string;
}

export interface RoomTypeName {
  attributes: RoomTypeNameAttributes;
  value: string;
}

export interface AgeCategory {
  category: AgeCategories;
  minAge: number;
}

export interface BedOption {
  quantity: number;
  size: BedSizes;
  type: BedTypes;
}

export interface BedGroup {
  option: BedOption[];
}

export interface BedRoom {
  bedding: BedGroup[];
  count: number;
}

export interface Surcharge {
  type: SurchargeTypes;
  amount: number;
}

export interface ExtraBed {
  quantity: number;
  size: BedSizes;
  surcharge: Surcharge;
  type: ExtraBedTypes;
}

export interface Size {
  squareFeet: number;
  squareMeters: number;
}

export interface LivingRoom {
  bedding: BedGroup[];
  count: number;
}

export interface Occupancy {
  adults: number;
  children: number;
  total: number;
}

export interface RegistrationRecord {
  expiry: string; // Date
  registrationNumber: string;
  registrationNumberType: registrationNumberTypes;
}

export interface RegulatoryRecords {
  category: RegulatoryRecordCategories;
  records: RegistrationRecord[];
}

export interface RoomTypeDTO {
  _links: { self: LinkDTO };
  resourceId: number;
  partnerCode: string;
  status: Statuses.Active | Statuses.Inactive;
  name: RoomTypeName;
  ageCategories: AgeCategory[];
  bedrooms: BedRoom[];
  extraBedding: ExtraBed[];
  floorSize: Size;
  livingRooms: LivingRoom[];
  maxOccupancy: Occupancy;
  regulatoryRecords: RegulatoryRecords;
  smokingPreferences: SmokingReferences[];
  views: Views;
  wheelchairAccessibility: boolean;
}
