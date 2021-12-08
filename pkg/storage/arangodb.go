package storage

import (
	"context"
	"fmt"

	driver "github.com/arangodb/go-driver"
	"github.com/arangodb/go-driver/http"
	"github.com/netholedev/triptych/pkg/config"
)

func ConnectArangoDb(ctx context.Context, conf *config.DatabaseConfig) (driver.Database, error) {
	dbUrl := fmt.Sprintf("http://%v:%d", conf.Host, conf.Port)

	conn, err := http.NewConnection(http.ConnectionConfig{
		Endpoints: []string{dbUrl},
	})
	if err != nil {
		return nil, err
	}

	client, err := driver.NewClient(driver.ClientConfig{
		Connection:     conn,
		Authentication: driver.BasicAuthentication(conf.User, conf.Password),
	})
	if err != nil {
		return nil, err
	}

	isExists, err := client.DatabaseExists(ctx, conf.Name)
	if err != nil {
		return nil, err
	}

	if isExists {
		return client.Database(ctx, conf.Name)
	} else {
		return client.CreateDatabase(ctx, conf.Name, nil)
	}
}

func CollectionArangoDb(collectionName string, ctx context.Context, db driver.Database) (driver.Collection, error) {
	var col driver.Collection

	colExists, err := db.CollectionExists(ctx, collectionName)
	if err != nil {
		return nil, err
	}

	if colExists {
		col, err = db.Collection(ctx, collectionName)
		if err != nil {
			return nil, err
		}
	} else {
		col, err = db.CreateCollection(ctx, collectionName, nil)
		if err != nil {
			return nil, err
		}
	}

	return col, err
}
