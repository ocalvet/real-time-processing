FROM golang:1.10 as build
COPY .netrc $HOME
WORKDIR $GOPATH/src/processing-service
COPY . .
RUN go version && go get -u -v golang.org/x/vgo
RUN CC=gcc vgo install ./...

FROM gcr.io/distroless/base
COPY --from=build /go/bin/processing-service /
CMD ["/processing-service"]