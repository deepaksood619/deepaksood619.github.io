---
slug: /python/advanced/cpython
title: Understanding CPython's Call Stack
description: Explore how CPython's stack-oriented virtual machine utilizes evaluation
  and block stacks during function execution.
created: '2023-03-05'
last_update: '2023-03-07'
---

# CPython

CPython is a stack-oriented virtual machine

Each function called pushes a new entry - a frame - onto the call stack. When a function returns, its frame is popped off the stack.

CPython uses two stacks during function execution

- evaluation stack or data stack
- block stack which tracks how many blocks (loops, try/except, with, etc.) are active

Each frame has one of each type of stack associated with it.

## References

[Understanding Python Bytecode](https://www.youtube.com/watch?v=weBXlLF6an8)
