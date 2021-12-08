package workers

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/jszwec/csvutil"
	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/utils"
)

type link struct {
	countryName string
	link        string
}

func getLinks(page string) []link {
	var list []link

	res, err := http.Get(page)
	utils.Check(err)
	defer res.Body.Close()

	if res.StatusCode != 200 {
		utils.Check(err)
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	utils.Check(err)

	doc.Find("a").Each(func(i int, s *goquery.Selection) {
		// For each item found, get the title
		href, exists := s.Attr("href")

		countryName := strings.ReplaceAll(href, ".zip", "")

		if exists &&
			strings.Index(href, ".zip") > 0 &&
			len(countryName) <= 2 {

			downloadLink := fmt.Sprintf("%v/%v", page, href)

			list = append(list, link{
				countryName: countryName,
				link:        downloadLink,
			})
		}
	})

	return list
}

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
		}
	}

	return js
}

func FetchNames(exportPath string, baseUrl string, alternateMode bool) {
	err := os.MkdirAll(".cache/zips", 0777)
	utils.Check(err)

	err = os.MkdirAll(exportPath, 0777)
	utils.Check(err)

	links := getLinks(baseUrl)

	for _, l := range links {
		log.Println("[FETCHING] Current Country:", l.countryName)

		zipPath := fmt.Sprintf(".cache/zips/%v.zip", l.countryName)
		txtPath := fmt.Sprintf("%v/%v.txt", exportPath, l.countryName)
		jsonPath := fmt.Sprintf("%v/%v.json", exportPath, l.countryName)

		err := utils.DownloadFile(zipPath, l.link)
		utils.Check(err)

		err = utils.Unzip(zipPath, exportPath)
		utils.Check(err)

		err = os.Remove(zipPath)
		utils.Check(err)

		// Parse
		txtFile, err := os.Open(txtPath)
		utils.Check(err)

		jsonBuff := parseIntoJson(txtFile, alternateMode)

		f, err := os.Create(jsonPath)
		utils.Check(err)

		_, err = f.Write(jsonBuff)
		utils.Check(err)

		err = os.Remove(txtPath)
		utils.Check(err)
	}

	err = os.Remove(fmt.Sprintf("%v/%v", exportPath, "readme.txt"))
	utils.Check(err)
}
