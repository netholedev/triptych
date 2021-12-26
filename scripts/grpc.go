package main

import (
	"context"
	"fmt"

	"github.com/netholedev/triptych/internal/common"
	"github.com/netholedev/triptych/internal/users"
	"github.com/netholedev/triptych/pkg/utils"
	"google.golang.org/grpc"
)

const address = "localhost:8000"

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	utils.Check(err)

	authClient := users.NewUsersServiceClient(conn)

	/*
		// REGISTER
			repl2, err := authClient.Register(context.Background(), &users.RegisterRequest{
				FirstName: "Burak",
				LastName:  "OZ",
				Email:     "buroz@nethole.dev",
				Password:  "hebelehübeleşifreultra",
			})
	*/

	/*
		// CONFIRM
		repl, err := authClient.ConfirmRegistration(context.Background(), &users.ConfirmRegistrationRequest{
			Token: "55e911c0-7273-4ec9-9be1-b1d625a5974e",
		})
	*/

	/*
		// LOGIN
		repl, err := authClient.Login(context.Background(), &users.LoginRequest{
			Email:    "buroz@nethole.dev",
			Password: "hebelehübeleşifreultra",
		})
	*/

	// PROFILE
	repl, err := authClient.Profile(context.Background(), &common.Empty{})
	utils.Check(err)

	fmt.Println("SUCCESS", repl.GetSuccess())
	fmt.Println("RESULT", repl.GetResult())
	fmt.Println("ERRORS", repl.GetErrors())
}
