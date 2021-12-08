export interface HospitalityDescriptiveContentNotifRQ {
  HospitalityDescriptiveContentNotifRQ: {
    '@name': string;
    version: number;
    timeStamp: Date;
    PayloadStdAttributes: PayloadStdAttributes;
    POS: POS;
    HotelDescriptiveContent: HotelDescriptiveContent[];
  };
}

declare module namespace {
  export interface PayloadStdAttributes {
    value?: any;
    echoToken: string;
    timeStamp: Date;
    target: string;
    targetName: string;
    version: number;
    transactionIdentifier: string;
    sequenceNmbr: string;
    transactionStatusCode: string;
    correlationID: string;
    primaryLangID: string;
    altLangID: string;
    retransmissionIndicatorInd: boolean;
  }

  export interface Identifier {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface RequestorID {
    '@type': string;
    Identifier: Identifier;
  }

  export interface Position {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface CompanyName {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface Type {
    value: string;
  }

  export interface BookingChannel {
    '@type': string;
    primaryInd: boolean;
    CompanyName: CompanyName;
    Type: Type;
  }

  export interface Source {
    '@type': string;
    agentSine: string;
    pseudoCityCode: string;
    iSOCountry: string;
    iSOCurrency: string;
    agentDutyCode: string;
    airlineVendorID: string;
    airportCode: string;
    firstDepartPoint: string;
    eRSP_UserID: string;
    terminalID: string;
    RequestorID: RequestorID;
    Position: Position;
    BookingChannel: BookingChannel;
  }

  export interface POS {
    '@type': string;
    Source: Source[];
  }

  export interface Identifier2 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface CurrencyCode {
    value: string;
    decimalPlaces: string;
  }

  export interface TimeSpan {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows {
    '@type': string;
    TimeSpan: TimeSpan;
  }

  export interface Precipitation {
    value?: any;
    averagePrecipitation: number;
    unitOfMeasure: string;
  }

  export interface Temperature {
    value?: any;
    averageHighTemp: number;
    averageLowTemp: number;
    temperatureUnit: string;
  }

  export interface WeatherInfo {
    '@type': string;
    period: string;
    Precipitation: Precipitation[];
    Temperature: Temperature[];
  }

  export interface BasicPropertyInfo {
    '@type': string;
    code: string;
    name: string;
    chainCode: string;
    brandCode: string;
    cityCode: string;
  }

  export interface LocationCategory {
    value: string;
  }

  export interface SegmentCategory {
    value: string;
  }

  export interface HotelCategory {
    value: string;
  }

  export interface ArchitecturalStyle {
    value: string;
  }

  export interface GuestRoomInfoEnum {
    value: string;
  }

  export interface RateRange {
    value?: any;
    minRate: number;
    maxRate: number;
    fixedRate: number;
    rateTimeUnit: string;
    currencyCode: string;
  }

  export interface TimeSpan2 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows2 {
    '@type': string;
    TimeSpan: TimeSpan2;
  }

  export interface RateRangeInfo {
    '@type': string;
    RateRange: RateRange;
    DateTimeSpanWindows: DateTimeSpanWindows2;
  }

  export interface Category {
    value: string;
  }

  export interface AdditionalDetailType {
    value: string;
  }

  export interface InfoType {
    value: string;
  }

  export interface Multimedia {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category;
    AdditionalDetailType: AdditionalDetailType;
    InfoType: InfoType;
  }

  export interface MultimediaCollection {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia[];
  }

  export interface Text {
    value: string;
    language: string;
    textFormat: string;
  }

  export interface Identifier3 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection[];
  }

  export interface DateTimeStamp {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type2 {
    value: string;
  }

  export interface Privacy {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type2;
    Privacy: Privacy;
  }

  export interface Dimensions {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier3;
    ImageRef: string;
    URL: string;
    Details: Details;
    MultimediaDescription: MultimediaDescription[];
    DateTimeStamp: DateTimeStamp;
    Email: Email;
    Dimensions: Dimensions;
    File: File;
    Geolocation: Geolocation;
  }

  export interface ParagraphListItem {
    value?: any;
    listItem: number;
    text2: string;
    language: string;
    textFormat: string;
  }

  export interface DateTimeStamp2 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface TextParagraph {
    '@type': string;
    name: string;
    number: number;
    Text: Text[];
    Image: Image[];
    URL: string[];
    ParagraphListItem: ParagraphListItem[];
    DateTimeStamp: DateTimeStamp2;
  }

  export interface GuestRoomInfo {
    '@type': string;
    GuestRoomInfo_Enum: GuestRoomInfoEnum;
    Quantity: number;
    RateRangeInfo: RateRangeInfo;
    MultimediaCollection: MultimediaCollection;
    TextParagraph: TextParagraph;
  }

  export interface CategoryCodes {
    '@type': string;
    LocationCategory: LocationCategory;
    SegmentCategory: SegmentCategory;
    HotelCategory: HotelCategory[];
    ArchitecturalStyle: ArchitecturalStyle[];
    GuestRoomInfo: GuestRoomInfo[];
  }

  export interface Proximity {
    value: string;
  }

  export interface PersonName {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation {
    value: string;
  }

  export interface BldgRoom {
    value: string;
    buldingInd: boolean;
  }

  export interface Number {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv {
    value: string;
    name: string;
  }

  export interface Country {
    value: string;
    name: string;
  }

  export interface Address {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom[];
    Number: Number;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv;
    Country: Country;
    PostalCode: string;
  }

  export interface Telephone {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type3 {
    value: string;
  }

  export interface Privacy2 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email2 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type3;
    Privacy: Privacy2;
  }

  export interface URL {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName2 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation {
    '@type': string;
    PersonName: PersonName[];
    ContactLocation: ContactLocation;
    Address: Address[];
    Telephone: Telephone[];
    Email: Email2;
    URL: URL;
    CompanyName: CompanyName2;
  }

  export interface Identifier4 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Type4 {
    value: string;
  }

  export interface Category2 {
    value: string;
  }

  export interface AdditionalDetailType2 {
    value: string;
  }

  export interface InfoType2 {
    value: string;
  }

  export interface Multimedia2 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category2;
    AdditionalDetailType: AdditionalDetailType2;
    InfoType: InfoType2;
  }

  export interface MultimediaCollection2 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia2[];
  }

  export interface TimeSpan3 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows3 {
    '@type': string;
    TimeSpan: TimeSpan3;
  }

  export interface OperationSchedule {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows3;
  }

  export interface Identifier5 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details2 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection2 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription2 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection2[];
  }

  export interface DateTimeStamp3 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type5 {
    value: string;
  }

  export interface Privacy3 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email3 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type5;
    Privacy: Privacy3;
  }

  export interface Dimensions2 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File2 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation2 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image2 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier5;
    ImageRef: string;
    URL: string;
    Details: Details2;
    MultimediaDescription: MultimediaDescription2[];
    DateTimeStamp: DateTimeStamp3;
    Email: Email3;
    Dimensions: Dimensions2;
    File: File2;
    Geolocation: Geolocation2;
  }

  export interface DateTimeStamp4 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image2[];
    DateTimeStamp: DateTimeStamp4;
  }

  export interface ChargeUnit {
    value: string;
  }

  export interface CurrencyAmount {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface BldgRoom2 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number2 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv2 {
    value: string;
    name: string;
  }

  export interface Country2 {
    value: string;
    name: string;
  }

  export interface Address2 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom2[];
    Number: Number2;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv2;
    Country: Country2;
    PostalCode: string;
  }

  export interface LocationCode {
    value: string;
    city: string;
    stateProvince: string;
    country: string;
    codeContext: string;
  }

  export interface Transportation {
    '@type': string;
    objID: string;
    notificationRequired: string;
    typicalTravelTime: string;
    includedInd: boolean;
    Identifier: Identifier4;
    TransportationRef: string;
    Type: Type4;
    MultimediaCollection: MultimediaCollection2;
    OperationSchedule: OperationSchedule[];
    Description: Description;
    ChargeUnit: ChargeUnit;
    CurrencyAmount: CurrencyAmount;
    Address: Address2;
    LocationCode: LocationCode;
  }

  export interface Transportations {
    '@type': string;
    Transportation: Transportation[];
  }

  export interface Identifier6 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details3 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection3 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription3 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection3[];
  }

  export interface DateTimeStamp5 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type6 {
    value: string;
  }

