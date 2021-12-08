package common

import (
	"github.com/netholedev/triptych/internal/common"
	"github.com/netholedev/triptych/pkg/exceptions"
)

func ParseErrors(err *exceptions.ErrorResponse) *common.ServiceError {
	var validationErrors []*common.ValidationError
	var duplicatedFields []string

	if len(err.InvalidFields) > 0 {
		for _, field := range err.InvalidFields {
			validationErrors = append(validationErrors, &common.ValidationError{
				FieldName: field.FieldName,
				Cause:     field.Cause,
			})
		}
	}

	if len(err.DuplicatedFields) > 0 {
		duplicatedFields = append(duplicatedFields, err.DuplicatedFields...)
	}

	return &common.ServiceError{
		Code:             int32(err.Code),
		ValidationErrors: validationErrors,
		DuplicatedFields: duplicatedFields,
	}
}
