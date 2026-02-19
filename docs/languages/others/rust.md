# Rust

Rust is a [multi-paradigm](https://en.wikipedia.org/wiki/Multi-paradigm_programming_language)[system programming language](https://en.wikipedia.org/wiki/System_programming_language) focused on safety, especially safe [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).Rust is [syntactically](https://en.wikipedia.org/wiki/Syntax_(programming_languages)) similar to [C++](https://en.wikipedia.org/wiki/C%2B%2B), but is designed to provide better [memory safety](https://en.wikipedia.org/wiki/Memory_safety) while maintaining high [performance](https://en.wikipedia.org/wiki/Performance_(Computer)).

Rust was originally designed by Graydon Hoare at [Mozilla](https://en.wikipedia.org/wiki/Mozilla) Research, with contributions from Dave Herman, [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), and others.The designers refined the language while writing the [Servo](https://en.wikipedia.org/wiki/Servo_(layout_engine)) layout or [browser engine](https://en.wikipedia.org/wiki/Browser_engine), and the Rust [compiler](https://en.wikipedia.org/wiki/Compiler). The compiler is [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software)[dual-licensed](https://en.wikipedia.org/wiki/Multi-licensing) under the [MIT License](https://en.wikipedia.org/wiki/MIT_License) and [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License_2.0).

Rust has been the "most loved programming language" in the [Stack Overflow](https://en.wikipedia.org/wiki/Stack_Overflow) Developer Survey every year since 2016.

## Tools

[Dioxus | An elegant GUI library for Rust](https://dioxuslabs.com/)

## Cargo: the Rust build tool and package manager

When you install Rustup you'll also get the latest stable version of the Rust build tool and package manager, also known as Cargo. Cargo does lots of things:

- build your project withcargo build
- run your project withcargo run
- test your project withcargo test
- build documentation for your project withcargo doc
- publish a library to [crates.io](https://crates.io/) withcargo publish

## RBIR

The **Rewrite Big Data in Rust (RBIR)** movement is a community-driven initiative and a growing architectural shift in the data engineering world. It aims to replace the traditional big data stack—which has been dominated by Java and Scala (e.g., Apache Spark, Hadoop, Kafka)—with tools and engines built natively in **Rust**.

The GitHub repository you linked (RBIR) serves as a "manifesto" and a curated directory of projects that are part of this ecosystem.

### Key Projects in the Movement

The movement isn't just a theoretical idea; it's visible in several high-profile projects:

- **Apache DataFusion:** A very fast, extensible query engine used as the foundation for many other Rust data tools.
- **Polars:** A lightning-fast DataFrame library that is often seen as the "Rust/Python replacement for Pandas."
- **RisingWave / Arroyo:** Next-generation stream processing engines (alternatives to Apache Flink).
- **LanceDB / GreptimeDB:** Databases optimized for vector search and time-series data, built from the ground up in Rust.
- **Comet / Blaze:** Accelerators that "plug into" Apache Spark to replace its execution engine with a native Rust version.

### Why "Rewrite in Rust"? (The "Why")

The movement is driven by four primary frustrations with the "old" big data stack:

#### 1. The "JVM Tax" (Performance & Memory)

Traditional tools like Spark and Kafka run on the Java Virtual Machine (JVM). While the JVM is mature, it has significant overhead:

- **Garbage Collection (GC) Pauses:** In big data, where you manage terabytes of memory, "Stop the World" GC pauses can cause unpredictable latency spikes. Rust has no GC; memory is managed at compile time.
- **High Memory Consumption:** Java objects have "overhead" (extra bytes for every object). Rust allows for "zero-cost abstractions" and tight control over memory layout, allowing you to fit more data in the same amount of RAM.

#### 2. Efficiency and Infrastructure Costs

Because Rust is more CPU and memory-efficient, you can often process the same amount of data using fewer or smaller cloud instances. For companies spending millions on Databricks or Snowflake, switching to Rust-based engines can lead to a **2x–10x reduction in cloud bills.**

#### 3. Modern Concurrency

Big data is inherently parallel. Rust’s "ownership" model prevents "data races" (where two threads try to change the same data at once) at compile time. This makes it much easier and safer to write highly multi-threaded data processing code compared to C++ or Java.

#### 4. The Python Paradox

Most data scientists use Python, but Python is slow. Historically, we built engines in Java and used "wrappers" (like PySpark). This creates a "serialization bottleneck" where data has to be converted back and forth between Java and Python. Rust (via tools like PyO3) integrates much more seamlessly with Python. Libraries like **Polars** feel like Python but run at native machine speeds, providing a better experience for the end-user.

#### 5. Native Integration with Apache Arrow

The RBIR movement is heavily aligned with **Apache Arrow**, a columnar memory format. Rust’s memory model is a perfect fit for Arrow, allowing different tools (like a Rust database and a Rust query engine) to share data in memory without "copying" it, which is a massive speed advantage.

[GitHub - rewrite-bigdata-in-rust/RBIR: A collection of RBIR projects and posts for anyone interested in joining this journey.](https://github.com/rewrite-bigdata-in-rust/RBIR)

## Links

- [Tour of Rust - Let's go on an adventure!](https://tourofrust.com/)
- https://en.wikipedia.org/wiki/Rust_(programming_language)
- https://www.rust-lang.org
- [The Rust Programming Language - The Rust Programming Language](https://doc.rust-lang.org/book/)
- [Introduction - Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)
- [Rust at speed - building a fast concurrent database - YouTube](https://www.youtube.com/watch?v=s19G6n0UjsM&ab_channel=JonGjengset)
- https://www.rust-lang.org/learn
- https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular
- https://www.freecodecamp.org/news/rust-in-replit
- [10 Videos on Rust that accelerate my learning](https://www.linkedin.com/pulse/10-videos-rust-accelerate-my-learning-chun-yin-vincent-lau/)
- [RustEdu Workshop 2022 - RustViz: Interactively Visualizing Ownership and Borrowing - YouTube](https://www.youtube.com/watch?v=zCF8QVkc6IY)
- [GitHub - rustviz/rustviz: Interactively Visualizing Ownership and Borrowing for Rust](https://github.com/rustviz/rustviz)
- [Rust for Rustaceans by Jon Gjengset](https://rust-for-rustaceans.com/)
- [Welcome to Comprehensive Rust 🦀 - Comprehensive Rust 🦀](https://google.github.io/comprehensive-rust/welcome.html)
- [Effective Rust](https://www.lurklurk.org/effective-rust/)
- [Rust is easy... (we make it hard) - YouTube](https://www.youtube.com/watch?v=06CVZKbNvgE)
- [GitHub - emilk/egui: egui: an easy-to-use immediate mode GUI in Rust that runs on both web and native](https://github.com/emilk/egui)
