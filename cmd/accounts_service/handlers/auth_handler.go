package handlers

import (
	"context"
	"log"

	"github.com/netholedev/triptych/cmd/accounts_service/common"
	pb "github.com/netholedev/triptych/internal/auth"
	"github.com/netholedev/triptych/internal/users"
	AMQP "github.com/netholedev/triptych/pkg/amqp"
	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/validator"
	"github.com/streadway/amqp"
	"google.golang.org/protobuf/types/known/emptypb"
)

var (
	emailsExchangeName = "EMAILS"
	emailsQueueName    = "EMAIL_SEND"
)

type AuthHandler struct {
	usersService   users.UsersService
	emailsExchange *AMQP.AmqpClient
}

func (handler *AuthHandler) Inject(usersService users.UsersService, amqpConn *AMQP.AmqpClient) error {
	err := amqpConn.Channel.ExchangeDeclare(
		emailsExchangeName, // name
		"direct",           // type
		true,               // durable
		false,              // auto-deleted
		false,              // internal
		false,              // no-wait
		nil,                // arguments
	)
	if err != nil {
		return err
	}

	handler.usersService = usersService

	return nil
}

func (handler *AuthHandler) Profile(ctx context.Context, _ *emptypb.Empty) (*pb.ProfileResponse, error) {
	var err error
	response := new(pb.ProfileResponse)
	return response, err
}

func (handler *AuthHandler) Register(ctx context.Context, dto *pb.RegisterRequest) (*pb.TokenResponse, error) {
	registerDto := models.UserRegisterDto{}

	registerDto.Email = dto.GetEmail()
	registerDto.FirstName = dto.GetFirstName()
	registerDto.LastName = dto.GetLastName()
	registerDto.Password = dto.GetPassword()
	/*
		registerDto.Subscription = models.Subscription{
			Status:    true,
			AppType:   models.ServiceTypeSupplierProgram,
			StartDate: time.Now(),
			EndDate:   time.Now().AddDate(1, 0, 0),
		}
	*/

	resp := &pb.TokenResponse{
		Sucsess: false,
	}

	err := validator.ValidateStruct(&registerDto)
	if err != nil {
		resp.Errors = common.ParseErrors(err)
		return resp, nil
	}

	newUser, err := handler.usersService.Register(ctx, &registerDto)
	if err != nil {
		resp.Errors = common.ParseErrors(err)
		return resp, nil
	}

	emailError := handler.emailsExchange.Channel.Publish(
		emailsExchangeName, // exchange
		"",                 // routing key
		false,              // mandatory
		false,              // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(newUser.ConfirmationToken),
		},
	)
	if emailError != nil {
		log.Println(emailError)
	}

	resp.Sucsess = true

	return resp, nil
}

func (handler *AuthHandler) Login(ctx context.Context, dto *pb.LoginRequest) (*pb.TokenResponse, error) {
	var err error
	response := new(pb.TokenResponse)
	return response, err
}
