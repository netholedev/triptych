package main

import (
	"fmt"
	"log"

	"github.com/netholedev/triptych/pkg/amqp"
	"github.com/netholedev/triptych/pkg/logger"
	"github.com/netholedev/triptych/pkg/smtp"
)

var (
	loggerInstance = logger.NewLogger("EMAILS")
	exchangeName   = "EMAILS"
	queueName      = "EMAIL_SEND"
)

func check(err error) {
	if err != nil {
		fmt.Println(loggerInstance.ProgramError(err))
	}
}

func main() {
	forever := make(chan bool)

	amqpConn := new(amqp.AmqpClient)
	amqpConn.URL = "amqp://guest:guest@localhost:5672"

	smtpConn := new(smtp.SMTPClient)
	smtpConn.Host = "localhost"
	smtpConn.Port = 25
	smtpConn.IsSecure = true
	smtpConn.SenderName = "Naber"
	smtpConn.SenderEmail = "..@...com"
	smtpConn.SenderPassword = "ultrasecurepassword"

	err := amqpConn.Connect()
	if err != nil {
		fmt.Println(loggerInstance.ProgramError(err))
		return
	}

	err = smtpConn.Connect()
	if err != nil {
		fmt.Println(loggerInstance.ProgramError(err))
		return
	}

	err = amqpConn.Channel.ExchangeDeclare(
		exchangeName, // name
		"direct",     // type
		true,         // durable
		false,        // auto-deleted
		false,        // internal
		false,        // no-wait
		nil,          // arguments
	)
	check(err)

	q, err := amqpConn.Channel.QueueDeclare(
		queueName, // name
		true,      // durable
		false,     // delete when unused
		false,     // exclusive
		false,     // no-wait
		nil,       // arguments
	)
	check(err)

	err = amqpConn.Channel.QueueBind(
		q.Name,       // queue name
		"",           // routing key
		exchangeName, // exchange
		false,        // no-wait
		nil,          // args
	)
	check(err)

	msgs, err := amqpConn.Channel.Consume(
		q.Name, // queue
		"",     // consumer
		true,   // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	)
	check(err)

	go func() {
		for d := range msgs {
			// TODO: smtpConn.Send()
			log.Printf("Received a message: %s", d.Body)
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
