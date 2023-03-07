# Hello World

## hello.go

```go
# The main package is the starting point to run the program

package main

# preprocessor command, tells the compilerto include the files lying in the package fmt

import "fmt"

# program execution begins here

func main() {

# Notice the capital P of Println method. In Go language, a name is exported if it starts with capital letter. Exported means the function or variable/constant is accessible to the importer of the respective package

fmt.Println("Hello, 世界")

}

## Running

go run hello.go

## Commands

go mod init github.io/deepaksood619/pcbook

go test ./... # run all test in all packages

go test ./serializer/file_test.go
```

## A Go program basically consists of the following parts

- Package Declaration
- Import Packages
- Functions
- Variables
- Statements and Expressions
- Comments

## Important Points

- One more interesting thing you may notice is thelack of semicolons. In fact, in Go they are optional -- you may use them to separate the statements, but it's not required and generally not advised to use.
- short form of creating vars. the := operatordeclares and assigns a value to a variable at the same time. Using this form you don't have to provide the type of variable - the compiler will figure that out based on the value you passed.

## Naming Rules

Go has a set of naming rules that you'll have to follow:

- a name must begin with a letter
- if the name begins with a Capital letter, it's considered asexportedand can be usedoutside of the current package. Otherwise, the variable/function/type can be usedonly inside the current package. THIS IS IMPORTANT!

These are all enforced rules. Simple!

One more additional rule set by the community is to usecamelCase. It is also popular to abbreviate obvious variables - using i instead of index etc. That's all you need to know about naming conventions.
