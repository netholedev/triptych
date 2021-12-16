package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/utils"
)

const URL = "https://www.tcmb.gov.tr/kurlar/today.xml"

func fetch(result *models.TcmbTodayResponse) {
	resp, err := http.Get(URL)
	utils.Check(err)

	body, err := ioutil.ReadAll(resp.Body)
	utils.Check(err)
	defer resp.Body.Close()

	err = xml.Unmarshal(body, result)
	utils.Check(err)
}

func job() {
	result := models.TcmbTodayResponse{}

	fetch(&result)

	for _, currency := range result.Currency {
		fmt.Println(currency.CurrencyCode)
	}
}

func main() {
	for range time.Tick(time.Hour * 24) {
		go job()
	}
}
