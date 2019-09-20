package main

import (
	"os"
	"fmt"
)

func main() {
	fmt.Println(os.Args)
	fmt.Println()
	for _, env := range os.Environ() {
		fmt.Println(env)
	}
}
