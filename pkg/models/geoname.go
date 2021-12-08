package models

import "time"

type Geoname struct {
	Id                    int       `csv:"geonameid" json:"geoname_id"`
	Name                  string    `csv:"name" json:"name"`
	AsciiName             string    `csv:"asciiname" json:"ascii_name"`
	AlternateNames        string    `csv:"alternatenames"`
	Latitude              string    `csv:"latitude" json:"latitude"`
	Longitude             string    `csv:"longitude" json:"longitude"`
	FeatureClass          string    `csv:"feature class" json:"feature_class"`
	FeatureCode           string    `csv:"feature code" json:"feature_code"`
	CountryCode           string    `csv:"country code" json:"country_code"`
	AlternateCountryCodes string    `csv:"cc2" json:"cc2,omitempty"`
	Admin1Code            string    `csv:"admin1 code" json:"admin1_code,omitempty"`
	Admin2Code            string    `csv:"admin2 code" json:"admin2_code,omitempty"`
	Admin3Code            string    `csv:"admin3 code" json:"admin3_code,omitempty"`
	Admin4Code            string    `csv:"admin4 code" json:"admin4_code,omitempty"`
	Population            int       `csv:"population" json:"population,omitempty"`
	Elevation             int       `csv:"elevation,omitempty" json:"elevation,omitempty"`
	DigitalElevationModel int       `csv:"dem,omitempty" json:"dem,omitempty"`
	Timezone              string    `csv:"timezone" json:"timezone"`
	ModificationDate      time.Time `csv:"modification date" json:"modification_date,omitempty"`

	// Custom Fields
	// Coordinates           []string  `json:"coordinates"`
	AlternateNamesSplited string `json:"alternate_names"`
}

type GeoAlternateName struct {
	Id              int    `csv:"alternateNameId" json:"alternate_name_id"`
	GeonameId       int    `csv:"geonameid" json:"geoname_id"`
	IsoLanguage     string `csv:"isolanguage" json:"iso_language,omitempty"`
	AlternateName   string `csv:"alternate name" json:"alternate_name"`
	IsPreferredName bool   `csv:"isPreferredName" json:"is_preferredName,omitempty"`
	IsShortName     bool   `csv:"IsShortName" json:"is_short_name,omitempty"`
	IsColloquial    bool   `csv:"isColloquial" json:"is_colloquial,omitempty"`
	IsHistoric      bool   `csv:"isHistoric" json:"is_historic,omitempty"`
	From            string `csv:"from" json:"from,omitempty"`
	To              string `csv:"to" json:"to,omitempty"`
}

type GeoCountry struct {
	Iso                string `csv:"ISO"`
	Iso3               string `csv:"ISO3"`
	IsoNumeric         string `csv:"ISO-Numeric"`
	Fips               string `csv:"fips"`
	Capital            string `csv:"Country Capital"`
	Area               int    `csv:"Area(in sq km)"`
	Population         string `csv:"Population"`
	Continent          string `csv:"Continent"`
	Tld                string `csv:"tld"`
	CurrencyCode       string `csv:"CurrencyCode"`
	CurrencyName       string `csv:"CurrencyName"`
	Phone              string `csv:"Phone"`
	PostalCodeFormat   string `csv:"Phone	Postal Code Format"`
	PostalCodeRegex    string `csv:"PostalCode Regex"`
	Languages          string `csv:"Languages"`
	Geonameid          string `csv:"geonameid"`
	Neighbours         string `csv:"neighbours"`
	EquivalentFipsCode string `csv:"EquivalentFipsCode"`
}
