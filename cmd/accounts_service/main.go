package main

import (
	"context"
	"net"

	"github.com/netholedev/triptych/cmd/accounts_service/handlers"
	"github.com/netholedev/triptych/internal/users"
	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/storage"
	"github.com/netholedev/triptych/pkg/utils"
	"google.golang.org/grpc"
)

func main() {
	conf, err := config.NewConfig()
	utils.Check(err)

	// TODO
	ctx := context.Background()

	var arangoClient = storage.NewArangoClient(&conf.Db)

	err = arangoClient.Connect(ctx)
	utils.Check(err)

	usersRepository, err := users.NewUsersRepository(ctx, arangoClient)
	utils.Check(err)

	usersService := users.NewUsersService(usersRepository)

	usersHandlerImpl := new(handlers.UsersHandler)
	err = usersHandlerImpl.Inject(usersService, &conf.Amqp)
	utils.Check(err)

	tcpServer, err := net.Listen("tcp", ":8000")
	utils.Check(err)

	grpcImpl := grpc.NewServer(
	// grpc.UnaryInterceptor(usersServiceImpl.AuthorizationInterceptor()),
	)

	users.RegisterUsersServiceServer(grpcImpl, usersHandlerImpl)
	// hello_pb.RegisterHelloServiceServer(grpcImpl, helloHandlerImpl)

	err = grpcImpl.Serve(tcpServer)
	utils.Check(err)
}
