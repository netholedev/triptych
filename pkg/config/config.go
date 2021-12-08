package config

import (
	"encoding/json"
	"flag"
	"io/ioutil"
	"log"
	"os"
	"strconv"
)

type DatabaseConfig struct {
	User     string `json:"user"`
	Password string `json:"password"`
	Host     string `json:"host"`
	Port     int64  `json:"port"`
	Name     string `json:"name"`
}

type AmqpConfig struct {
	User     string `json:"user"`
	Password string `json:"password"`
	Host     string `json:"host"`
	Port     int64  `json:"port"`
}

type SmtpConfig struct {
	SenderName     string `json:"sender_name"`
	SenderEmail    string `json:"sender_email"`
	SenderPassword string `json:"sender_password"`
	Host           string `json:"host"`
	Port           int64  `json:"port"`
	Secure         bool   `json:"secure"`
}

type Config struct {
	Db   DatabaseConfig `json:"db"`
	Amqp AmqpConfig     `json:"amqp"`
	Smtp SmtpConfig     `json:"smtp"`
}

func NewConfig() (*Config, error) {
	conf := &Config{}

	var configPath = ""

	flag.StringVar(&configPath, "config", "", "Config file path")

	if os.Getenv("DB_PORT") != "" {
		p, err := strconv.ParseInt(os.Getenv("DB_PORT"), 10, 64)
		if err != nil {
			log.Fatalln(err)
		}

		conf.Db.Port = p
	}

	flag.StringVar(&conf.Db.User, "db_user", os.Getenv("DB_USER"), "DB user name")
	flag.StringVar(&conf.Db.Password, "db_password", os.Getenv("DB_PASSWORD"), "DB pass")
	flag.Int64Var(&conf.Db.Port, "db_port", conf.Db.Port, "DB port")
	flag.StringVar(&conf.Db.Host, "db_host", os.Getenv("DB_HOST"), "DB host")
	flag.StringVar(&conf.Db.Name, "db_name", os.Getenv("DB_NAME"), "DB name")

	if os.Getenv("Amqp_PORT") != "" {
		p, err := strconv.ParseInt(os.Getenv("Amqp_PORT"), 10, 64)
		if err != nil {
			log.Fatalln(err)
		}

		conf.Amqp.Port = p
	}

	flag.StringVar(&conf.Amqp.User, "amqp_user", os.Getenv("AMQP_USER"), "amqp user name")
	flag.StringVar(&conf.Amqp.Password, "amqp_password", os.Getenv("AMQP_PASSWORD"), "amqp pass")
	flag.Int64Var(&conf.Amqp.Port, "amqp_port", conf.Db.Port, "Amqp port")
	flag.StringVar(&conf.Amqp.Host, "amqp_host", os.Getenv("AMQP_HOST"), "amqp host")

	if os.Getenv("SMTP_PORT") != "" {
		p, err := strconv.ParseInt(os.Getenv("SMTP_PORT"), 10, 64)
		if err != nil {
			log.Fatalln(err)
		}

		conf.Amqp.Port = p
	}

	flag.StringVar(&conf.Smtp.SenderName, "smtp_sender_name", os.Getenv("SMTP_SENDER_EMAIL_NAME"), "Smtp sender email name")
	flag.StringVar(&conf.Smtp.SenderEmail, "smtp_sender_email", os.Getenv("SMTP_SENDER_EMAIL_ADDRESS"), "Smtp sender email addr")
	flag.StringVar(&conf.Smtp.SenderPassword, "smtp_sender_password", os.Getenv("SMTP_SENDER_EMAIL"), "Smtp sender password")
	flag.StringVar(&conf.Smtp.Host, "smtp_host", os.Getenv("SMTP_HOST"), "Smtp host")
	flag.Int64Var(&conf.Smtp.Port, "smtp_port", conf.Db.Port, "Smtp port")
	flag.BoolVar(&conf.Smtp.Secure, "smtp_secure", false, "Smtp Secure")

	flag.Parse()

	if configPath != "" {
		conf = &Config{}

		jsonFile, err := os.Open(configPath)
		if err != nil {
			return nil, err
		}

		defer jsonFile.Close()

		byteValue, err := ioutil.ReadAll(jsonFile)
		if err != nil {
			return nil, err
		}

		json.Unmarshal(byteValue, &conf)
	}

	return conf, nil
}
