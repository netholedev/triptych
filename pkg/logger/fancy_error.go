package logger

import (
	"runtime"
)

type ProgramError struct {
	Function string
	Line     int
	Err      error
}

func HandleError(err error) *ProgramError {
	if err != nil {
		// notice that we're using 1, so it will actually log where
		// the error happened, 0 = this function, we don't want that.
		_, fn, line, _ := runtime.Caller(1)

		return &ProgramError{
			Function: fn,
			Line:     line,
			Err:      err,
		}
	}

	return nil
}

func FancyHandleError(err error) *ProgramError {
	if err != nil {
		// notice that we're using 1, so it will actually log the where
		// the error happened, 0 = this function, we don't want that.
		pc, _, line, _ := runtime.Caller(1)

		return &ProgramError{
			Function: runtime.FuncForPC(pc).Name(),
			Line:     line,
			Err:      err,
		}
	}

	return nil
}

/*
func main() {
	if FancyHandleError(fmt.Errorf("it's the end of the world")) {
		log.Print("stuff")
	}
}
*/
