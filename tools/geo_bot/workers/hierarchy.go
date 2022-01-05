package workers

import (
	"encoding/csv"
	"encoding/json"
	"io"
	"os"

	"github.com/jszwec/csvutil"
	"github.com/netholedev/triptych/pkg/domain"
	"github.com/netholedev/triptych/pkg/utils"
)

func FetchHierarchy(baseUrl string) {
	err := os.MkdirAll(".cache/zips", 0777)
	utils.Check(err)

	zipPath := ".cache/zips/hierarchy.zip"
	txtPath := ".data/geonames/hierarchy.txt"
	jsonPath := ".data/geonames/hierarchy.json"

	err = utils.DownloadFile(zipPath, baseUrl)
	utils.Check(err)

	err = utils.Unzip(zipPath, ".data/geonames")
	utils.Check(err)

	err = os.Remove(zipPath)
	utils.Check(err)

	// Parse
	txtFile, err := os.Open(txtPath)
	utils.Check(err)

	reader := csv.NewReader(txtFile)
	reader.Comma = '\t'

	var userHeader []string

	userHeader, _ = csvutil.Header(domain.GeoIsoHierarchy{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var hierarchies []domain.GeoIsoHierarchy

	for {
		var row domain.GeoIsoHierarchy

		if err := dec.Decode(&row); err == io.EOF {
			break
		}

		hierarchies = append(hierarchies, row)
	}

	jsonBuff, err := json.Marshal(hierarchies)
	utils.Check(err)

	f, err := os.Create(jsonPath)
	utils.Check(err)

	_, err = f.Write(jsonBuff)
	utils.Check(err)

	err = os.Remove(txtPath)
	utils.Check(err)

	err = os.Remove(".data/geonames/readme.txt")
	utils.Check(err)
}
