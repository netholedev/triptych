package main

import (
	"fmt"
	"log"
	"os"

	"github.com/manifoldco/promptui"
	"github.com/netholedev/triptych/pkg/utils"
	"github.com/netholedev/triptych/tools/geo_bot/workers"
)

var namesUrl = "https://download.geonames.org/export/dump"
var alternatenamesUrl = "https://download.geonames.org/export/dump/alternatenames"
var countriesUrl = "https://download.geonames.org/export/dump/countryInfo.txt"
var languagesUrl = "https://download.geonames.org/export/dump/iso-languagecodes.txt"
var timeZonesUrl = "https://download.geonames.org/export/dump/timeZones.txt"
var hierarchyUrl = "https://download.geonames.org/export/dump/hierarchy.zip"

func work(cb func()) {
	log.Println("Started...")
	cb()
	log.Println("Finished!")
}

func main() {
	err := os.MkdirAll(".data/geonames", 0777)
	utils.Check(err)

	prompt := promptui.Select{
		Label: "Select One",
		Items: []string{
			"Names",
			"Alternate Names",
			"Countries",
			"Languages",
			"Time Zones",
			"Hierarchy",
		},
	}

	i, _, err := prompt.Run()
	utils.Check(err)

	switch i {
	case 0:
		work(func() {
			workers.FetchNames(".data/geonames/names", namesUrl, false)
		})
	case 1:
		work(func() {
			workers.FetchNames(".data/geonames/alternatenames", alternatenamesUrl, true)
		})
	case 2:
		work(func() {
			workers.FetchCountries(countriesUrl)
		})
	case 3:
		work(func() {
			workers.FetchLanguages(languagesUrl)
		})
	case 4:
		work(func() {
			workers.FetchTimeZones(timeZonesUrl)
		})
	case 5:
		work(func() {
			workers.FetchHierarchy(hierarchyUrl)
		})
	default:
		fmt.Println("Napıyon olum?")
	}

	if _, err := os.Stat(".cache"); os.IsNotExist(err) {
		os.Remove(".cache")
	}
	utils.Check(err)
}

/*
func main() {
	client := geonames.Client{}

	result, err := client.CountryInfo()
	if err != nil {
		log.Fatalln(err)
	}

	b, _ := json.Marshal(result)

	os.WriteFile("naber.json", b, 0644)
}
*/
