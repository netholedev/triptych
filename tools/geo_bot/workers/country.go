package workers

import (
	"encoding/csv"
	"encoding/json"
	"io"
	"os"
	"strings"

	"github.com/jszwec/csvutil"
	"github.com/netholedev/triptych/pkg/domain"
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

	userHeader, _ = csvutil.Header(domain.GeoCountry{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var countries []domain.GeoCountry

	for {
		var row domain.GeoCountry

		if err := dec.Decode(&row); err == io.EOF {
			break
		}

		if len(row.Iso) != 2 || strings.Contains(row.Iso, "#") {
			continue
		}

		// if row.Languages != "" {
		// 	row.LanguagesJson = strings.Split(row.Languages, ",")
		// 	row.Languages = ""
		// }

		// if row.Neighbours != "" {
		// 	row.NeighboursJson = strings.Split(row.Neighbours, ",")
		// 	row.Neighbours = ""
		// }

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
