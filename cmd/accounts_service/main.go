package main

import (
	"context"
	"fmt"
	"net"

	"github.com/arangodb/go-driver"
	"github.com/netholedev/triptych/cmd/accounts_service/handlers"
	auth_pb "github.com/netholedev/triptych/internal/auth"
	"github.com/netholedev/triptych/internal/users"
	AMQP "github.com/netholedev/triptych/pkg/amqp"
	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/storage"
	"github.com/netholedev/triptych/pkg/utils"
	"google.golang.org/grpc"
)

func newUsersModule(ctx context.Context, db driver.Database) (users.UsersService, error) {
	usersRepository, err := users.NewUsersRepository(ctx, db)
	if err != nil {
		return nil, err
	}

	usersService := users.NewUsersService(usersRepository)

	return usersService, nil
}

func main() {
	conf, err := config.NewConfig()
	utils.Check(err)

	// TODO
	ctx := context.Background()

	db, err := storage.ConnectArangoDb(ctx, &conf.Db)
	utils.Check(err)

	amqpConn := new(AMQP.AmqpClient)
	amqpConn.URL = fmt.Sprintf("amqp://%s:%s@%s:%d/", conf.Amqp.User, conf.Amqp.Password, conf.Amqp.Host, conf.Amqp.Port)

	err = amqpConn.Connect()
	utils.Check(err)

	usersService, err := newUsersModule(ctx, db)
	utils.Check(err)

	authHandlerImpl := new(handlers.AuthHandler)
	err = authHandlerImpl.Inject(usersService, amqpConn)
	utils.Check(err)

	// helloHandlerImpl := new(handlers.HelloHandler)

	tcpServer, err := net.Listen("tcp", ":8000")
	utils.Check(err)

	// serviceInterceptors := interceptors.NewServiceInterceptors(usersService)

	grpcImpl := grpc.NewServer(
	// grpc.UnaryInterceptor(usersServiceImpl.AuthorizationInterceptor()),
	)

	auth_pb.RegisterAuthServiceServer(grpcImpl, authHandlerImpl)
	// hello_pb.RegisterHelloServiceServer(grpcImpl, helloHandlerImpl)

	err = grpcImpl.Serve(tcpServer)
	utils.Check(err)
}