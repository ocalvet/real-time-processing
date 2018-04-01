package main

import "fmt"

func main() {
	done := make(chan bool, 5)
	go func() {
		for {
			fmt.Println("On a goroutine")
			done <- true
		}
	}()
	fmt.Println("Outside a goroutine")
	i := 0
	for i <= 5 {
		if <-done {
			i++
		}
	}
}
