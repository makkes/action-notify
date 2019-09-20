FROM golang:1.13-alpine as builder

WORKDIR /notify/
RUN apk add --no-cache git
COPY . .
RUN CGO_ENABLED=0 go build -a -o notify

FROM scratch

COPY --from=builder /notify/notify /
COPY ca-certificates.crt /etc/ssl/certs/

ENTRYPOINT [ "/notify" ]
