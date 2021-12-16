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

func FetchTimeZones(baseUrl string) {
	txtPath := ".data/geonames/time-zones.txt"
	jsonPath := ".data/geonames/time-zones.json"

	err := utils.DownloadFile(txtPath, baseUrl)
	utils.Check(err)

	txtFile, err := os.Open(txtPath)
	utils.Check(err)

	reader := csv.NewReader(txtFile)
	reader.Comma = '\t'

	var userHeader []string

	userHeader, _ = csvutil.Header(models.GeoTimeZone{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var timeZones []models.GeoTimeZone

	for {
		var row models.GeoTimeZone

		if err := dec.Decode(&row); err == io.EOF {
			break
		}

		if row.CountryCode == "CountryCode" {
			continue
		}

		timeZones = append(timeZones, row)
	}

	jsonBuff, err := json.Marshal(timeZones)
	utils.Check(err)

	f, err := os.Create(jsonPath)
	utils.Check(err)

	_, err = f.Write(jsonBuff)
	utils.Check(err)

	err = os.Remove(txtPath)
	utils.Check(err)
}