  export interface Privacy4 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email4 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type6;
    Privacy: Privacy4;
  }

  export interface Dimensions3 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File3 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation3 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image3 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier6;
    ImageRef: string;
    URL: string;
    Details: Details3;
    MultimediaDescription: MultimediaDescription3[];
    DateTimeStamp: DateTimeStamp5;
    Email: Email4;
    Dimensions: Dimensions3;
    File: File3;
    Geolocation: Geolocation3;
  }

  export interface DateTimeStamp6 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description2 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image3[];
    DateTimeStamp: DateTimeStamp6;
  }

  export interface RelativePosition {
    '@type': string;
    direction: string;
    distance: string;
    unitOfMeasureCode: string;
    indexPointCode: string;
    name: string;
    toFrom: string;
    positionAccuracy: string;
    nearestInd: boolean;
    primaryInd: boolean;
    approximateDistanceInd: boolean;
    Transportations: Transportations;
    Description: Description2;
  }

  export interface Category3 {
    value: string;
  }

  export interface AdditionalDetailType3 {
    value: string;
  }

  export interface InfoType3 {
    value: string;
  }

  export interface Multimedia3 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category3;
    AdditionalDetailType: AdditionalDetailType3;
    InfoType: InfoType3;
  }

  export interface MultimediaCollection3 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia3[];
  }

  export interface Identifier7 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details4 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection4 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription4 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection4[];
  }

  export interface DateTimeStamp7 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type7 {
    value: string;
  }

  export interface Privacy5 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email5 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type7;
    Privacy: Privacy5;
  }

  export interface Dimensions4 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File4 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation4 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image4 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier7;
    ImageRef: string;
    URL: string;
    Details: Details4;
    MultimediaDescription: MultimediaDescription4[];
    DateTimeStamp: DateTimeStamp7;
    Email: Email5;
    Dimensions: Dimensions4;
    File: File4;
    Geolocation: Geolocation4;
  }

  export interface DateTimeStamp8 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description3 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image4[];
    DateTimeStamp: DateTimeStamp8;
  }

  export interface BusinessService {
    value: string;
  }

  export interface ServiceBusiness {
    inventoryCode: string;
    quantity: number;
    sort: number;
    codeDetail: string;
    includedInd: boolean;
    availableToAnyGuestInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity;
    ContactInformation: ContactInformation;
    RelativePosition: RelativePosition;
    MultimediaCollection: MultimediaCollection3;
    Description: Description3;
    BusinessService: BusinessService[];
  }

  export interface Proximity2 {
    value: string;
  }

  export interface PersonName2 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation2 {
    value: string;
  }

  export interface BldgRoom3 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number3 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv3 {
    value: string;
    name: string;
  }

  export interface Country3 {
    value: string;
    name: string;
  }

  export interface Address3 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom3[];
    Number: Number3;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv3;
    Country: Country3;
    PostalCode: string;
  }

  export interface Telephone2 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type8 {
    value: string;
  }

  export interface Privacy6 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email6 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type8;
    Privacy: Privacy6;
  }

  export interface URL2 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName3 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation2 {
    '@type': string;
    PersonName: PersonName2[];
    ContactLocation: ContactLocation2;
    Address: Address3[];
    Telephone: Telephone2[];
    Email: Email6;
    URL: URL2;
    CompanyName: CompanyName3;
  }

  export interface Identifier8 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Type9 {
    value: string;
  }

  export interface Category4 {
    value: string;
  }

  export interface AdditionalDetailType4 {
    value: string;
  }

  export interface InfoType4 {
    value: string;
  }

  export interface Multimedia4 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category4;
    AdditionalDetailType: AdditionalDetailType4;
    InfoType: InfoType4;
  }

  export interface MultimediaCollection4 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia4[];
  }

  export interface TimeSpan4 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows4 {
    '@type': string;
    TimeSpan: TimeSpan4;
  }

  export interface OperationSchedule2 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows4;
  }

  export interface Identifier9 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details5 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection5 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription5 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection5[];
  }

  export interface DateTimeStamp9 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type10 {
    value: string;
  }

  export interface Privacy7 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email7 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type10;
    Privacy: Privacy7;
  }

  export interface Dimensions5 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File5 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation5 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image5 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier9;
    ImageRef: string;
    URL: string;
    Details: Details5;
    MultimediaDescription: MultimediaDescription5[];
    DateTimeStamp: DateTimeStamp9;
    Email: Email7;
    Dimensions: Dimensions5;
    File: File5;
    Geolocation: Geolocation5;
  }

  export interface DateTimeStamp10 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description4 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image5[];
    DateTimeStamp: DateTimeStamp10;
  }

  export interface ChargeUnit2 {
    value: string;
  }

  export interface CurrencyAmount2 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface BldgRoom4 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number4 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv4 {
    value: string;
    name: string;
  }

  export interface Country4 {
    value: string;
    name: string;
  }

  export interface Address4 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom4[];
    Number: Number4;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv4;
    Country: Country4;
    PostalCode: string;
  }

  export interface LocationCode2 {
    value: string;
    city: string;
    stateProvince: string;
    country: string;
    codeContext: string;
  }

  export interface Transportation2 {
    '@type': string;
    objID: string;
    notificationRequired: string;
    typicalTravelTime: string;
    includedInd: boolean;
    Identifier: Identifier8;
    TransportationRef: string;
    Type: Type9;
    MultimediaCollection: MultimediaCollection4;
    OperationSchedule: OperationSchedule2[];
    Description: Description4;
    ChargeUnit: ChargeUnit2;
    CurrencyAmount: CurrencyAmount2;
    Address: Address4;
    LocationCode: LocationCode2;
  }

  export interface Transportations2 {
    '@type': string;
    Transportation: Transportation2[];
  }

  export interface Identifier10 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details6 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection6 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription6 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection6[];
  }

  export interface DateTimeStamp11 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type11 {
    value: string;
  }

  export interface Privacy8 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email8 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type11;
    Privacy: Privacy8;
  }

  export interface Dimensions6 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File6 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation6 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image6 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier10;
    ImageRef: string;
    URL: string;
    Details: Details6;
    MultimediaDescription: MultimediaDescription6[];
    DateTimeStamp: DateTimeStamp11;
    Email: Email8;
    Dimensions: Dimensions6;
    File: File6;
    Geolocation: Geolocation6;
  }

  export interface DateTimeStamp12 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description5 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image6[];
    DateTimeStamp: DateTimeStamp12;
  }

  export interface RelativePosition2 {
    '@type': string;
    direction: string;
    distance: string;
    unitOfMeasureCode: string;
    indexPointCode: string;
    name: string;
    toFrom: string;
    positionAccuracy: string;
    nearestInd: boolean;
    primaryInd: boolean;
    approximateDistanceInd: boolean;
    Transportations: Transportations2;
    Description: Description5;
  }

  export interface Category5 {
    value: string;
  }

  export interface AdditionalDetailType5 {
    value: string;
  }

  export interface InfoType5 {
    value: string;
  }

  export interface Multimedia5 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category5;
    AdditionalDetailType: AdditionalDetailType5;
    InfoType: InfoType5;
  }

  export interface MultimediaCollection5 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia5[];
  }

  export interface Identifier11 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details7 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection7 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription7 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection7[];
  }

  export interface DateTimeStamp13 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type12 {
    value: string;
  }

  export interface Privacy9 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email9 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type12;
    Privacy: Privacy9;
  }

  export interface Dimensions7 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File7 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation7 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image7 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier11;
    ImageRef: string;
    URL: string;
    Details: Details7;
    MultimediaDescription: MultimediaDescription7[];
    DateTimeStamp: DateTimeStamp13;
    Email: Email9;
    Dimensions: Dimensions7;
    File: File7;
    Geolocation: Geolocation7;
  }

  export interface DateTimeStamp14 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description6 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image7[];
    DateTimeStamp: DateTimeStamp14;
  }

  export interface HotelAmenity {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ServiceHotelAmenity {
    inventoryCode: string;
    quantity: number;
    sort: number;
    codeDetail: string;
    includedInd: boolean;
    availableToAnyGuestInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity2;
    ContactInformation: ContactInformation2;
    RelativePosition: RelativePosition2;
    MultimediaCollection: MultimediaCollection5;
    Description: Description6;
    HotelAmenity: HotelAmenity[];
  }

  export interface Proximity3 {
    value: string;
  }

  export interface PersonName3 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation3 {
    value: string;
  }

  export interface BldgRoom5 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number5 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv5 {
    value: string;
    name: string;
  }

  export interface Country5 {
    value: string;
    name: string;
  }

  export interface Address5 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom5[];
    Number: Number5;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv5;
    Country: Country5;
    PostalCode: string;
  }

  export interface Telephone3 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type13 {
    value: string;
  }

  export interface Privacy10 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email10 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type13;
    Privacy: Privacy10;
  }

  export interface URL3 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName4 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation3 {
    '@type': string;
    PersonName: PersonName3[];
    ContactLocation: ContactLocation3;
    Address: Address5[];
    Telephone: Telephone3[];
    Email: Email10;
    URL: URL3;
    CompanyName: CompanyName4;
  }

  export interface Identifier12 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Type14 {
    value: string;
  }

  export interface Category6 {
    value: string;
  }

  export interface AdditionalDetailType6 {
    value: string;
  }

  export interface InfoType6 {
    value: string;
  }

  export interface Multimedia6 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category6;
    AdditionalDetailType: AdditionalDetailType6;
    InfoType: InfoType6;
  }

  export interface MultimediaCollection6 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia6[];
  }

  export interface TimeSpan5 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows5 {
    '@type': string;
    TimeSpan: TimeSpan5;
  }

  export interface OperationSchedule3 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows5;
  }

  export interface Identifier13 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details8 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection8 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription8 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection8[];
  }

  export interface DateTimeStamp15 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type15 {
    value: string;
  }

  export interface Privacy11 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email11 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type15;
    Privacy: Privacy11;
  }

  export interface Dimensions8 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File8 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation8 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image8 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier13;
    ImageRef: string;
    URL: string;
    Details: Details8;
    MultimediaDescription: MultimediaDescription8[];
    DateTimeStamp: DateTimeStamp15;
    Email: Email11;
    Dimensions: Dimensions8;
    File: File8;
    Geolocation: Geolocation8;
  }

  export interface DateTimeStamp16 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description7 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image8[];
    DateTimeStamp: DateTimeStamp16;
  }

  export interface ChargeUnit3 {
    value: string;
  }

  export interface CurrencyAmount3 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface BldgRoom6 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number6 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv6 {
    value: string;
    name: string;
  }

  export interface Country6 {
    value: string;
    name: string;
  }

  export interface Address6 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom6[];
    Number: Number6;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv6;
    Country: Country6;
    PostalCode: string;
  }

  export interface LocationCode3 {
    value: string;
    city: string;
    stateProvince: string;
    country: string;
    codeContext: string;
  }

  export interface Transportation3 {
    '@type': string;
    objID: string;
    notificationRequired: string;
    typicalTravelTime: string;
    includedInd: boolean;
    Identifier: Identifier12;
    TransportationRef: string;
    Type: Type14;
    MultimediaCollection: MultimediaCollection6;
    OperationSchedule: OperationSchedule3[];
    Description: Description7;
    ChargeUnit: ChargeUnit3;
    CurrencyAmount: CurrencyAmount3;
    Address: Address6;
    LocationCode: LocationCode3;
  }

  export interface Transportations3 {
    '@type': string;
    Transportation: Transportation3[];
  }

  export interface Identifier14 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details9 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection9 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription9 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection9[];
  }

  export interface DateTimeStamp17 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type16 {
    value: string;
  }

  export interface Privacy12 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email12 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type16;
    Privacy: Privacy12;
  }

  export interface Dimensions9 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File9 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation9 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image9 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier14;
    ImageRef: string;
    URL: string;
    Details: Details9;
    MultimediaDescription: MultimediaDescription9[];
    DateTimeStamp: DateTimeStamp17;
    Email: Email12;
    Dimensions: Dimensions9;
    File: File9;
    Geolocation: Geolocation9;
  }

  export interface DateTimeStamp18 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description8 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image9[];
    DateTimeStamp: DateTimeStamp18;
  }

  export interface RelativePosition3 {
    '@type': string;
    direction: string;
    distance: string;
    unitOfMeasureCode: string;
    indexPointCode: string;
    name: string;
    toFrom: string;
    positionAccuracy: string;
    nearestInd: boolean;
    primaryInd: boolean;
    approximateDistanceInd: boolean;
    Transportations: Transportations3;
    Description: Description8;
  }

  export interface Category7 {
    value: string;
  }

  export interface AdditionalDetailType7 {
    value: string;
  }

  export interface InfoType7 {
    value: string;
  }

  export interface Multimedia7 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category7;
    AdditionalDetailType: AdditionalDetailType7;
    InfoType: InfoType7;
  }

  export interface MultimediaCollection7 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia7[];
  }

  export interface Identifier15 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details10 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection10 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription10 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection10[];
  }

  export interface DateTimeStamp19 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type17 {
    value: string;
  }

  export interface Privacy13 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email13 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type17;
    Privacy: Privacy13;
  }

  export interface Dimensions10 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File10 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation10 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image10 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier15;
    ImageRef: string;
    URL: string;
    Details: Details10;
    MultimediaDescription: MultimediaDescription10[];
    DateTimeStamp: DateTimeStamp19;
    Email: Email13;
    Dimensions: Dimensions10;
    File: File10;
    Geolocation: Geolocation10;
  }

  export interface DateTimeStamp20 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description9 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image10[];
    DateTimeStamp: DateTimeStamp20;
  }

  export interface MealPlan {
    value: string;
  }

  export interface ServiceMealPlan {
    inventoryCode: string;
    quantity: number;
    sort: number;
    codeDetail: string;
    includedInd: boolean;
    availableToAnyGuestInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity3;
    ContactInformation: ContactInformation3;
    RelativePosition: RelativePosition3;
    MultimediaCollection: MultimediaCollection7;
    Description: Description9;
    MealPlan: MealPlan[];
  }

  export interface Proximity4 {
    value: string;
  }

  export interface PersonName4 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation4 {
    value: string;
  }

  export interface BldgRoom7 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number7 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv7 {
    value: string;
    name: string;
  }

  export interface Country7 {
    value: string;
    name: string;
  }

  export interface Address7 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom7[];
    Number: Number7;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv7;
    Country: Country7;
    PostalCode: string;
  }

  export interface Telephone4 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type18 {
    value: string;
  }

  export interface Privacy14 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email14 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type18;
    Privacy: Privacy14;
  }

  export interface URL4 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName5 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation4 {
    '@type': string;
    PersonName: PersonName4[];
    ContactLocation: ContactLocation4;
    Address: Address7[];
    Telephone: Telephone4[];
    Email: Email14;
    URL: URL4;
    CompanyName: CompanyName5;
  }

  export interface Identifier16 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Type19 {
    value: string;
  }

  export interface Category8 {
    value: string;
  }

  export interface AdditionalDetailType8 {
    value: string;
  }

  export interface InfoType8 {
    value: string;
  }

  export interface Multimedia8 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category8;
    AdditionalDetailType: AdditionalDetailType8;
    InfoType: InfoType8;
  }

  export interface MultimediaCollection8 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia8[];
  }

  export interface TimeSpan6 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows6 {
    '@type': string;
    TimeSpan: TimeSpan6;
  }

  export interface OperationSchedule4 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows6;
  }

  export interface Identifier17 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details11 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection11 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription11 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection11[];
  }

  export interface DateTimeStamp21 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type20 {
    value: string;
  }

  export interface Privacy15 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email15 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type20;
    Privacy: Privacy15;
  }

  export interface Dimensions11 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File11 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation11 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image11 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier17;
    ImageRef: string;
    URL: string;
    Details: Details11;
    MultimediaDescription: MultimediaDescription11[];
    DateTimeStamp: DateTimeStamp21;
    Email: Email15;
    Dimensions: Dimensions11;
    File: File11;
    Geolocation: Geolocation11;
  }

  export interface DateTimeStamp22 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description10 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image11[];
    DateTimeStamp: DateTimeStamp22;
  }

  export interface ChargeUnit4 {
    value: string;
  }

  export interface CurrencyAmount4 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface BldgRoom8 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number8 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv8 {
    value: string;
    name: string;
  }

  export interface Country8 {
    value: string;
    name: string;
  }

  export interface Address8 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom8[];
    Number: Number8;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv8;
    Country: Country8;
    PostalCode: string;
  }

  export interface LocationCode4 {
    value: string;
    city: string;
    stateProvince: string;
    country: string;
    codeContext: string;
  }

  export interface Transportation4 {
    '@type': string;
    objID: string;
    notificationRequired: string;
    typicalTravelTime: string;
    includedInd: boolean;
    Identifier: Identifier16;
    TransportationRef: string;
    Type: Type19;
    MultimediaCollection: MultimediaCollection8;
    OperationSchedule: OperationSchedule4[];
    Description: Description10;
    ChargeUnit: ChargeUnit4;
    CurrencyAmount: CurrencyAmount4;
    Address: Address8;
    LocationCode: LocationCode4;
  }

  export interface Transportations4 {
    '@type': string;
    Transportation: Transportation4[];
  }

  export interface Identifier18 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details12 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection12 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription12 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection12[];
  }

  export interface DateTimeStamp23 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type21 {
    value: string;
  }

  export interface Privacy16 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email16 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type21;
    Privacy: Privacy16;
  }

  export interface Dimensions12 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File12 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation12 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image12 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier18;
    ImageRef: string;
    URL: string;
    Details: Details12;
    MultimediaDescription: MultimediaDescription12[];
    DateTimeStamp: DateTimeStamp23;
    Email: Email16;
    Dimensions: Dimensions12;
    File: File12;
    Geolocation: Geolocation12;
  }

  export interface DateTimeStamp24 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description11 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image12[];
    DateTimeStamp: DateTimeStamp24;
  }

  export interface RelativePosition4 {
    '@type': string;
    direction: string;
    distance: string;
    unitOfMeasureCode: string;
    indexPointCode: string;
    name: string;
    toFrom: string;
    positionAccuracy: string;
    nearestInd: boolean;
    primaryInd: boolean;
    approximateDistanceInd: boolean;
    Transportations: Transportations4;
    Description: Description11;
  }

  export interface Category9 {
    value: string;
  }

  export interface AdditionalDetailType9 {
    value: string;
  }

  export interface InfoType9 {
    value: string;
  }

  export interface Multimedia9 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category9;
    AdditionalDetailType: AdditionalDetailType9;
    InfoType: InfoType9;
  }

  export interface MultimediaCollection9 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia9[];
  }

  export interface Identifier19 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details13 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection13 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription13 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection13[];
  }

  export interface DateTimeStamp25 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type22 {
    value: string;
  }

  export interface Privacy17 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email17 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type22;
    Privacy: Privacy17;
  }

  export interface Dimensions13 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File13 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation13 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image13 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier19;
    ImageRef: string;
    URL: string;
    Details: Details13;
    MultimediaDescription: MultimediaDescription13[];
    DateTimeStamp: DateTimeStamp25;
    Email: Email17;
    Dimensions: Dimensions13;
    File: File13;
    Geolocation: Geolocation13;
  }

  export interface DateTimeStamp26 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description12 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image13[];
    DateTimeStamp: DateTimeStamp26;
  }

  export interface MeetingRoomCodeEnum {
    value: string;
  }

  export interface ServiceMeetingRoom {
    inventoryCode: string;
    quantity: number;
    sort: number;
    codeDetail: string;
    includedInd: boolean;
    availableToAnyGuestInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity4;
    ContactInformation: ContactInformation4;
    RelativePosition: RelativePosition4;
    MultimediaCollection: MultimediaCollection9;
    Description: Description12;
    MeetingRoomCode_Enum: MeetingRoomCodeEnum;
  }

  export interface HotelPropertyInfo {
    '@type': string;
    pMSSystem: string;
    CategoryCodes: CategoryCodes;
    ServiceBusiness: ServiceBusiness[];
    ServiceHotelAmenity: ServiceHotelAmenity[];
    ServiceMealPlan: ServiceMealPlan[];
    ServiceMeetingRoom: ServiceMeetingRoom[];
  }

  export interface Proximity5 {
    value: string;
  }

  export interface MeetingRoomType {
    value: string;
  }

  export interface MeetingRoomCodeEnum2 {
    value: string;
  }

  export interface DiscountsAvailable {
    value: string;
  }

  export interface Category10 {
    value: string;
  }

  export interface AdditionalDetailType10 {
    value: string;
  }

  export interface InfoType10 {
    value: string;
  }

  export interface Multimedia10 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category10;
    AdditionalDetailType: AdditionalDetailType10;
    InfoType: InfoType10;
  }

  export interface MultimediaCollection10 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia10[];
  }

  export interface ChargeFrequency {
    value: string;
  }

  export interface ChargeUnit5 {
    value: string;
  }

  export interface CurrencyAmount5 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Total {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Total2 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface ChargeUnit6 {
    value: string;
  }

  export interface ChargeFrequency2 {
    value: string;
  }

  export interface Amount {
    '@type': string;
    unitPrice: number;
    unitName: string;
    quantity: number;
    percentage: number;
    description: string;
    Total: Total2;
    ChargeUnit: ChargeUnit6;
    ChargeFrequency: ChargeFrequency2;
  }

  export interface EffectiveExpire {
    value?: any;
    effective: string;
    expire: string;
    expireDateExclusiveInd: boolean;
  }

  export interface TaxTypeEnum {
    value: string;
  }

  export interface Tax {
    '@type': string;
    sequenceNbr: string;
    taxExcludedInd: boolean;
    Amount: Amount;
    EffectiveExpire: EffectiveExpire;
    TaxType_Enum: TaxTypeEnum;
  }

  export interface Taxes {
    '@type': string;
    Total: Total;
    Tax: Tax[];
  }

  export interface Identifier20 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details14 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection14 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription14 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection14[];
  }

  export interface DateTimeStamp27 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type23 {
    value: string;
  }

  export interface Privacy18 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email18 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type23;
    Privacy: Privacy18;
  }

  export interface Dimensions14 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File14 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation14 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image14 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier20;
    ImageRef: string;
    URL: string;
    Details: Details14;
    MultimediaDescription: MultimediaDescription14[];
    DateTimeStamp: DateTimeStamp27;
    Email: Email18;
    Dimensions: Dimensions14;
    File: File14;
    Geolocation: Geolocation14;
  }

  export interface DateTimeStamp28 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description13 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image14[];
    DateTimeStamp: DateTimeStamp28;
  }

  export interface Charge {
    '@type': string;
    chargeUnitExempt: number;
    chargeFrequencyExempt: number;
    maxChargeUnitApplies: number;
    maxChargeFrequencyApplies: number;
    minAge: number;
    maxAge: number;
    taxInclusiveInd: boolean;
    mandatoryInd: boolean;
    taxableInd: boolean;
    ChargeFrequency: ChargeFrequency;
    ChargeUnit: ChargeUnit5;
    CurrencyAmount: CurrencyAmount5;
    Taxes: Taxes;
    Description: Description13;
  }

  export interface MeetingRoomAccessory {
    '@type': string;
    codeDetail: string;
    quantity: number;
    MeetingRoomCode_Enum: MeetingRoomCodeEnum2;
    DiscountsAvailable: DiscountsAvailable;
    MultimediaCollection: MultimediaCollection10;
    Charge: Charge;
  }

  export interface Category11 {
    value: string;
  }

  export interface AdditionalDetailType11 {
    value: string;
  }

  export interface InfoType11 {
    value: string;
  }

  export interface Multimedia11 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category11;
    AdditionalDetailType: AdditionalDetailType11;
    InfoType: InfoType11;
  }

  export interface MultimediaCollection11 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia11[];
  }

  export interface Proximity6 {
    value: string;
  }

  export interface Amount2 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category12 {
    value: string;
  }

  export interface AdditionalDetailType12 {
    value: string;
  }

  export interface InfoType12 {
    value: string;
  }

  export interface Multimedia12 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category12;
    AdditionalDetailType: AdditionalDetailType12;
    InfoType: InfoType12;
  }

  export interface MultimediaCollection12 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia12[];
  }

  export interface Identifier21 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details15 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection15 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription15 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection15[];
  }

  export interface DateTimeStamp29 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type24 {
    value: string;
  }

  export interface Privacy19 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email19 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type24;
    Privacy: Privacy19;
  }

  export interface Dimensions15 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File15 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation15 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image15 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier21;
    ImageRef: string;
    URL: string;
    Details: Details15;
    MultimediaDescription: MultimediaDescription15[];
    DateTimeStamp: DateTimeStamp29;
    Email: Email19;
    Dimensions: Dimensions15;
    File: File15;
    Geolocation: Geolocation15;
  }

  export interface DateTimeStamp30 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description14 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image15[];
    DateTimeStamp: DateTimeStamp30;
  }

  export interface AccessibilityCode {
    value: string;
  }

  export interface DescriptiveContentFeatureAccessibility {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity6;
    Amount: Amount2;
    MultimediaCollection: MultimediaCollection12;
    Description: Description14;
    AccessibilityCode: AccessibilityCode;
    UnitOfMeasure_Enum: string;
  }

  export interface Proximity7 {
    value: string;
  }

  export interface Amount3 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category13 {
    value: string;
  }

  export interface AdditionalDetailType13 {
    value: string;
  }

  export interface InfoType13 {
    value: string;
  }

  export interface Multimedia13 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category13;
    AdditionalDetailType: AdditionalDetailType13;
    InfoType: InfoType13;
  }

  export interface MultimediaCollection13 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia13[];
  }

  export interface Identifier22 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details16 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection16 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription16 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection16[];
  }

  export interface DateTimeStamp31 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type25 {
    value: string;
  }

  export interface Privacy20 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email20 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type25;
    Privacy: Privacy20;
  }

  export interface Dimensions16 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File16 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation16 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image16 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier22;
    ImageRef: string;
    URL: string;
    Details: Details16;
    MultimediaDescription: MultimediaDescription16[];
    DateTimeStamp: DateTimeStamp31;
    Email: Email20;
    Dimensions: Dimensions16;
    File: File16;
    Geolocation: Geolocation16;
  }

  export interface DateTimeStamp32 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description15 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image16[];
    DateTimeStamp: DateTimeStamp32;
  }

  export interface SecurityFeatureEnum {
    value: string;
  }

  export interface DescriptiveContentFeatureSecurity {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity7;
    Amount: Amount3;
    MultimediaCollection: MultimediaCollection13;
    Description: Description15;
    SecurityFeature_Enum: SecurityFeatureEnum;
  }

  export interface Dimensions17 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface MeetingRoomFormat {
    value: string;
  }

  export interface AgeQualifying {
    value: string;
  }

  export interface RoomOccupancy {
    '@type': string;
    minOccupancy: number;
    maxOccupancy: number;
    standardOccupancy: number;
    AgeQualifying: AgeQualifying[];
  }

  export interface ChargeFrequency3 {
    value: string;
  }

  export interface ChargeUnit7 {
    value: string;
  }

  export interface CurrencyAmount6 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Total3 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Total4 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface ChargeUnit8 {
    value: string;
  }

  export interface ChargeFrequency4 {
    value: string;
  }

  export interface Amount4 {
    '@type': string;
    unitPrice: number;
    unitName: string;
    quantity: number;
    percentage: number;
    description: string;
    Total: Total4;
    ChargeUnit: ChargeUnit8;
    ChargeFrequency: ChargeFrequency4;
  }

  export interface EffectiveExpire2 {
    value?: any;
    effective: string;
    expire: string;
    expireDateExclusiveInd: boolean;
  }

  export interface TaxTypeEnum2 {
    value: string;
  }

  export interface Tax2 {
    '@type': string;
    sequenceNbr: string;
    taxExcludedInd: boolean;
    Amount: Amount4;
    EffectiveExpire: EffectiveExpire2;
    TaxType_Enum: TaxTypeEnum2;
  }

  export interface Taxes2 {
    '@type': string;
    Total: Total3;
    Tax: Tax2[];
  }

  export interface Identifier23 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details17 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection17 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription17 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection17[];
  }

  export interface DateTimeStamp33 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type26 {
    value: string;
  }

  export interface Privacy21 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email21 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type26;
    Privacy: Privacy21;
  }

  export interface Dimensions18 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File17 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation17 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image17 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier23;
    ImageRef: string;
    URL: string;
    Details: Details17;
    MultimediaDescription: MultimediaDescription17[];
    DateTimeStamp: DateTimeStamp33;
    Email: Email21;
    Dimensions: Dimensions18;
    File: File17;
    Geolocation: Geolocation17;
  }

  export interface DateTimeStamp34 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description16 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image17[];
    DateTimeStamp: DateTimeStamp34;
  }

  export interface Charge2 {
    '@type': string;
    chargeUnitExempt: number;
    chargeFrequencyExempt: number;
    maxChargeUnitApplies: number;
    maxChargeFrequencyApplies: number;
    minAge: number;
    maxAge: number;
    taxInclusiveInd: boolean;
    mandatoryInd: boolean;
    taxableInd: boolean;
    ChargeFrequency: ChargeFrequency3;
    ChargeUnit: ChargeUnit7;
    CurrencyAmount: CurrencyAmount6;
    Taxes: Taxes2;
    Description: Description16;
  }

  export interface Occupancy {
    '@type': string;
    RoomOccupancy: RoomOccupancy;
    Charge: Charge2;
  }

  export interface MeetingRoomCapacity {
    '@type': string;
    MeetingRoomFormat: MeetingRoomFormat;
    Occupancy: Occupancy;
  }

  export interface AvailableCapacities {
    '@type': string;
    MeetingRoomCapacity: MeetingRoomCapacity[];
  }

  export interface MeetingRoom {
    '@type': string;
    propertySystemName: string;
    roomName: string;
    sort: number;
    meetingRoomCapacity: number;
    access: string;
    meetingRoomLevel: string;
    irregularInd: boolean;
    dedicatedInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity5;
    MeetingRoomType: MeetingRoomType;
    MeetingRoomAccessory: MeetingRoomAccessory[];
    MultimediaCollection: MultimediaCollection11;
    DescriptiveContentFeatureAccessibility: DescriptiveContentFeatureAccessibility[];
    DescriptiveContentFeatureSecurity: DescriptiveContentFeatureSecurity[];
    Dimensions: Dimensions17;
    AvailableCapacities: AvailableCapacities;
  }

  export interface MeetingRooms {
    '@type': string;
    meetingRoomCount: number;
    smallestRoomSpace: number;
    largestRoomSpace: number;
    totalRoomSpace: number;
    largestSeatingCapacity: number;
    secondLargestSeatingCapacity: number;
    smallestSeatingCapacity: number;
    totalSeatingCapacity: number;
    largestRoomHeight: number;
    totalExhibitSpace: number;
    MeetingRoom: MeetingRoom[];
    UnitOfMeasure: string;
  }

  export interface Proximity8 {
    value: string;
  }

  export interface RoomTypeCode {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface RoomCategory {
    value: string;
  }

  export interface RoomLocationCode {
    value: string;
  }

  export interface RoomView {
    value: string;
  }

  export interface BedType {
    value: string;
  }

  export interface RoomClassification {
    value: string;
  }

  export interface RoomArchitecture {
    value: string;
  }

  export interface TypeRoom {
    '@type': string;
    standardBedQuantity: number;
    standardOccupancy: number;
    maxRollaways: number;
    size: number;
    count: number;
    name: string;
    roomTypeCode: string;
    gDSRoomTypeCode: string;
    roomID: string;
    floor: number;
    inventoryBlockCode: string;
    configuration: string;
    sizeMeasurement: string;
    quantity: number;
    roomGender: string;
    maxCribs: number;
    nonsmokingInd: boolean;
    compositeInd: boolean;
    shareRoomInd: boolean;
    RoomCategory: RoomCategory;
    RoomLocationCode: RoomLocationCode;
    RoomView: RoomView;
    BedType: BedType[];
    RoomClassification: RoomClassification;
    RoomArchitecture: RoomArchitecture;
  }

  export interface RoomAmenity {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface TimeSpan7 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows7 {
    '@type': string;
    TimeSpan: TimeSpan7;
  }

  export interface OperationSchedule5 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows7;
  }

  export interface PersonName5 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation5 {
    value: string;
  }

  export interface BldgRoom9 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number9 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv9 {
    value: string;
    name: string;
  }

  export interface Country9 {
    value: string;
    name: string;
  }

  export interface Address9 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom9[];
    Number: Number9;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv9;
    Country: Country9;
    PostalCode: string;
  }

  export interface Telephone5 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type27 {
    value: string;
  }

  export interface Privacy22 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email22 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type27;
    Privacy: Privacy22;
  }

  export interface URL5 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName6 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation5 {
    '@type': string;
    PersonName: PersonName5[];
    ContactLocation: ContactLocation5;
    Address: Address9[];
    Telephone: Telephone5[];
    Email: Email22;
    URL: URL5;
    CompanyName: CompanyName6;
  }

  export interface Category14 {
    value: string;
  }

  export interface AdditionalDetailType14 {
    value: string;
  }

  export interface InfoType14 {
    value: string;
  }

  export interface Multimedia14 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category14;
    AdditionalDetailType: AdditionalDetailType14;
    InfoType: InfoType14;
  }

  export interface MultimediaCollection14 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia14[];
  }

  export interface Identifier24 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details18 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection18 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription18 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection18[];
  }

  export interface DateTimeStamp35 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type28 {
    value: string;
  }

  export interface Privacy23 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email23 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type28;
    Privacy: Privacy23;
  }

  export interface Dimensions19 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File18 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation18 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image18 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier24;
    ImageRef: string;
    URL: string;
    Details: Details18;
    MultimediaDescription: MultimediaDescription18[];
    DateTimeStamp: DateTimeStamp35;
    Email: Email23;
    Dimensions: Dimensions19;
    File: File18;
    Geolocation: Geolocation18;
  }

  export interface DateTimeStamp36 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description17 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image18[];
    DateTimeStamp: DateTimeStamp36;
  }

  export interface DescriptiveContentAmenity {
    '@type': string;
    quantity: number;
    amenityID: string;
    includedInRateInd: boolean;
    RoomAmenity: RoomAmenity;
    OperationSchedule: OperationSchedule5[];
    ContactInformation: ContactInformation5[];
    MultimediaCollection: MultimediaCollection14;
    Description: Description17;
  }

  export interface Proximity9 {
    value: string;
  }

  export interface Amount5 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category15 {
    value: string;
  }

  export interface AdditionalDetailType15 {
    value: string;
  }

  export interface InfoType15 {
    value: string;
  }

  export interface Multimedia15 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category15;
    AdditionalDetailType: AdditionalDetailType15;
    InfoType: InfoType15;
  }

  export interface MultimediaCollection15 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia15[];
  }

  export interface Identifier25 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details19 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection19 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription19 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection19[];
  }

  export interface DateTimeStamp37 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type29 {
    value: string;
  }

  export interface Privacy24 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email24 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type29;
    Privacy: Privacy24;
  }

  export interface Dimensions20 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File19 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation19 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image19 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier25;
    ImageRef: string;
    URL: string;
    Details: Details19;
    MultimediaDescription: MultimediaDescription19[];
    DateTimeStamp: DateTimeStamp37;
    Email: Email24;
    Dimensions: Dimensions20;
    File: File19;
    Geolocation: Geolocation19;
  }

  export interface DateTimeStamp38 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description18 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image19[];
    DateTimeStamp: DateTimeStamp38;
  }

  export interface AccessibilityCode2 {
    value: string;
  }

  export interface DescriptiveContentFeatureAccessibility2 {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity9;
    Amount: Amount5;
    MultimediaCollection: MultimediaCollection15;
    Description: Description18;
    AccessibilityCode: AccessibilityCode2;
    UnitOfMeasure_Enum: string;
  }

  export interface Proximity10 {
    value: string;
  }

  export interface Amount6 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category16 {
    value: string;
  }

  export interface AdditionalDetailType16 {
    value: string;
  }

  export interface InfoType16 {
    value: string;
  }

  export interface Multimedia16 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category16;
    AdditionalDetailType: AdditionalDetailType16;
    InfoType: InfoType16;
  }

  export interface MultimediaCollection16 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia16[];
  }

  export interface Identifier26 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details20 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection20 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription20 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection20[];
  }

  export interface DateTimeStamp39 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type30 {
    value: string;
  }

  export interface Privacy25 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email25 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type30;
    Privacy: Privacy25;
  }

  export interface Dimensions21 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File20 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation20 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image20 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier26;
    ImageRef: string;
    URL: string;
    Details: Details20;
    MultimediaDescription: MultimediaDescription20[];
    DateTimeStamp: DateTimeStamp39;
    Email: Email25;
    Dimensions: Dimensions21;
    File: File20;
    Geolocation: Geolocation20;
  }

  export interface DateTimeStamp40 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description19 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image20[];
    DateTimeStamp: DateTimeStamp40;
  }

  export interface SecurityFeatureEnum2 {
    value: string;
  }

  export interface DescriptiveContentFeatureSecurity2 {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity10;
    Amount: Amount6;
    MultimediaCollection: MultimediaCollection16;
    Description: Description19;
    SecurityFeature_Enum: SecurityFeatureEnum2;
  }

  export interface Category17 {
    value: string;
  }

  export interface AdditionalDetailType17 {
    value: string;
  }

  export interface InfoType17 {
    value: string;
  }

  export interface Multimedia17 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category17;
    AdditionalDetailType: AdditionalDetailType17;
    InfoType: InfoType17;
  }

  export interface MultimediaCollection17 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia17[];
  }

  export interface Identifier27 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details21 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection21 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription21 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection21[];
  }

  export interface DateTimeStamp41 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type31 {
    value: string;
  }

  export interface Privacy26 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email26 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type31;
    Privacy: Privacy26;
  }

  export interface Dimensions22 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File21 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation21 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image21 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier27;
    ImageRef: string;
    URL: string;
    Details: Details21;
    MultimediaDescription: MultimediaDescription21[];
    DateTimeStamp: DateTimeStamp41;
    Email: Email26;
    Dimensions: Dimensions22;
    File: File21;
    Geolocation: Geolocation21;
  }

  export interface DateTimeStamp42 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description20 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image21[];
    DateTimeStamp: DateTimeStamp42;
  }

  export interface GuestRoom {
    '@type': string;
    iD: string;
    language: string;
    sort: number;
    roomTypeName: string;
    nonSmokingQuantity: number;
    maxOccupancy: number;
    minOccupancy: number;
    maxAdultOccupancy: number;
    maxChildOccupancy: number;
    compositeInd: boolean;
    Proximity: Proximity8;
    RoomTypeCode: RoomTypeCode;
    TypeRoom: TypeRoom[];
    DescriptiveContentAmenity: DescriptiveContentAmenity[];
    DescriptiveContentFeatureAccessibility: DescriptiveContentFeatureAccessibility2[];
    DescriptiveContentFeatureSecurity: DescriptiveContentFeatureSecurity2[];
    MultimediaCollection: MultimediaCollection17;
    Description: Description20;
  }

  export interface GuestRooms {
    '@type': string;
    maxOccupancy: number;
    GuestRoom: GuestRoom[];
  }

  export interface Proximity11 {
    value: string;
  }

  export interface MealsOffered {
    value?: any;
    breakfastOfferedInd: boolean;
    lunchOfferedInd: boolean;
    brunchOfferedInd: boolean;
    dinnerOfferedInd: boolean;
  }

  export interface Category18 {
    value: string;
  }

  export interface AdditionalDetailType18 {
    value: string;
  }

  export interface InfoType18 {
    value: string;
  }

  export interface Multimedia18 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category18;
    AdditionalDetailType: AdditionalDetailType18;
    InfoType: InfoType18;
  }

  export interface MultimediaCollection18 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia18[];
  }

  export interface Identifier28 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Type32 {
    value: string;
  }

  export interface Category19 {
    value: string;
  }

  export interface AdditionalDetailType19 {
    value: string;
  }

  export interface InfoType19 {
    value: string;
  }

  export interface Multimedia19 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category19;
    AdditionalDetailType: AdditionalDetailType19;
    InfoType: InfoType19;
  }

  export interface MultimediaCollection19 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia19[];
  }

  export interface TimeSpan8 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows8 {
    '@type': string;
    TimeSpan: TimeSpan8;
  }

  export interface OperationSchedule6 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows8;
  }

  export interface Identifier29 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details22 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection22 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription22 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection22[];
  }

  export interface DateTimeStamp43 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type33 {
    value: string;
  }

  export interface Privacy27 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email27 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type33;
    Privacy: Privacy27;
  }

  export interface Dimensions23 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File22 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation22 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image22 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier29;
    ImageRef: string;
    URL: string;
    Details: Details22;
    MultimediaDescription: MultimediaDescription22[];
    DateTimeStamp: DateTimeStamp43;
    Email: Email27;
    Dimensions: Dimensions23;
    File: File22;
    Geolocation: Geolocation22;
  }

  export interface DateTimeStamp44 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description21 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image22[];
    DateTimeStamp: DateTimeStamp44;
  }

  export interface ChargeUnit9 {
    value: string;
  }

  export interface CurrencyAmount7 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface BldgRoom10 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number10 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv10 {
    value: string;
    name: string;
  }

  export interface Country10 {
    value: string;
    name: string;
  }

  export interface Address10 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom10[];
    Number: Number10;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv10;
    Country: Country10;
    PostalCode: string;
  }

  export interface LocationCode5 {
    value: string;
    city: string;
    stateProvince: string;
    country: string;
    codeContext: string;
  }

  export interface Transportation5 {
    '@type': string;
    objID: string;
    notificationRequired: string;
    typicalTravelTime: string;
    includedInd: boolean;
    Identifier: Identifier28;
    TransportationRef: string;
    Type: Type32;
    MultimediaCollection: MultimediaCollection19;
    OperationSchedule: OperationSchedule6[];
    Description: Description21;
    ChargeUnit: ChargeUnit9;
    CurrencyAmount: CurrencyAmount7;
    Address: Address10;
    LocationCode: LocationCode5;
  }

  export interface Transportations5 {
    '@type': string;
    Transportation: Transportation5[];
  }

  export interface Identifier30 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details23 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection23 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription23 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection23[];
  }

  export interface DateTimeStamp45 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type34 {
    value: string;
  }

  export interface Privacy28 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email28 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type34;
    Privacy: Privacy28;
  }

  export interface Dimensions24 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File23 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation23 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image23 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier30;
    ImageRef: string;
    URL: string;
    Details: Details23;
    MultimediaDescription: MultimediaDescription23[];
    DateTimeStamp: DateTimeStamp45;
    Email: Email28;
    Dimensions: Dimensions24;
    File: File23;
    Geolocation: Geolocation23;
  }

  export interface DateTimeStamp46 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description22 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image23[];
    DateTimeStamp: DateTimeStamp46;
  }

  export interface RelativePosition5 {
    '@type': string;
    direction: string;
    distance: string;
    unitOfMeasureCode: string;
    indexPointCode: string;
    name: string;
    toFrom: string;
    positionAccuracy: string;
    nearestInd: boolean;
    primaryInd: boolean;
    approximateDistanceInd: boolean;
    Transportations: Transportations5;
    Description: Description22;
  }

  export interface TimeSpan9 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows9 {
    '@type': string;
    TimeSpan: TimeSpan9;
  }

  export interface OperationSchedule7 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows9;
  }

  export interface RestaurantInformation {
    '@type': string;
  }

  export interface Identifier31 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details24 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection24 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription24 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection24[];
  }

  export interface DateTimeStamp47 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type35 {
    value: string;
  }

  export interface Privacy29 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email29 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type35;
    Privacy: Privacy29;
  }

  export interface Dimensions25 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File24 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation24 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image24 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier31;
    ImageRef: string;
    URL: string;
    Details: Details24;
    MultimediaDescription: MultimediaDescription24[];
    DateTimeStamp: DateTimeStamp47;
    Email: Email29;
    Dimensions: Dimensions25;
    File: File24;
    Geolocation: Geolocation24;
  }

  export interface DateTimeStamp48 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description23 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image24[];
    DateTimeStamp: DateTimeStamp48;
  }

  export interface Proximity12 {
    value: string;
  }

  export interface Amount7 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category20 {
    value: string;
  }

  export interface AdditionalDetailType20 {
    value: string;
  }

  export interface InfoType20 {
    value: string;
  }

  export interface Multimedia20 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category20;
    AdditionalDetailType: AdditionalDetailType20;
    InfoType: InfoType20;
  }

  export interface MultimediaCollection20 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia20[];
  }

  export interface Identifier32 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details25 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection25 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription25 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection25[];
  }

  export interface DateTimeStamp49 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type36 {
    value: string;
  }

  export interface Privacy30 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email30 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type36;
    Privacy: Privacy30;
  }

  export interface Dimensions26 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File25 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation25 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image25 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier32;
    ImageRef: string;
    URL: string;
    Details: Details25;
    MultimediaDescription: MultimediaDescription25[];
    DateTimeStamp: DateTimeStamp49;
    Email: Email30;
    Dimensions: Dimensions26;
    File: File25;
    Geolocation: Geolocation25;
  }

  export interface DateTimeStamp50 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description24 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image25[];
    DateTimeStamp: DateTimeStamp50;
  }

  export interface AccessibilityCode3 {
    value: string;
  }

  export interface DescriptiveContentFeatureAccessibility3 {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity12;
    Amount: Amount7;
    MultimediaCollection: MultimediaCollection20;
    Description: Description24;
    AccessibilityCode: AccessibilityCode3;
    UnitOfMeasure_Enum: string;
  }

  export interface Proximity13 {
    value: string;
  }

  export interface Amount8 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface Category21 {
    value: string;
  }

  export interface AdditionalDetailType21 {
    value: string;
  }

  export interface InfoType21 {
    value: string;
  }

  export interface Multimedia21 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category21;
    AdditionalDetailType: AdditionalDetailType21;
    InfoType: InfoType21;
  }

  export interface MultimediaCollection21 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia21[];
  }

  export interface Identifier33 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details26 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection26 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription26 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection26[];
  }

  export interface DateTimeStamp51 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type37 {
    value: string;
  }

  export interface Privacy31 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email31 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type37;
    Privacy: Privacy31;
  }

  export interface Dimensions27 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File26 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation26 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image26 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier33;
    ImageRef: string;
    URL: string;
    Details: Details26;
    MultimediaDescription: MultimediaDescription26[];
    DateTimeStamp: DateTimeStamp51;
    Email: Email31;
    Dimensions: Dimensions27;
    File: File26;
    Geolocation: Geolocation26;
  }

  export interface DateTimeStamp52 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description25 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image26[];
    DateTimeStamp: DateTimeStamp52;
  }

  export interface SecurityFeatureEnum3 {
    value: string;
  }

  export interface DescriptiveContentFeatureSecurity3 {
    codeDetail: string;
    quantity: number;
    Proximity: Proximity13;
    Amount: Amount8;
    MultimediaCollection: MultimediaCollection21;
    Description: Description25;
    SecurityFeature_Enum: SecurityFeatureEnum3;
  }

  export interface PersonName6 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation6 {
    value: string;
  }

  export interface BldgRoom11 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number11 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv11 {
    value: string;
    name: string;
  }

  export interface Country11 {
    value: string;
    name: string;
  }

  export interface Address11 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom11[];
    Number: Number11;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv11;
    Country: Country11;
    PostalCode: string;
  }

  export interface Telephone6 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type38 {
    value: string;
  }

  export interface Privacy32 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email32 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type38;
    Privacy: Privacy32;
  }

  export interface URL6 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName7 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation6 {
    '@type': string;
    PersonName: PersonName6[];
    ContactLocation: ContactLocation6;
    Address: Address11[];
    Telephone: Telephone6[];
    Email: Email32;
    URL: URL6;
    CompanyName: CompanyName7;
  }

  export interface Award {
    value: string;
    provider: string;
    description: string;
    ratingSymbol: string;
    rating: string;
    date: string;
    officialAppointmentInd: boolean;
  }

  export interface Restaurant {
    '@type': string;
    restaurantName: string;
    maxSeatingCapacity: number;
    maxSingleParty: number;
    invCode: string;
    sort: number;
    reservationRequiredInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity11;
    MealsOffered: MealsOffered;
    MultimediaCollection: MultimediaCollection18;
    RelativePosition: RelativePosition5;
    OperationSchedule: OperationSchedule7;
    RestaurantInformation: RestaurantInformation;
    Description: Description23;
    DescriptiveContentFeatureAccessibility: DescriptiveContentFeatureAccessibility3[];
    DescriptiveContentFeatureSecurity: DescriptiveContentFeatureSecurity3[];
    ContactInformation: ContactInformation6[];
    Award: Award[];
  }

  export interface RestaurantService {
    value: string;
  }

  export interface Restaurants {
    '@type': string;
    quantity: number;
    Restaurant: Restaurant[];
    RestaurantService: RestaurantService[];
  }

  export interface FacilityInfo {
    '@type': string;
    MeetingRooms: MeetingRooms;
    GuestRooms: GuestRooms;
    Restaurants: Restaurants;
  }

  export interface TimeSpan10 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows10 {
    '@type': string;
    TimeSpan: TimeSpan10;
  }

  export interface BasisType {
    value: string;
  }

  export interface Deadline {
    '@type': string;
    deadlineType: string;
  }

  export interface AmountPercent {
    value?: any;
    amount: number;
    percent: number;
    currencyCode: string;
    decimalPlaces: string;
  }

  export interface Identifier34 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details27 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection27 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription27 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection27[];
  }

  export interface DateTimeStamp53 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type39 {
    value: string;
  }

  export interface Privacy33 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email33 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type39;
    Privacy: Privacy33;
  }

  export interface Dimensions28 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File27 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation27 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image27 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier34;
    ImageRef: string;
    URL: string;
    Details: Details27;
    MultimediaDescription: MultimediaDescription27[];
    DateTimeStamp: DateTimeStamp53;
    Email: Email33;
    Dimensions: Dimensions28;
    File: File27;
    Geolocation: Geolocation27;
  }

  export interface DateTimeStamp54 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description26 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image27[];
    DateTimeStamp: DateTimeStamp54;
  }

  export interface CancelPenalty {
    '@type': string;
    numberOfNights: number;
    BasisType: BasisType;
    Deadline: Deadline;
    AmountPercent: AmountPercent;
    Description: Description26[];
  }

  export interface HotelCancelPolicy {
    '@type': string;
    cancelPolicyInd: boolean;
    CancelPenalty: CancelPenalty[];
  }

  export interface Type40 {
    value: string;
  }

  export interface PaymentCardCode {
    value: string;
  }

  export interface GuaranteesAccepted {
    '@type': string;
    noCardHolderInfoReqInd: boolean;
    nameReqInd: boolean;
    addressReqInd: boolean;
    phoneReqInd: boolean;
    interbankNbrReqInd: boolean;
    bookingSourceAllowedInd: boolean;
    corpDiscountNbrAllowedInd: boolean;
    Type: Type40[];
    PaymentCardCode: PaymentCardCode[];
  }

  export interface PaymentsAccepted2 {
    value: string;
  }

  export interface PaymentsAccepted {
    '@type': string;
    noCardHolderInfoReqInd: boolean;
    nameReqInd: boolean;
    addressReqInd: boolean;
    phoneReqInd: boolean;
    interbankNbrReqInd: boolean;
    bookingSourceAllowedInd: boolean;
    corpDiscountNbrAllowedInd: boolean;
    PaymentsAccepted: PaymentsAccepted2[];
  }

  export interface Identifier35 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details28 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection28 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription28 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection28[];
  }

  export interface DateTimeStamp55 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type41 {
    value: string;
  }

  export interface Privacy34 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email34 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type41;
    Privacy: Privacy34;
  }

  export interface Dimensions29 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File28 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation28 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image28 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier35;
    ImageRef: string;
    URL: string;
    Details: Details28;
    MultimediaDescription: MultimediaDescription28[];
    DateTimeStamp: DateTimeStamp55;
    Email: Email34;
    Dimensions: Dimensions29;
    File: File28;
    Geolocation: Geolocation28;
  }

  export interface DateTimeStamp56 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description27 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image28[];
    DateTimeStamp: DateTimeStamp56;
  }

  export interface HotelPolicyInformation {
    '@type': string;
    checkInTime: string;
    checkOutTime: string;
    minGuestAge: number;
    usualStayFreeCutoffAge: number;
    usualStayFreeChildPerAdult: number;
    totalGuestCount: number;
    defaultTaxServiceIncludedInd: boolean;
    kidsStayFreeInd: boolean;
    adultsOnlyInd: boolean;
    couplesOnlyInd: boolean;
    MaxChildAge: number;
    Description: Description27;
  }

  export interface Total5 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface ChargeUnit10 {
    value: string;
  }

  export interface ChargeFrequency5 {
    value: string;
  }

  export interface Amount9 {
    '@type': string;
    unitPrice: number;
    unitName: string;
    quantity: number;
    percentage: number;
    description: string;
    Total: Total5;
    ChargeUnit: ChargeUnit10;
    ChargeFrequency: ChargeFrequency5;
  }

  export interface EffectiveExpire3 {
    value?: any;
    effective: string;
    expire: string;
    expireDateExclusiveInd: boolean;
  }

  export interface TaxTypeEnum3 {
    value: string;
  }

  export interface TimeSpan11 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows11 {
    '@type': string;
    TimeSpan: TimeSpan11;
  }

  export interface Identifier36 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details29 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection29 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription29 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection29[];
  }

  export interface DateTimeStamp57 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type42 {
    value: string;
  }

  export interface Privacy35 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email35 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type42;
    Privacy: Privacy35;
  }

  export interface Dimensions30 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File29 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation29 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image29 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier36;
    ImageRef: string;
    URL: string;
    Details: Details29;
    MultimediaDescription: MultimediaDescription29[];
    DateTimeStamp: DateTimeStamp57;
    Email: Email35;
    Dimensions: Dimensions30;
    File: File29;
    Geolocation: Geolocation29;
  }

  export interface DateTimeStamp58 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description28 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image29[];
    DateTimeStamp: DateTimeStamp58;
  }

  export interface TaxPolicy {
    '@type': string;
    sequenceNbr: string;
    nightsForTaxExemptionQuantity: number;
    taxableNightsQuantity: number;
    taxExcludedInd: boolean;
    Amount: Amount9;
    EffectiveExpire: EffectiveExpire3;
    TaxType_Enum: TaxTypeEnum3;
    DateTimeSpanWindows: DateTimeSpanWindows11;
    Description: Description28;
  }

  export interface TaxPolicies {
    '@type': string;
    TaxPolicy: TaxPolicy[];
  }

  export interface PetsAllowedEnum {
    value: string;
  }

  export interface PetPolicyEnum {
    value: string;
  }

  export interface UnitOfMeasure {
    '@type': string;
    quantity: number;
    UnitOfMeasure_Enum: string;
  }

  export interface NonRefundableFee {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface ChargeFrequency6 {
    value: string;
  }

  export interface Identifier37 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details30 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection30 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription30 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection30[];
  }

  export interface DateTimeStamp59 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type43 {
    value: string;
  }

  export interface Privacy36 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email36 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type43;
    Privacy: Privacy36;
  }

  export interface Dimensions31 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File30 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation30 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image30 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier37;
    ImageRef: string;
    URL: string;
    Details: Details30;
    MultimediaDescription: MultimediaDescription30[];
    DateTimeStamp: DateTimeStamp59;
    Email: Email36;
    Dimensions: Dimensions31;
    File: File30;
    Geolocation: Geolocation30;
  }

  export interface DateTimeStamp60 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description29 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image30[];
    DateTimeStamp: DateTimeStamp60;
  }

  export interface PetPolicy {
    '@type': string;
    maxPetQuantity: number;
    refundableDepositInd: boolean;
    restrictionInd: boolean;
    PetPolicy_Enum: PetPolicyEnum[];
    UnitOfMeasure: UnitOfMeasure;
    NonRefundableFee: NonRefundableFee;
    ChargeFrequency: ChargeFrequency6;
    Description: Description29;
  }

  export interface PetPolicies {
    '@type': string;
    PetsAllowed_Enum: PetsAllowedEnum;
    PetPolicy: PetPolicy[];
  }

  export interface Total6 {
    value: number;
    currencyCode: string;
    minorUnit: number;
  }

  export interface ChargeUnit11 {
    value: string;
  }

  export interface ChargeFrequency7 {
    value: string;
  }

  export interface Price {
    '@type': string;
    unitPrice: number;
    unitName: string;
    quantity: number;
    percentage: number;
    description: string;
    Total: Total6;
    ChargeUnit: ChargeUnit11;
    ChargeFrequency: ChargeFrequency7;
  }

  export interface FeeType {
    value: string;
  }

  export interface Identifier38 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details31 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection31 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription31 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection31[];
  }

  export interface DateTimeStamp61 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type44 {
    value: string;
  }

  export interface Privacy37 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email37 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type44;
    Privacy: Privacy37;
  }

  export interface Dimensions32 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File31 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation31 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image31 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier38;
    ImageRef: string;
    URL: string;
    Details: Details31;
    MultimediaDescription: MultimediaDescription31[];
    DateTimeStamp: DateTimeStamp61;
    Email: Email37;
    Dimensions: Dimensions32;
    File: File31;
    Geolocation: Geolocation31;
  }

  export interface DateTimeStamp62 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description30 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image31[];
    DateTimeStamp: DateTimeStamp62;
  }

  export interface FeeDetail {
    '@type': string;
  }

  export interface TimeSpan12 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows12 {
    '@type': string;
    TimeSpan: TimeSpan12;
  }

  export interface FeePolicy {
    '@type': string;
    type: string;
    taxExcludedInd: boolean;
    mandatoryInd: boolean;
    taxableInd: boolean;
    Price: Price;
    FeeType: FeeType;
    Description: Description30;
    FeeDetail: FeeDetail;
    DateTimeSpanWindows: DateTimeSpanWindows12;
  }

  export interface FeePolicies {
    '@type': string;
    FeePolicy: FeePolicy[];
  }

  export interface RatePlanType {
    value: string;
  }

  export interface GuestType {
    value: string;
  }

  export interface RateOfferType {
    value: string;
  }

  export interface Identifier39 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details32 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection32 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription32 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection32[];
  }

  export interface DateTimeStamp63 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type45 {
    value: string;
  }

  export interface Privacy38 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email38 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type45;
    Privacy: Privacy38;
  }

  export interface Dimensions33 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File32 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation32 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image32 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier39;
    ImageRef: string;
    URL: string;
    Details: Details32;
    MultimediaDescription: MultimediaDescription32[];
    DateTimeStamp: DateTimeStamp63;
    Email: Email38;
    Dimensions: Dimensions33;
    File: File32;
    Geolocation: Geolocation32;
  }

  export interface DateTimeStamp64 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description31 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image32[];
    DateTimeStamp: DateTimeStamp64;
  }

  export interface RatePolicy {
    '@type': string;
    minRoomNightCommittment: number;
    subjectToChangeInd: boolean;
    corporateIdInd: boolean;
    RatePlanType: RatePlanType;
    GuestType: GuestType;
    RateOfferType: RateOfferType;
    Description: Description31;
    IdRequiredInd: boolean;
  }

  export interface RatePolicies {
    '@type': string;
    RatePolicy: RatePolicy[];
  }

  export interface GroupPolicy {
    '@type': string;
    contractLanguage: string;
    contractCurrency: string;
  }

  export interface GroupPolicies {
    '@type': string;
    maxNumberOfRooms: number;
    LocalDMCRole: string;
    GroupPolicy: GroupPolicy[];
  }

  export interface HotelPolicy {
    '@type': string;
    defaultValidBookingMinOffset: number;
    code: string;
    DateTimeSpanWindows: DateTimeSpanWindows10;
    DaysOfWeek: string[];
    HotelCancelPolicy: HotelCancelPolicy;
    GuaranteesAccepted: GuaranteesAccepted;
    PaymentsAccepted: PaymentsAccepted;
    HotelPolicyInformation: HotelPolicyInformation;
    TaxPolicies: TaxPolicies;
    PetPolicies: PetPolicies;
    FeePolicies: FeePolicies;
    RatePolicies: RatePolicies;
    GroupPolicies: GroupPolicies;
  }

  export interface HotelPolicies {
    '@type': string;
    guaranteeRoomTypeViaGDSInd: boolean;
    guaranteeRoomTypeViaCRCInd: boolean;
    guaranteeRoomTypeViaPropertyInd: boolean;
    HotelPolicy: HotelPolicy[];
  }

  export interface Code {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface Type46 {
    value: string;
  }

  export interface BldgRoom12 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number12 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv12 {
    value: string;
    name: string;
  }

  export interface Country12 {
    value: string;
    name: string;
  }

  export interface Address12 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom12[];
    Number: Number12;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv12;
    Country: Country12;
    PostalCode: string;
  }

  export interface Position2 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Location {
    '@type': string;
    Address: Address12;
    Position: Position2;
  }

  export interface ReferencePoint {
    '@type': string;
    name: string;
    Code: Code;
    Type: Type46;
    Location: Location;
  }

  export interface Proximity14 {
    value: string;
  }

  export interface ChargeType {
    value: string;
  }

  export interface AttractionType {
    value: string;
  }

  export interface TimeSpan13 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows13 {
    '@type': string;
    TimeSpan: TimeSpan13;
  }

  export interface Code2 {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface MinAgeAppropriate {
    value: string;
  }

  export interface TimeSpan14 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows14 {
    '@type': string;
    TimeSpan: TimeSpan14;
  }

  export interface OperationSchedule8 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows14;
  }

  export interface Category22 {
    value: string;
  }

  export interface AdditionalDetailType22 {
    value: string;
  }

  export interface InfoType22 {
    value: string;
  }

  export interface Multimedia22 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category22;
    AdditionalDetailType: AdditionalDetailType22;
    InfoType: InfoType22;
  }

  export interface MultimediaCollection22 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia22[];
  }

  export interface Code3 {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface Type47 {
    value: string;
  }

  export interface BldgRoom13 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number13 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv13 {
    value: string;
    name: string;
  }

  export interface Country13 {
    value: string;
    name: string;
  }

  export interface Address13 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom13[];
    Number: Number13;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv13;
    Country: Country13;
    PostalCode: string;
  }

  export interface Position3 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Location2 {
    '@type': string;
    Address: Address13;
    Position: Position3;
  }

  export interface ReferencePoint2 {
    '@type': string;
    name: string;
    Code: Code3;
    Type: Type47;
    Location: Location2;
  }

  export interface Identifier40 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details33 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection33 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription33 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection33[];
  }

  export interface DateTimeStamp65 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type48 {
    value: string;
  }

  export interface Privacy39 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email39 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type48;
    Privacy: Privacy39;
  }

  export interface Dimensions34 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File33 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation33 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image33 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier40;
    ImageRef: string;
    URL: string;
    Details: Details33;
    MultimediaDescription: MultimediaDescription33[];
    DateTimeStamp: DateTimeStamp65;
    Email: Email39;
    Dimensions: Dimensions34;
    File: File33;
    Geolocation: Geolocation33;
  }

  export interface DateTimeStamp66 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description32 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image33[];
    DateTimeStamp: DateTimeStamp66;
  }

  export interface PersonName7 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation7 {
    value: string;
  }

  export interface BldgRoom14 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number14 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv14 {
    value: string;
    name: string;
  }

  export interface Country14 {
    value: string;
    name: string;
  }

  export interface Address14 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom14[];
    Number: Number14;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv14;
    Country: Country14;
    PostalCode: string;
  }

  export interface Telephone7 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type49 {
    value: string;
  }

  export interface Privacy40 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email40 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type49;
    Privacy: Privacy40;
  }

  export interface URL7 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName8 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation7 {
    '@type': string;
    PersonName: PersonName7[];
    ContactLocation: ContactLocation7;
    Address: Address14[];
    Telephone: Telephone7[];
    Email: Email40;
    URL: URL7;
    CompanyName: CompanyName8;
  }

  export interface Attraction {
    '@type': string;
    name: string;
    sort: number;
    fee: number;
    courtesyPhoneInd: boolean;
    Proximity: Proximity14;
    ChargeType: ChargeType;
    AttractionType: AttractionType;
    DateTimeSpanWindows: DateTimeSpanWindows13;
    Code: Code2;
    MinAgeAppropriate: MinAgeAppropriate;
    OperationSchedule: OperationSchedule8[];
    MultimediaCollection: MultimediaCollection22;
    ReferencePoint: ReferencePoint2;
    Description: Description32;
    ContactInformation: ContactInformation7[];
  }

  export interface Proximity15 {
    value: string;
  }

  export interface ID {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface RecreationService {
    value: string;
  }

  export interface PersonName8 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation8 {
    value: string;
  }

  export interface BldgRoom15 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number15 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv15 {
    value: string;
    name: string;
  }

  export interface Country15 {
    value: string;
    name: string;
  }

  export interface Address15 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom15[];
    Number: Number15;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv15;
    Country: Country15;
    PostalCode: string;
  }

  export interface Telephone8 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type50 {
    value: string;
  }

  export interface Privacy41 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email41 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type50;
    Privacy: Privacy41;
  }

  export interface URL8 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName9 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation8 {
    '@type': string;
    PersonName: PersonName8[];
    ContactLocation: ContactLocation8;
    Address: Address15[];
    Telephone: Telephone8[];
    Email: Email41;
    URL: URL8;
    CompanyName: CompanyName9;
  }

  export interface TimeSpan15 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows15 {
    '@type': string;
    TimeSpan: TimeSpan15;
  }

  export interface OperationSchedule9 {
    '@type': string;
    daysOfWeek: string[];
    additionalOperationInfoCode: string;
    frequency: string;
    text: string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows15;
  }

  export interface Code4 {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface Type51 {
    value: string;
  }

  export interface BldgRoom16 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number16 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv16 {
    value: string;
    name: string;
  }

  export interface Country16 {
    value: string;
    name: string;
  }

  export interface Address16 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom16[];
    Number: Number16;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv16;
    Country: Country16;
    PostalCode: string;
  }

  export interface Position4 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Location3 {
    '@type': string;
    Address: Address16;
    Position: Position4;
  }

  export interface ReferencePoint3 {
    '@type': string;
    name: string;
    Code: Code4;
    Type: Type51;
    Location: Location3;
  }

  export interface Category23 {
    value: string;
  }

  export interface AdditionalDetailType23 {
    value: string;
  }

  export interface InfoType23 {
    value: string;
  }

  export interface Multimedia23 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category23;
    AdditionalDetailType: AdditionalDetailType23;
    InfoType: InfoType23;
  }

  export interface MultimediaCollection23 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia23[];
  }

  export interface RecreationFeature2 {
    value: string;
  }

  export interface Identifier41 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details34 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection34 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription34 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection34[];
  }

  export interface DateTimeStamp67 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type52 {
    value: string;
  }

  export interface Privacy42 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email42 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type52;
    Privacy: Privacy42;
  }

  export interface Dimensions35 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File34 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation34 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image34 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier41;
    ImageRef: string;
    URL: string;
    Details: Details34;
    MultimediaDescription: MultimediaDescription34[];
    DateTimeStamp: DateTimeStamp67;
    Email: Email42;
    Dimensions: Dimensions35;
    File: File34;
    Geolocation: Geolocation34;
  }

  export interface DateTimeStamp68 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description33 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image34[];
    DateTimeStamp: DateTimeStamp68;
  }

  export interface RecreationFeature {
    '@type': string;
    RecreationFeature: RecreationFeature2;
    FeatureValue: string;
    Description: Description33;
  }

  export interface Identifier42 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details35 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection35 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription35 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection35[];
  }

  export interface DateTimeStamp69 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type53 {
    value: string;
  }

  export interface Privacy43 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email43 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type53;
    Privacy: Privacy43;
  }

  export interface Dimensions36 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File35 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation35 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image35 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier42;
    ImageRef: string;
    URL: string;
    Details: Details35;
    MultimediaDescription: MultimediaDescription35[];
    DateTimeStamp: DateTimeStamp69;
    Email: Email43;
    Dimensions: Dimensions36;
    File: File35;
    Geolocation: Geolocation35;
  }

  export interface DateTimeStamp70 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description34 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image35[];
    DateTimeStamp: DateTimeStamp70;
  }

  export interface Recreation {
    '@type': string;
    name: string;
    sort: number;
    yearReplaced: string;
    language: string;
    includedInd: boolean;
    featuredInd: boolean;
    Proximity: Proximity15;
    ID: ID;
    RecreationService: RecreationService;
    ContactInformation: ContactInformation8[];
    OperationSchedule: OperationSchedule9[];
    ReferencePoint: ReferencePoint3[];
    MultimediaCollection: MultimediaCollection23;
    RecreationFeature: RecreationFeature[];
    Description: Description34;
  }

  export interface SegmentCategory2 {
    value: string;
  }

  export interface BasicPropertyInfo2 {
    '@type': string;
    code: string;
    name: string;
    chainCode: string;
    brandCode: string;
    cityCode: string;
  }

  export interface PersonName9 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation9 {
    value: string;
  }

  export interface BldgRoom17 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number17 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv17 {
    value: string;
    name: string;
  }

  export interface Country17 {
    value: string;
    name: string;
  }

  export interface Address17 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom17[];
    Number: Number17;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv17;
    Country: Country17;
    PostalCode: string;
  }

  export interface Telephone9 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type54 {
    value: string;
  }

  export interface Privacy44 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email44 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type54;
    Privacy: Privacy44;
  }

  export interface URL9 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName10 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation9 {
    '@type': string;
    PersonName: PersonName9[];
    ContactLocation: ContactLocation9;
    Address: Address17[];
    Telephone: Telephone9[];
    Email: Email44;
    URL: URL9;
    CompanyName: CompanyName10;
  }

  export interface Code5 {
    value: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface Type55 {
    value: string;
  }

  export interface BldgRoom18 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number18 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv18 {
    value: string;
    name: string;
  }

  export interface Country18 {
    value: string;
    name: string;
  }

  export interface Address18 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom18[];
    Number: Number18;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv18;
    Country: Country18;
    PostalCode: string;
  }

  export interface Position5 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Location4 {
    '@type': string;
    Address: Address18;
    Position: Position5;
  }

  export interface ReferencePoint4 {
    '@type': string;
    name: string;
    Code: Code5;
    Type: Type55;
    Location: Location4;
  }

  export interface OtherHotel {
    '@type': string;
    competitorInd: boolean;
    SegmentCategory: SegmentCategory2;
    BasicPropertyInfo: BasicPropertyInfo2;
    ContactInformation: ContactInformation9[];
    ReferencePoint: ReferencePoint4[];
  }

  export interface AreaInformation {
    '@type': string;
    ReferencePoint: ReferencePoint[];
    Attraction: Attraction[];
    Recreation: Recreation[];
    OtherHotel: OtherHotel[];
  }

  export interface BasicPropertyInfo3 {
    '@type': string;
    code: string;
    name: string;
    chainCode: string;
    brandCode: string;
    cityCode: string;
  }

  export interface CompanyName11 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface DistributionSystem {
    '@type': string;
    BasicPropertyInfo: BasicPropertyInfo3;
    CompanyName: CompanyName11;
  }

  export interface URL10 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface BasicPropertyInfo4 {
    '@type': string;
    code: string;
    name: string;
    chainCode: string;
    brandCode: string;
    cityCode: string;
  }

  export interface Brand {
    '@type': string;
    URL: URL10;
    BasicPropertyInfo: BasicPropertyInfo4;
    Marketing: string;
  }

  export interface TravelSector {
    value: string;
  }

  export interface Identifier43 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details36 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection36 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription36 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection36[];
  }

  export interface DateTimeStamp71 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type56 {
    value: string;
  }

  export interface Privacy45 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email45 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type56;
    Privacy: Privacy45;
  }

  export interface Dimensions37 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File36 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation36 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image36 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier43;
    ImageRef: string;
    URL: string;
    Details: Details36;
    MultimediaDescription: MultimediaDescription36[];
    DateTimeStamp: DateTimeStamp71;
    Email: Email45;
    Dimensions: Dimensions37;
    File: File36;
    Geolocation: Geolocation36;
  }

  export interface DateTimeStamp72 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description35 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image36[];
    DateTimeStamp: DateTimeStamp72;
  }

  export interface Identifier44 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details37 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection37 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription37 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection37[];
  }

  export interface DateTimeStamp73 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type57 {
    value: string;
  }

  export interface Privacy46 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email46 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type57;
    Privacy: Privacy46;
  }

  export interface Dimensions38 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File37 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation37 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image37 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier44;
    ImageRef: string;
    URL: string;
    Details: Details37;
    MultimediaDescription: MultimediaDescription37[];
    DateTimeStamp: DateTimeStamp73;
    Email: Email46;
    Dimensions: Dimensions38;
    File: File37;
    Geolocation: Geolocation37;
  }

  export interface DateTimeStamp74 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Restriction {
    '@type': string;
    name: string;
    number: number;
    Restriction: any[];
    Image: Image37[];
    DateTimeStamp: DateTimeStamp74;
  }

  export interface TimeSpan16 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows16 {
    '@type': string;
    TimeSpan: TimeSpan16;
  }

  export interface Text2 {
    value: string;
    language: string;
    textFormat: string;
  }

  export interface Identifier45 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details38 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection38 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription38 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection38[];
  }

  export interface DateTimeStamp75 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type58 {
    value: string;
  }

  export interface Privacy47 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email47 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type58;
    Privacy: Privacy47;
  }

  export interface Dimensions39 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File38 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation38 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image38 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier45;
    ImageRef: string;
    URL: string;
    Details: Details38;
    MultimediaDescription: MultimediaDescription38[];
    DateTimeStamp: DateTimeStamp75;
    Email: Email47;
    Dimensions: Dimensions39;
    File: File38;
    Geolocation: Geolocation38;
  }

  export interface ParagraphListItem2 {
    value?: any;
    listItem: number;
    text2: string;
    language: string;
    textFormat: string;
  }

  export interface DateTimeStamp76 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface TextParagraph2 {
    '@type': string;
    name: string;
    number: number;
    Text: Text2[];
    Image: Image38[];
    URL: string[];
    ParagraphListItem: ParagraphListItem2[];
    DateTimeStamp: DateTimeStamp76;
  }

  export interface BlackoutDate {
    '@type': string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows16;
    TextParagraph: TextParagraph2;
  }

  export interface LoyaltyProgramInformation {
    '@type': string;
    programName: string;
    secondaryName: string;
    affiliateProgramName: string;
    hotelLevel: string;
    programCode: string;
    primaryProgramInd: boolean;
    TravelSector: TravelSector;
    Description: Description35;
    Restriction: Restriction;
    BlackoutDates: BlackoutDate[];
  }

  export interface Award2 {
    value: string;
    provider: string;
    description: string;
    ratingSymbol: string;
    rating: string;
    date: string;
    officialAppointmentInd: boolean;
  }

  export interface PersonName10 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation10 {
    value: string;
  }

  export interface BldgRoom19 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number19 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv19 {
    value: string;
    name: string;
  }

  export interface Country19 {
    value: string;
    name: string;
  }

  export interface Address19 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom19[];
    Number: Number19;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv19;
    Country: Country19;
    PostalCode: string;
  }

  export interface Telephone10 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type59 {
    value: string;
  }

  export interface Privacy48 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email48 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type59;
    Privacy: Privacy48;
  }

  export interface URL11 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName12 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation10 {
    '@type': string;
    PersonName: PersonName10[];
    ContactLocation: ContactLocation10;
    Address: Address19[];
    Telephone: Telephone10[];
    Email: Email48;
    URL: URL11;
    CompanyName: CompanyName12;
  }

  export interface Identifier46 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details39 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection39 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription39 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection39[];
  }

  export interface DateTimeStamp77 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type60 {
    value: string;
  }

  export interface Privacy49 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email49 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type60;
    Privacy: Privacy49;
  }

  export interface Dimensions40 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File39 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation39 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image39 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier46;
    ImageRef: string;
    URL: string;
    Details: Details39;
    MultimediaDescription: MultimediaDescription39[];
    DateTimeStamp: DateTimeStamp77;
    Email: Email49;
    Dimensions: Dimensions40;
    File: File39;
    Geolocation: Geolocation39;
  }

  export interface DateTimeStamp78 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description36 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image39[];
    DateTimeStamp: DateTimeStamp78;
  }

  export interface PartnerInfo {
    '@type': string;
    ContactInformation: ContactInformation10[];
    Description: Description36;
  }

  export interface Identifier47 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details40 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection40 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription40 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection40[];
  }

  export interface DateTimeStamp79 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type61 {
    value: string;
  }

  export interface Privacy50 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email50 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type61;
    Privacy: Privacy50;
  }

  export interface Dimensions41 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File40 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation40 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image40 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier47;
    ImageRef: string;
    URL: string;
    Details: Details40;
    MultimediaDescription: MultimediaDescription40[];
    DateTimeStamp: DateTimeStamp79;
    Email: Email50;
    Dimensions: Dimensions41;
    File: File40;
    Geolocation: Geolocation40;
  }

  export interface DateTimeStamp80 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description37 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image40[];
    DateTimeStamp: DateTimeStamp80;
  }

  export interface AffiliationInfo {
    '@type': string;
    DistributionSystem: DistributionSystem[];
    Brand: Brand[];
    LoyaltyProgramInformation: LoyaltyProgramInformation[];
    Award: Award2[];
    PartnerInfo: PartnerInfo[];
    Description: Description37[];
  }

  export interface Category24 {
    value: string;
  }

  export interface AdditionalDetailType24 {
    value: string;
  }

  export interface InfoType24 {
    value: string;
  }

  export interface Multimedia24 {
    '@type': string;
    objID: string;
    lastUpdated: Date;
    version: string;
    language: string;
    caption: string;
    Category: Category24;
    AdditionalDetailType: AdditionalDetailType24;
    InfoType: InfoType24;
  }

  export interface MultimediaCollection24 {
    '@type': string;
    lastUpdated: Date;
    Multimedia: Multimedia24[];
  }

  export interface PersonName11 {
    '@type': string;
    Prefix: string[];
    Given: string[];
    Middle: string[];
    Surname: string;
  }

  export interface ContactLocation11 {
    value: string;
  }

  export interface BldgRoom20 {
    value: string;
    buldingInd: boolean;
  }

  export interface Number20 {
    value: string;
    streetNmbrSuffix: string;
    streetDirection: string;
    ruralRouteNmbr: string;
    pO_Box: string;
  }

  export interface StateProv20 {
    value: string;
    name: string;
  }

  export interface Country20 {
    value: string;
    name: string;
  }

  export interface Address20 {
    '@type': string;
    role: string;
    AddressLine: string[];
    BldgRoom: BldgRoom20[];
    Number: Number20;
    Street: string;
    City: string;
    County: string;
    StateProv: StateProv20;
    Country: Country20;
    PostalCode: string;
  }

  export interface Telephone11 {
    '@type': string;
    role: string;
    countryAccessCode: string;
    areaCityCode: string;
    phoneNumber: string;
    extension: string;
    id: string;
  }

  export interface Type62 {
    value: string;
  }

  export interface Privacy51 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email51 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type62;
    Privacy: Privacy51;
  }

  export interface URL12 {
    value: string;
    type: string;
    defaultInd: boolean;
  }

  export interface CompanyName13 {
    value: string;
    division: string;
    department: string;
    shortName: string;
    code: string;
    codeContext: string;
    description: string;
    quantity: number;
    listURI: string;
  }

  export interface ContactInformation11 {
    '@type': string;
    PersonName: PersonName11[];
    ContactLocation: ContactLocation11;
    Address: Address20[];
    Telephone: Telephone11[];
    Email: Email51;
    URL: URL12;
    CompanyName: CompanyName13;
  }

  export interface GDSCode {
    '@type': string;
    gDS_PropertyCode: string;
    gDS_Name: string;
    chainCode: string;
  }

  export interface GDSCodes {
    '@type': string;
    GDS_Code: GDSCode[];
  }

  export interface HotelStatus {
    value: string;
  }

  export interface GDSStatu {
    '@type': string;
    code: string;
    name: string;
    HotelStatus: HotelStatus;
  }

  export interface GDSInformation {
    '@type': string;
    masterChainCode: string;
    GDS_Codes: GDSCodes;
    GDS_Status: GDSStatu[];
  }

  export interface DateEffectiveExpire {
    value?: any;
    effective: string;
    expire: string;
    expireDateExclusiveInd: boolean;
  }

  export interface EffectivePeriod {
    '@type': string;
    DateEffectiveExpire: DateEffectiveExpire;
  }

  export interface TimeSpan17 {
    value?: any;
    start: Date;
    end: Date;
  }

  export interface DateTimeSpanWindows17 {
    '@type': string;
    TimeSpan: TimeSpan17;
  }

  export interface Text3 {
    value: string;
    language: string;
    textFormat: string;
  }

  export interface Identifier48 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details41 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection41 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription41 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection41[];
  }

  export interface DateTimeStamp81 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type63 {
    value: string;
  }

  export interface Privacy52 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email52 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type63;
    Privacy: Privacy52;
  }

  export interface Dimensions42 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File41 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation41 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image41 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier48;
    ImageRef: string;
    URL: string;
    Details: Details41;
    MultimediaDescription: MultimediaDescription41[];
    DateTimeStamp: DateTimeStamp81;
    Email: Email52;
    Dimensions: Dimensions42;
    File: File41;
    Geolocation: Geolocation41;
  }

  export interface ParagraphListItem3 {
    value?: any;
    listItem: number;
    text2: string;
    language: string;
    textFormat: string;
  }

  export interface DateTimeStamp82 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface TextParagraph3 {
    '@type': string;
    name: string;
    number: number;
    Text: Text3[];
    Image: Image41[];
    URL: string[];
    ParagraphListItem: ParagraphListItem3[];
    DateTimeStamp: DateTimeStamp82;
  }

  export interface BlackoutDate2 {
    '@type': string;
    name: string;
    DateTimeSpanWindows: DateTimeSpanWindows17;
    TextParagraph: TextParagraph3;
  }

  export interface RoomBlockInformation {
    '@type': string;
    totalRoomQuantity: number;
    cancelPeriodDays: number;
    availableInd: boolean;
    BlackoutDates: BlackoutDate2[];
  }

  export interface CarbonFootprint {
    '@type': string;
    nonCarbonMeasurement: string;
    meetingEvent: number;
    roomNight: number;
    weatherNormalized: number;
    nonCarbonImpactInd: boolean;
    CarbonUOM: string;
  }

  export interface Identifier49 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details42 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection42 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription42 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection42[];
  }

  export interface DateTimeStamp83 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type64 {
    value: string;
  }

  export interface Privacy53 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email53 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type64;
    Privacy: Privacy53;
  }

  export interface Dimensions43 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File42 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation42 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image42 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier49;
    ImageRef: string;
    URL: string;
    Details: Details42;
    MultimediaDescription: MultimediaDescription42[];
    DateTimeStamp: DateTimeStamp83;
    Email: Email53;
    Dimensions: Dimensions43;
    File: File42;
    Geolocation: Geolocation42;
  }

  export interface DateTimeStamp84 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description38 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image42[];
    DateTimeStamp: DateTimeStamp84;
  }

  export interface Water {
    '@type': string;
    perRoomNightUsage: number;
    wasteDiverisionPercentage: number;
    grayWaterInd: boolean;
    waterProgramInd: boolean;
    PerRoomDayUsage: number;
    WaterUOM: string;
    Description: Description38;
  }

  export interface PowerType {
    value: string;
  }

  export interface PowerUsage {
    '@type': string;
    quantity: number;
    PowerType: PowerType;
    PowerUOM: string;
  }

  export interface Identifier50 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details43 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection43 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription43 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection43[];
  }

  export interface DateTimeStamp85 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type65 {
    value: string;
  }

  export interface Privacy54 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email54 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type65;
    Privacy: Privacy54;
  }

  export interface Dimensions44 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File43 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation43 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image43 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier50;
    ImageRef: string;
    URL: string;
    Details: Details43;
    MultimediaDescription: MultimediaDescription43[];
    DateTimeStamp: DateTimeStamp85;
    Email: Email54;
    Dimensions: Dimensions44;
    File: File43;
    Geolocation: Geolocation43;
  }

  export interface DateTimeStamp86 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description39 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image43[];
    DateTimeStamp: DateTimeStamp86;
  }

  export interface Energy {
    '@type': string;
    energyGenerated: number;
    efficientAppliancesInd: boolean;
    efficientLightingInd: boolean;
    heatPowerCombInd: boolean;
    heatPumpInd: boolean;
    powerSavingPolicyInd: boolean;
    solarInd: boolean;
    tempControlInd: boolean;
    windTurbineInd: boolean;
    EnergyStarRating: string;
    PowerUsage: PowerUsage;
    Description: Description39;
  }

  export interface RecycledProduct {
    value: string;
  }

  export interface RecycleLocation {
    value: string;
  }

  export interface Identifier51 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details44 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection44 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription44 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection44[];
  }

  export interface DateTimeStamp87 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type66 {
    value: string;
  }

  export interface Privacy55 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email55 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type66;
    Privacy: Privacy55;
  }

  export interface Dimensions45 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File44 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation44 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image44 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier51;
    ImageRef: string;
    URL: string;
    Details: Details44;
    MultimediaDescription: MultimediaDescription44[];
    DateTimeStamp: DateTimeStamp87;
    Email: Email55;
    Dimensions: Dimensions45;
    File: File44;
    Geolocation: Geolocation44;
  }

  export interface DateTimeStamp88 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description40 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image44[];
    DateTimeStamp: DateTimeStamp88;
  }

  export interface Recycling {
    '@type': string;
    activeProgramInd: boolean;
    ecologicalDishwareInd: boolean;
    RecycledProducts: RecycledProduct[];
    RecycleLocations: RecycleLocation[];
    Description: Description40[];
  }

  export interface Identifier52 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details45 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface FormattedTextSubSection45 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: any[];
  }

  export interface MultimediaDescription45 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection45[];
  }

  export interface DateTimeStamp89 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type67 {
    value: string;
  }

  export interface Privacy56 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email56 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type67;
    Privacy: Privacy56;
  }

  export interface Dimensions46 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File45 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation45 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image45 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier52;
    ImageRef: string;
    URL: string;
    Details: Details45;
    MultimediaDescription: MultimediaDescription45[];
    DateTimeStamp: DateTimeStamp89;
    Email: Email56;
    Dimensions: Dimensions46;
    File: File45;
    Geolocation: Geolocation45;
  }

  export interface DateTimeStamp90 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Description41 {
    '@type': string;
    name: string;
    number: number;
    Description: any[];
    Image: Image45[];
    DateTimeStamp: DateTimeStamp90;
  }

  export interface Text4 {
    value: string;
    language: string;
    textFormat: string;
  }

  export interface Identifier53 {
    value: string;
    url: string;
    system: string;
    organization: string;
  }

  export interface Details46 {
    value: string;
    author: string;
    copyrightNotice: string;
    copyrightOwner: string;
    copyrightStart: Date;
    copyrightEnd: Date;
    effectiveStart: Date;
    effectiveEnd: Date;
    applicableStart: string;
    applicableEnd: string;
  }

  export interface Text5 {
    value: string;
    language: string;
    textFormat: string;
  }

  export interface ParagraphListItem4 {
    value?: any;
    listItem: number;
    text2: string;
    language: string;
    textFormat: string;
  }

  export interface DateTimeStamp91 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface TextParagraph4 {
    '@type': string;
    name: string;
    number: number;
    Text: Text5[];
    URL: string[];
    ParagraphListItem: ParagraphListItem4[];
    DateTimeStamp: DateTimeStamp91;
  }

  export interface FormattedTextSubSection46 {
    '@type': string;
    subTitle: string;
    subCode: string;
    subSectionNumber: number;
    TextParagraph: TextParagraph4[];
  }

  export interface MultimediaDescription46 {
    '@type': string;
    title: string;
    language: string;
    caption: string;
    FormattedTextSubSection: FormattedTextSubSection46[];
  }

  export interface DateTimeStamp92 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Type68 {
    value: string;
  }

  export interface Privacy57 {
    value?: any;
    shareMarketInd: string;
    shareSyncInd: string;
    optInStatus: string;
    optInDate: Date;
    optOutDate: Date;
  }

  export interface Email57 {
    '@type': string;
    remark: string;
    textFormat: string;
    validInd: boolean;
    defaultInd: boolean;
    Address: string;
    Type: Type68;
    Privacy: Privacy57;
  }

  export interface Dimensions47 {
    value?: any;
    unitOfMeasureCode: string;
    width: number;
    height: number;
    area: number;
    length: number;
  }

  export interface File46 {
    value?: any;
    name: string;
    size: number;
    originalName: string;
  }

  export interface Geolocation46 {
    value?: any;
    latitude: string;
    longitude: string;
    altitude: string;
    altitudeUnitOfMeasure_Enum: string;
    mapURL: string;
    formatURL: string;
  }

  export interface Image46 {
    '@type': string;
    objID: string;
    version: string;
    format: string;
    dimensionCategory: string;
    sort: number;
    resolution: number;
    colorSpace: string;
    originalIndicatorInd: boolean;
    Identifier: Identifier53;
    ImageRef: string;
    URL: string;
    Details: Details46;
    MultimediaDescription: MultimediaDescription46[];
    DateTimeStamp: DateTimeStamp92;
    Email: Email57;
    Dimensions: Dimensions47;
    File: File46;
    Geolocation: Geolocation46;
  }

  export interface DateTimeStamp93 {
    value: Date;
    create: Date;
    creatorID: string;
    lastModify: Date;
    lastModifierID: string;
    purge: string;
  }

  export interface Certification {
    '@type': string;
    name: string;
    number: number;
    Text: Text4[];
    Image: Image46[];
    URL: string[];
    DateTimeStamp: DateTimeStamp93;
  }

  export interface EnvironmentalImpact {
    '@type': string;
    certificationAvailableInd: boolean;
    chemicalAllergiesInd: boolean;
    environmentalCleanersInd: boolean;
    linenReuseInd: boolean;
    procurementPolicyInd: boolean;
    CarbonFootprint: CarbonFootprint;
    Water: Water;
    Energy: Energy;
    Recycling: Recycling;
    Description: Description41;
    Certification: Certification;
  }

  export interface HotelDescriptiveContent {
    '@type': string;
    objID: string;
    language: string;
    DescriptiveContentRef: string;
    Identifier: Identifier2;
    CurrencyCode: CurrencyCode;
    DistanceUnitOfMeasure: string;
    AreaUnitOfMeasure: string;
    WeightUnitOfMeasure: string;
    TimeZone: string;
    DateTimeSpanWindows: DateTimeSpanWindows;
    DestinationSystemCode: string[];
    WeatherInfo: WeatherInfo[];
    BasicPropertyInfo: BasicPropertyInfo;
    HotelPropertyInfo: HotelPropertyInfo;
    FacilityInfo: FacilityInfo;
    HotelPolicies: HotelPolicies;
    AreaInformation: AreaInformation;
    AffiliationInfo: AffiliationInfo;
    MultimediaCollection: MultimediaCollection24;
    ContactInformation: ContactInformation11[];
    GDS_Information: GDSInformation;
    EffectivePeriod: EffectivePeriod[];
    RoomBlockInformation: RoomBlockInformation;
    EnvironmentalImpact: EnvironmentalImpact;
  }

  export interface HospitalityDescriptiveContentNotifRQ {
    version: number;
    timeStamp: Date;
    PayloadStdAttributes: PayloadStdAttributes;
    POS: POS;
    HotelDescriptiveContent: HotelDescriptiveContent[];
  }

  export interface RootObject {
    HospitalityDescriptiveContentNotifRQ: HospitalityDescriptiveContentNotifRQ;
  }
}
