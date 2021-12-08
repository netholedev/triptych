package main

import (
	AMQP "github.com/netholedev/triptych/pkg/amqp"
	"github.com/netholedev/triptych/pkg/logger"
	"github.com/netholedev/triptych/pkg/utils"
	"github.com/streadway/amqp"
)

var (
	loggerInstance = logger.NewLogger("KONSUMIR_V1")
	exchangeName   = "KONSUMIR_V1"
	queueName      = "LOGLAR"
)

func main() {
	amqpConn := new(AMQP.AmqpClient)
	amqpConn.URL = "amqp://guest:guest@localhost:5672"

	err := amqpConn.Connect()
	utils.Check(err)

	err = amqpConn.Channel.ExchangeDeclare(
		exchangeName, // name
		"direct",     // type
		true,         // durable
		false,        // auto-deleted
		false,        // internal
		false,        // no-wait
		nil,          // arguments
	)
	utils.Check(err)

	/*
		// ALTERNATIVE USAGE !!

		q, err := amqpConn.Channel.QueueDeclare(
			queueName, // name
			true,      // durable
			false,     // delete when unused
			false,     // exclusive
			false,     // no-wait
			nil,       // arguments
		)
		check(err)

		err = amqpConn.Channel.Publish(
			exchangeName, // exchange
			q.Name,       // routing key
			false,        // mandatory
			false,        // immediate
			amqp.Publishing{
				ContentType: "text/plain",
				Body:        []byte("Hello World!"),
			},
		)
		check(err)
	*/

	err = amqpConn.Channel.Publish(
		exchangeName, // exchange
		"",           // routing key
		false,        // mandatory
		false,        // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte("Hello World!"),
		},
	)
	utils.Check(err)
}
