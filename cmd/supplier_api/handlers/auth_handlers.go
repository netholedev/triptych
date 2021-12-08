package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netholedev/triptych/internal/users"
	"github.com/netholedev/triptych/pkg/exceptions"
	"github.com/netholedev/triptych/pkg/models"
	"github.com/netholedev/triptych/pkg/validator"
)

type AuthHandler interface {
	extractTokenFromHeaderString(string) string
	ValidateUser(*fiber.Ctx) error
	Register(*fiber.Ctx) error
	Login(*fiber.Ctx) error
	RefreshToken(*fiber.Ctx) error
	Profile(*fiber.Ctx) error
	ConfirmRegistration(*fiber.Ctx) error
	PasswordResetRequest(*fiber.Ctx) error
	SetNewPassword(*fiber.Ctx) error
}

type authHandler struct {
	usersService users.UsersService
}

func NewUsersHandler(s users.UsersService) AuthHandler {
	return &authHandler{
		usersService: s,
	}
}

func (ah *authHandler) extractTokenFromHeaderString(header string) string {
	token := header

	if len(token) > 7 {
		token = token[7:]
	}

	return token
}

func (ah *authHandler) ValidateUser(ctx *fiber.Ctx) error {
	token := ah.extractTokenFromHeaderString(ctx.Get(fiber.HeaderAuthorization))

	user, err := ah.usersService.ValidateWithToken(ctx.Context(), token)
	if err != nil {
		ctx.Status(fiber.ErrUnauthorized.Code)
		return ctx.JSON(err)
	}

	if user != nil {
		ctx.Locals("user", user.Id.Key())
		return ctx.Next()
	}

	ctx.Status(fiber.ErrUnauthorized.Code)
	return ctx.JSON(exceptions.ErrorResponse{
		Code: exceptions.ErrCodeUnauthorized,
	})
}

func (ah *authHandler) RefreshToken(ctx *fiber.Ctx) error {
	token := ah.extractTokenFromHeaderString(ctx.Get(fiber.HeaderAuthorization))

	refreshToken := ctx.Get("X-Refresh-Token")

	foundUser, err := ah.usersService.RefreshToken(ctx.Context(), token, refreshToken)
	if err != nil {
		ctx.Status(fiber.ErrUnauthorized.Code)
		return ctx.JSON(err)
	}

	resp := models.UserAuthResponse{
		Token:        foundUser.LatestToken,
		RefreshToken: foundUser.RefreshToken,
	}

	return ctx.JSON(resp)
}

func (ah *authHandler) Register(ctx *fiber.Ctx) error {
	registerDto := models.UserRegisterDto{}

	if err := ctx.BodyParser(&registerDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(exceptions.NewJSONParseError())
	}

	if err := validator.ValidateStruct(&registerDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	_, err := ah.usersService.Register(ctx.Context(), &registerDto)
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	ctx.SendStatus(fiber.StatusCreated)
	return ctx.Send([]byte(""))
}

func (ah *authHandler) PasswordResetRequest(ctx *fiber.Ctx) error {
	passwordResetRequestDto := models.UserPasswordResetRequestDto{}

	if err := ctx.BodyParser(&passwordResetRequestDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(exceptions.NewJSONParseError())
	}

	if err := validator.ValidateStruct(&passwordResetRequestDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	_, err := ah.usersService.PasswordResetRequest(ctx.Context(), &passwordResetRequestDto)
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	ctx.SendStatus(fiber.StatusCreated)
	return ctx.Send([]byte(""))
}

func (ah *authHandler) ConfirmRegistration(ctx *fiber.Ctx) error {
	confirmationToken := ctx.Params("token")
	_, err := ah.usersService.ConfirmRegistration(ctx.Context(), confirmationToken)
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	ctx.SendStatus(fiber.StatusCreated)
	return ctx.Send([]byte(""))
}

func (ah *authHandler) SetNewPassword(ctx *fiber.Ctx) error {
	passwordResetToken := ctx.Params("token")

	setNewPasswordDto := models.UserSetNewPasswordDto{}

	if err := ctx.BodyParser(&setNewPasswordDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(exceptions.NewJSONParseError())
	}

	if err := validator.ValidateStruct(&setNewPasswordDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	_, err := ah.usersService.SetNewPassword(ctx.Context(), passwordResetToken, &setNewPasswordDto)
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	ctx.SendStatus(fiber.StatusCreated)
	return ctx.Send([]byte(""))
}

func (ah *authHandler) Login(ctx *fiber.Ctx) error {
	loginDto := models.UserLoginDto{}

	if err := ctx.BodyParser(&loginDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(exceptions.NewJSONParseError())
	}

	if err := validator.ValidateStruct(&loginDto); err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	foundUser, err := ah.usersService.Login(ctx.Context(), &loginDto)
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	resp := models.UserAuthResponse{
		Token:        foundUser.LatestToken,
		RefreshToken: foundUser.RefreshToken,
	}

	return ctx.JSON(resp)
}

func (ah *authHandler) Profile(ctx *fiber.Ctx) error {
	userId := ctx.Locals("user")

	user, err := ah.usersService.Profile(ctx.Context(), userId.(string))
	if err != nil {
		ctx.Status(fiber.ErrBadRequest.Code)
		return ctx.JSON(err)
	}

	return ctx.JSON(models.UserProfileResponse{
		Email:     user.Email,
		FirstName: user.FirstName,
		LastName:  user.LastName,
	})
}
