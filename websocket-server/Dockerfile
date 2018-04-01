FROM golang:1.10 as build
WORKDIR $GOPATH/src/websocket-server
COPY . .
RUN go version && go get -u -v golang.org/x/vgo
RUN CC=gcc vgo install ./...

FROM gcr.io/distroless/base
COPY --from=build /go/bin/websocket-server /
CMD ["/websocket-server"]