package main

import (
	"fmt"
	"log"
	"os"

	"github.com/manifoldco/promptui"
	"github.com/netholedev/triptych/cmd/geobot/workers"
	"github.com/netholedev/triptych/pkg/utils"
)

var namesUrl = "https://download.geonames.org/export/dump"
var alternatenamesUrl = "https://download.geonames.org/export/dump/alternatenames"
var countriesUrl = "https://download.geonames.org/export/dump/countryInfo.txt"

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
	default:
		fmt.Println("Napıyon olum?")
	}

	err = os.Remove(".cache")
	utils.Check(err)
}
