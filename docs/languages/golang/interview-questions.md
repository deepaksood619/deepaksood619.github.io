# Interview Questions

## 1. Using `sync.Mutex` in Go

**Question**

How would you use a `sync.Mutex` in Go to handle concurrent access to a shared resource? Can you provide a simple example?

**Answer**

A `sync.Mutex` is used to ensure only one Goroutine accesses a shared resource at a time.

```go
package main

import (
	"fmt"
	"sync"
)

var (
	counter int
	mutex   sync.Mutex
)

func increment(wg *sync.WaitGroup) {
	defer wg.Done()
	mutex.Lock() // Locking
	counter++
	mutex.Unlock() // Unlocking
}

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go increment(&wg)
	}

	wg.Wait()
	fmt.Println("Final Counter:", counter)
}
```

In this example, `mutex.Lock()` and `mutex.Unlock()` protect the `counter` from concurrent access.

## 2. Issues with Locks and Mitigation

**Question**

What is a potential issue with using locks in a highly concurrent system, and how can it be mitigated?

**Answer**

- **Issues**:
    
    - **Deadlocks**: Occurs when two Goroutines are waiting on each other to release locks.
    - **Performance Bottlenecks**: Locks serialize execution, reducing concurrency.
- **Mitigation**:
    
    - Use `sync.RWMutex` to allow multiple reads simultaneously but restrict writes.
    - Minimize the duration of critical sections to reduce contention.
    - Use atomic operations (`sync/atomic`) for lightweight synchronization when possible.

## 3. Mapping JSON Data to Structs

**Question**

How do you map incoming JSON data from a REST API request to a Go struct, and how would you handle validation errors in the mapping process?

**Answer**

You can map JSON data using the `encoding/json` package and handle errors appropriately.

```go
package main

import (
	"encoding/json"
	"fmt"
)

type User struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

func main() {
	jsonData := `{"name": "John", "email": "john@example.com", "age": 30}`

	var user User
	err := json.Unmarshal([]byte(jsonData), &user)
	if err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
		return
	}

	// Simple validation
	if user.Name == "" || user.Age < 0 {
		fmt.Println("Invalid user data")
		return
	}

	fmt.Println("Parsed User:", user)
}
```

For validation, use libraries like `go-playground/validator` in real-world applications.

## 4. Error Handling in Go

**Question**

How do you handle and log errors in a Go codebase to ensure they are both user-friendly and helpful for debugging?

**Answer**

Errors can be handled and logged using the Go `error` interface and logging libraries.

```go
package main

import (
	"errors"
	"fmt"
)

func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("cannot divide by zero")
	}
	return a / b, nil
}

func main() {
	result, err := divide(10, 0)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Result:", result)
}
```

For structured logging:

- Use libraries like `logrus` or `zap`.
- Wrap errors with context using `fmt.Errorf`:
    
```go
return 0, fmt.Errorf("divide function failed: %w", err)
```

## 5. Understanding Goroutines

**Question**

Can you explain what Goroutines are and how they differ from threads? Provide an example of a situation where Goroutines would be beneficial.

**Answer**

- **Goroutines**: Lightweight, managed threads in Go, created using the `go` keyword.
- **Differences from Threads**:
    - Goroutines are lightweight and managed by the Go runtime, not the OS.
    - Goroutines share memory space, whereas threads may not.

**Example Use Case**: Handling concurrent HTTP requests.

```go
package main

import (
	"fmt"
	"time"
)

func worker(id int) {
	fmt.Printf("Worker %d starting\n", id)
	time.Sleep(1 * time.Second)
	fmt.Printf("Worker %d done\n", id)
}

func main() {
	for i := 1; i <= 5; i++ {
		go worker(i) // Launch a Goroutine
	}
	time.Sleep(2 * time.Second) // Wait for Goroutines to complete
}
```

**Output**:

```bash
Worker 1 starting
Worker 2 starting
Worker 3 starting
Worker 4 starting
Worker 5 starting
Worker 1 done
Worker 2 done
Worker 3 done
Worker 4 done
Worker 5 done
```

This allows handling thousands of tasks concurrently with minimal resource usage.
