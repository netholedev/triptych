package workers

import (
	"encoding/csv"
	"encoding/json"
	"io"
	"os"

	"github.com/jszwec/csvutil"
	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/utils"
)

func FetchCountries(baseUrl string) {
	txtPath := ".data/geonames/countries.txt"
	jsonPath := ".data/geonames/countries.json"

	err := utils.DownloadFile(txtPath, baseUrl)
	utils.Check(err)

	txtFile, err := os.Open(txtPath)
	utils.Check(err)

	reader := csv.NewReader(txtFile)
	reader.Comma = '\t'

	var userHeader []string

	userHeader, _ = csvutil.Header(models.GeoCountry{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var countries []models.GeoCountry

	for {
		var row models.GeoCountry

		if err := dec.Decode(&row); err == io.EOF {
			break
		}

		countries = append(countries, row)
	}

	jsonBuff, err := json.Marshal(countries)
	utils.Check(err)

	f, err := os.Create(jsonPath)
	utils.Check(err)

	_, err = f.Write(jsonBuff)
	utils.Check(err)

	err = os.Remove(txtPath)
	utils.Check(err)
}
