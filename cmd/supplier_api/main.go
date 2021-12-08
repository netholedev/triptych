package main

import (
	"context"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/netholedev/triptych/cmd/supplier_api/handlers"
	"github.com/netholedev/triptych/internal/users"
	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/storage"
	"github.com/netholedev/triptych/pkg/utils"
)

func main() {
	conf, err := config.NewConfig()
	utils.Check(err)

	// TODO
	ctx := context.Background()

	db, err := storage.ConnectArangoDb(ctx, &conf.Db)
	utils.Check(err)

	// emailsService, err := service.NewEmailsService(channel)
	// utils.Check(err)

	usersRepository, err := users.NewUsersRepository(ctx, db)
	utils.Check(err)

	usersService := users.NewUsersService(usersRepository)
	authHandler := handlers.NewUsersHandler(usersService)

	app := fiber.New(fiber.Config{})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5000, https://triptych.io",
		AllowHeaders: "Origin, Content-Type, Accept, X-Refresh-Token, Authorization",
	}))
	app.Use(compress.New())
	app.Use(recover.New())

	auth := app.Group("/auth")
	auth.Post("/register", authHandler.Register)
	auth.Post("/login", authHandler.Login)
	auth.Get("/refresh", authHandler.RefreshToken)
	auth.Get("/confirm_registration/:token", authHandler.ConfirmRegistration)
	auth.Get("/profile", authHandler.ValidateUser, authHandler.Profile)
	auth.Delete("/forgot-password", authHandler.PasswordResetRequest)
	auth.Put("/set-password/:token", authHandler.SetNewPassword)

	log.Fatal(app.Listen(":8000"))
}
