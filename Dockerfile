# syntax=docker/dockerfile:1
FROM golang:buster AS builder

WORKDIR /triptych

COPY . .

RUN go mod vendor

RUN chmod +x ./scripts/builder.sh

FROM alpine:latest AS account_service
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /triptych/dist/accounts_service-linux-amd64 .
COPY --from=builder /triptych/config/triptych.prod.json .
CMD ["./accounts_service-linux-amd64", "--config", "./triptych.prod.json"]
