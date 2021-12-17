package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/netholedev/triptych/internal/users"
	"google.golang.org/grpc"
)

func prettyprint(b []byte) {
	var out bytes.Buffer
	_ = json.Indent(&out, b, "", "  ")
	fmt.Println(out.String())
}

func main() {
	var conn *grpc.ClientConn
	conn, err := grpc.Dial(":8000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	client := users.NewUsersServiceClient(conn)

	response, err := client.Register(context.Background(), &users.RegisterRequest{
		FirstName: "Burak",
		LastName:  "Kaya",
		Email:     "buroz@nethole.dev",
		Password:  "Espesp1315.*.",
	})
	if err != nil {
		log.Fatalf("Error when calling: %s", err)
	}

	js, err := json.Marshal(response)
	if err != nil {
		log.Fatalf("Cannot parse JSON: %s", err)
	}

	prettyprint(js)
}
