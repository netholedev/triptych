package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/netholedev/triptych/cmd/accounts_service/common"
	pb "github.com/netholedev/triptych/internal/auth"
	common_pb "github.com/netholedev/triptych/internal/common"
	"github.com/netholedev/triptych/internal/users"
	AMQP "github.com/netholedev/triptych/pkg/amqp"
	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/validator"
	"github.com/streadway/amqp"
)

var (
	emailsExchangeName = "EMAILS"
	// emailsQueueName    = "EMAIL_SEND"
)

type AuthHandler struct {
	usersService   users.UsersService
	emailsExchange *AMQP.AmqpClient
}

func (handler *AuthHandler) Inject(usersService users.UsersService, amqpConfig *config.AmqpConfig) error {
	amqpClient := AMQP.NewAmqpClient(amqpConfig)

	err := amqpClient.Connect()
	if err != nil {
		return err
	}

	err = amqpClient.Channel.ExchangeDeclare(
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

	handler.emailsExchange = &amqpClient

	handler.usersService = usersService

	return nil
}

func (handler *AuthHandler) Profile(ctx context.Context, _ *common_pb.Empty) (*pb.ProfileResponse, error) {
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
	registerDto.Subscription = models.Subscription{
		Status:    true,
		AppType:   models.ServiceTypeSupplierProgram,
		StartDate: time.Now(),
		EndDate:   time.Now().AddDate(1, 0, 0),
	}

	resp := &pb.TokenResponse{
		Success: false,
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

	emailMsg, jsonErr := json.Marshal(map[string]string{
		"to":      newUser.Email,
		"body":    newUser.ConfirmationToken,
		"subject": "Welcome to Triptych!",
	})
	if jsonErr != nil {
		fmt.Println("naber")
	}

	emailError := handler.emailsExchange.Channel.Publish(
		emailsExchangeName, // exchange
		"",                 // routing key
		false,              // mandatory
		false,              // immediate
		amqp.Publishing{
			ContentType: "application/json",
			Body:        emailMsg,
		},
	)
	if emailError != nil {
		log.Println(emailError)
	}

	resp.Success = true

	return resp, nil
}

func (handler *AuthHandler) Login(ctx context.Context, dto *pb.LoginRequest) (*pb.TokenResponse, error) {
	var err error
	response := new(pb.TokenResponse)
	return response, err
}
