---
slug: /py-spy-python-sampling-profiler
title: py-spy - Sampling Profiler for Python
description: py-spy is a low-overhead sampling profiler written in Rust that profiles running Python programs without restarting them or modifying code, safe for production use.
created: 2026-10-22
updated: 2026-10-22
---

py-spy is a sampling profiler for Python programs. It lets you visualize what your Python program is spending time on without restarting the program or modifying the code in any way. py-spy is extremely low overhead: it is written in Rust for speed and doesn't run in the same process as the profiled Python program. This means py-spy is safe to use against production Python code.

## Key Points / Features

- Works on Linux, OSX, Windows and FreeBSD, and supports profiling all recent versions of the CPython interpreter (versions 2.3-2.7 and 3.3-3.15)
- Three subcommands: `record`, `top` and `dump`
- Attach to a running process by PID, or launch the program under py-spy
- Generates flame graphs (SVG), [speedscope](https://github.com/jlfwong/speedscope) profiles or raw data (`--format`)
- `--native` - profile native extensions written in C/C++ or Cython (x86-64 Linux/Windows, ARM/Aarch64 Linux)
- `--subprocesses` - include child Python processes (useful for multiprocessing or gunicorn worker pools)
- `--gil` - only include traces for threads holding the GIL; `%GIL` is shown in the `top` view
- `--idle` - include frames py-spy considers idle (excluded by default)
- `--nonblocking` - don't pause the target program while sampling (may give occasional sampling errors / partial stacks)
- Heavily inspired by Julia Evans' [rbspy](http://github.com/rbspy/rbspy) (Ruby sampling profiler)

## Installation

```bash
pip install py-spy
brew install py-spy     # macOS
cargo install py-spy    # builds from source, needs libunwind on Linux/Windows
```

## Usage

```bash
# record - generate a flame graph
py-spy record -o profile.svg --pid 12345
py-spy record -o profile.svg -- python myprogram.py

# top - live view of functions taking the most time (like Unix top)
py-spy top --pid 12345
py-spy top -- python myprogram.py

# dump - current call stack of each thread (find where a program is hung)
py-spy dump --pid 12345
py-spy dump --pid 12345 --locals   # also print local variables per frame
```

## How it works

py-spy works by directly reading the memory of the python program using the `process_vm_readv` system call on Linux, the `vm_read` call on OSX or the `ReadProcessMemory` call on Windows.

Figuring out the call stack of the Python program is done by looking at the global `PyInterpreterState` variable to get all the Python threads running in the interpreter, and then iterating over each `PyFrameObject` in each thread to get the call stack. Since the Python ABI changes between versions, rust's bindgen is used to generate different rust structures for each Python interpreter version.

Getting the memory address of the Python Interpreter can be tricky due to Address Space Layout Randomization (ASLR). If the interpreter ships with symbols, it dereferences the `interp_head` or `_PyRuntime` variables; for stripped binaries it scans the BSS section for addresses that look like a valid `PyInterpreterState`.

**Why another profiler?** Almost all other Python profilers require modifying the profiled program; the profiling code runs inside the target process, which slows it down and changes how it operates - so they're not safe for debugging production services.

## Permissions

- Reading another process's memory may need root. OSX always requires root; on Linux, attaching to a non-child process by PID usually requires `sudo` (or relax the `ptrace_scope` sysctl). Launching the program via `py-spy record -- python myprogram.py` works without root.
- OSX System Integrity Protection blocks reading memory of binaries in `/usr/bin` (the system python) even as root - use a different Python distribution or a virtualenv.

**Docker** - add the `SYS_PTRACE` capability (`--cap-add SYS_PTRACE`), or profile the container's process from the host OS:

```yaml
your_service:
  cap_add:
    - SYS_PTRACE
```

**Kubernetes** - add the capability under `Deployment.spec.template.spec.containers`, or attach an ephemeral debug container:

```yaml
securityContext:
  capabilities:
    add:
    - SYS_PTRACE
```

```bash
kubectl debug --profile=general -n your-namespace --target=app-container-name pod-name --image=python:3.12-slim -it -- bash
```

## Links

- [GitHub - benfred/py-spy: Sampling profiler for Python programs](https://github.com/benfred/py-spy)
- [Profiling native Python extensions with py-spy](https://www.benfrederickson.com/profiling-native-python-extensions-with-py-spy/)
- [Flame Graphs - Brendan Gregg](http://www.brendangregg.com/flamegraphs.html)
- [Debugging and Profiling](python/documentation/28-debugging-and-profiling.md)
- [Faster Python](python/advanced/faster-python.md)
- [Python Libraries](python/others/libraries.md)
