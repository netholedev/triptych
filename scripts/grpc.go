package main

import (
	"context"
	"fmt"

	"github.com/netholedev/triptych/internal/auth"
	"github.com/netholedev/triptych/pkg/utils"
	"google.golang.org/grpc"
)

const address = "localhost:8000"

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	utils.Check(err)

	authClient := auth.NewAuthServiceClient(conn)

	repl2, err := authClient.Register(context.Background(), &auth.RegisterRequest{
		FirstName: "Burak",
		LastName:  "OZ",
		Email:     "buroz@nethole.dev",
		Password:  "Espesp1315.*.",
	})
	utils.Check(err)

	fmt.Println(repl2.GetErrors())
	fmt.Println(repl2.GetSucsess())
}
