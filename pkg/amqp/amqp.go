package amqp

// TODO
// Inject custom logger

import (
	"log"
	"sync"
	"time"

	"github.com/streadway/amqp"
)

type AmqpClient struct {
	sync.Mutex

	URL string

	UseTLS bool
	// TODO ...
	// SSLCA              string `toml:"ssl_ca"`
	// SSLCert            string `toml:"ssl_cert"`
	// SSLKey             string `toml:"ssl_key"`
	// InsecureSkipVerify bool

	Channel *amqp.Channel
}

func (q *AmqpClient) Connect() error {
	q.Lock()
	defer q.Unlock()

	var connection *amqp.Connection
	var err error

	if q.UseTLS {
		// TODO !!
		// connection, err = amqp.DialTLS(q.URL, tls)
		return nil
	} else {
		connection, err = amqp.Dial(q.URL)
	}

	if err != nil {
		return err
	}

	channel, err := connection.Channel()
	if err != nil {
		return err
	}

	q.Channel = channel
	go func() {
		log.Printf("Closing: %s", <-connection.NotifyClose(make(chan *amqp.Error)))
		log.Printf("Trying to reconnect...")

		for err := q.Connect(); err != nil; err = q.Connect() {
			log.Println(err)
			time.Sleep(5 * time.Second)
		}
	}()
	return nil
}
