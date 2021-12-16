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

func parseIntoJson(f *os.File, alternateMode bool) []byte {
	reader := csv.NewReader(f)
	reader.Comma = '\t'

	var userHeader []string

	if alternateMode {
		userHeader, _ = csvutil.Header(models.GeoAlternateName{}, "csv")
	} else {
		userHeader, _ = csvutil.Header(models.Geoname{}, "csv")
	}

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var js []byte

	if alternateMode {
		var names []models.GeoAlternateName

		for {
			var row models.GeoAlternateName

			if err := dec.Decode(&row); err == io.EOF {
				break
			}
			names = append(names, row)

			jsBuff, err := json.Marshal(names)
			utils.Check(err)

			js = jsBuff
		}
	} else {
		var names []models.Geoname

		for {
			var row models.Geoname

			if err := dec.Decode(&row); err == io.EOF {
				break
			}
			names = append(names, row)

			jsBuff, err := json.Marshal(names)
			utils.Check(err)

			js = jsBuff

			// log.Println("[PARSED]", row.Name)
		}
	}

	return js
}

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

	userHeader, _ = csvutil.Header(models.GeoIsoHierarchy{}, "csv")

	dec, _ := csvutil.NewDecoder(reader, userHeader...)

	var hierarchies []models.GeoIsoHierarchy

	for {
		var row models.GeoIsoHierarchy

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
