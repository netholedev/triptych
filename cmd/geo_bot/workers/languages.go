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

func FetchLanguages(baseUrl string) {
	txtPath := ".data/geonames/languages.txt"
	jsonPath := ".data/geonames/languages.json"

	err := utils.DownloadFile(txtPath, baseUrl)
	utils.Check(err)

	txtFile, err := os.Open(txtPath)
	utils.Check(err)

	reader := csv.NewReader(txtFile)
	reader.Comma = '\t'

	var userHeader []string

	userHeader, _ = csvutil.Header(models.GeoIsoLanguage{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var languages []models.GeoIsoLanguage

	for {
		var row models.GeoIsoLanguage

		if err := dec.Decode(&row); err == io.EOF {
			break
		}

		languages = append(languages, row)
	}

	jsonBuff, err := json.Marshal(languages)
	utils.Check(err)

	f, err := os.Create(jsonPath)
	utils.Check(err)

	_, err = f.Write(jsonBuff)
	utils.Check(err)

	err = os.Remove(txtPath)
	utils.Check(err)
}
