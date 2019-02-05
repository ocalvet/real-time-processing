package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-plus/uuid"
)

func main() {
	app := gin.Default()
	app.POST("/calculate", func(c *gin.Context) {
		uid, err := uuid.New()
		if err != nil {
			log.Printf("Something went wrong: %s", err)
			c.JSON(http.StatusOK, gin.H{
				"success": false,
			})
			return
		}
		// go work(uid.String())
		go work(uid.String())
		log.Println("Sending json")
		c.JSON(http.StatusOK, gin.H{
			"success": true,
			"uuid":    uid.String(),
		})
	})
	app.Run(":8084")
}

func work(id string) {
	log.Printf("1 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("2 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("3 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("4 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("5 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("6 doing work %s", id)
	time.Sleep(2 * time.Second)
	log.Printf("7 doing work %s", id)
}
