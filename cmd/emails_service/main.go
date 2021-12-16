package main

import (
	"encoding/json"
	"fmt"
	"log"

	AMQP "github.com/netholedev/triptych/pkg/amqp"

	"github.com/netholedev/triptych/pkg/config"
	"github.com/netholedev/triptych/pkg/logger"
	"github.com/netholedev/triptych/pkg/smtp"
	"github.com/netholedev/triptych/pkg/utils"
)

var (
	loggerInstance = logger.NewLogger("EMAILS")
	exchangeName   = "EMAILS"
	queueName      = "EMAIL_SEND"
)

type emailMessage struct {
	To      string `json:"to"`
	Subject string `json:"subject"`
	Body    string `json:"body"`
}

func main() {
	forever := make(chan bool)

	conf, err := config.NewConfig()
	utils.Check(err)

	amqpConn := new(AMQP.AmqpClient)
	amqpConn.URL = fmt.Sprintf("amqp://%s:%s@%s:%d/", conf.Amqp.User, conf.Amqp.Password, conf.Amqp.Host, conf.Amqp.Port)

	err = amqpConn.Connect()
	utils.Check(err)

	smtpConn := new(smtp.SMTPClient)
	smtpConn.Host = conf.Smtp.Host
	smtpConn.Port = int(conf.Smtp.Port)
	smtpConn.IsSecure = conf.Smtp.Secure
	smtpConn.SenderName = conf.Smtp.SenderName
	smtpConn.SenderEmail = conf.Smtp.SenderEmail
	smtpConn.SenderPassword = conf.Smtp.SenderPassword

	err = smtpConn.Connect()
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

	q, err := amqpConn.Channel.QueueDeclare(
		queueName, // name
		true,      // durable
		false,     // delete when unused
		false,     // exclusive
		false,     // no-wait
		nil,       // arguments
	)
	utils.Check(err)

	err = amqpConn.Channel.QueueBind(
		q.Name,       // queue name
		"",           // routing key
		exchangeName, // exchange
		false,        // no-wait
		nil,          // args
	)
	utils.Check(err)

	msgs, err := amqpConn.Channel.Consume(
		q.Name, // queue
		"",     // consumer
		true,   // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	)
	utils.Check(err)

	go func() {
		for d := range msgs {
			msg := emailMessage{}
			json.Unmarshal(d.Body, &msg)

			err := smtpConn.Send(msg.To, msg.Subject, msg.Body)
			if err != nil {
				log.Println("ERROR", err)
			}
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
