package users

import (
	"context"

	"github.com/arangodb/go-driver"
	"github.com/netholedev/triptych/pkg/models"
)

type UsersRepository interface {
	Create(context.Context, *models.User) (driver.DocumentID, error)
	FindByEmail(context.Context, string) ([]models.User, error)
	SetNewTokens(context.Context, *models.User) error
	SetNewPasswordResetRequest(context.Context, *models.User) error
	FindByAccessToken(context.Context, string, bool) ([]models.User, error)
	FindByConfirmationToken(context.Context, string) ([]models.User, error)
	ConfirmUserWithToken(context.Context, string, string) (bool, error)
	SetNewPassword(context.Context, *models.User) ([]models.User, error)
	FindByTokens(context.Context, string, string, bool) ([]models.User, error)
	FindById(context.Context, string) (models.User, error)
	// FindExpiredToken(context.Context, string, string) ([]models.User, error)
}
