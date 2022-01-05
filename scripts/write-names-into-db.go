package main

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/storage"
	"github.com/netholedev/triptych/pkg/utils"
)

func main() {
	conf, err := config.NewConfig()
	utils.Check(err)

	// TODO
	ctx := context.Background()

	conf.Db.Name = "geonames"

	var arangoClient = storage.NewArangoClient(&conf.Db)

	err = arangoClient.Connect(ctx)
	utils.Check(err)

	col, _ := arangoClient.Collection(ctx, "names")

	var result []interface{}

	f, _ := os.ReadFile("./.data/geonames/names/TR.json")

	json.Unmarshal(f, &result)

	_, err = col.Database().Query(ctx, `
		FOR doc in @docs
			INSERT doc IN names
	`,
		map[string]interface{}{
			"docs": result,
		})

	if err != nil {
		log.Fatalln(err)
	}
}
