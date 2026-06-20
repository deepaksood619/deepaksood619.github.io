---
slug: /languages/others/toml
title: TOML
description: Discover TOML, the minimal, easy-to-read configuration file format designed for seamless data structure mapping and straightforward parsing across various programming languages.
created: 2023-03-05
updated: 2023-12-05
---
Tom's Obvious, Minimal Language

TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics. TOML is designed to map unambiguously to a hash table. TOML should be easy to parse into data structures in a wide variety of languages.

## Example

## This is a TOML document

title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00 # First class dates

[database]
server = "192.168.1.1"
ports = [ 8001, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

## Indentation (tabs and/or spaces) is allowed but not required

[servers.alpha]
ip = "10.0.0.1"
dc = "eqdc10"

[servers.beta]
ip = "10.0.0.2"
dc = "eqdc10"

[clients]
data = [ ["gamma", "delta"], [1, 2] ]

## Line breaks are OK when inside arrays

hosts = [
"alpha",
"omega"
]

## Spec

- TOML is case sensitive.
- A TOML file must be a valid UTF-8 encoded Unicode document.
- Whitespace means tab (0x09) or space (0x20).
- Newline means LF (0x0A) or CRLF (0x0D0A).

## Uses

1. Telegraf Configuration

## References

https://github.com/toml-lang/toml

https://learnxinyminutes.com/docs/toml
