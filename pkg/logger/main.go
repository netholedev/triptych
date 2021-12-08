package logger

import (
	"log"
)

type Logger struct {
	logger     *log.Logger
	SourceName string
}

func NewLogger(sourceName string) *Logger {
	logger := new(Logger)

	logger.SourceName = sourceName

	logger.createInstance()

	return logger
}

func (l *Logger) createInstance() {
	l.logger = &log.Logger{}
	l.logger.SetPrefix(l.SourceName)
	l.logger.SetFlags(log.LstdFlags | log.Lshortfile)
}

func (l *Logger) ProgramError(err error) *ProgramError {
	if err != nil {
		fancy := FancyHandleError(err)
		return fancy
	}

	return nil
}
