---
slug: /apple-foundation-models-cli
title: Apple Foundation Models CLI (fm)
description: The fm command line tool for running Apple's on-device Foundation Model locally, with chat, structured output and an OpenAI-style server.
created: 2026-10-22
updated: 2026-10-22
---

`fm` is a command line interface (`/usr/bin/fm`, ships with macOS) to Apple's on-device Foundation Model. Everything runs locally, so there is no API key and no network call.

## Key Points / Features

- Single model: `system` (on-device Apple Foundation Model, the default)
- `fm available` checks that the model is available on the machine
- `fm respond` is a one-shot prompt; it streams by default and accepts stdin
- `fm chat` is an interactive session; sessions are saved to `~/.fm/sessions/`
- `fm serve` starts a Chat Completions API server (OpenAI-style)
- `fm schema` generates a JSON schema for structured output
- `fm count-tokens` counts tokens for a prompt, instructions or a saved transcript (on-device model only)
- `fm license` shows and accepts the Legal Notice & Terms

## Commands

| Command | Purpose |
| --- | --- |
| `available` | Check model availability |
| `chat` | Interactive chat session |
| `count-tokens` | Count tokens in a prompt or instructions |
| `license` | Show and agree to the Legal Notice & Terms |
| `respond` | Generate a response to a prompt |
| `schema` | Generate a structured output generation schema |
| `serve` | Start a Chat Completions API server |

## respond

```bash
fm respond 'What is Swift?'
fm respond --use-case content-tagging 'Analyze this text'
fm respond --image photo.jpg --text 'What is in this image?'
echo 'What is Swift?' | fm respond
```

Useful options:

- `-i, --instructions <text>`: system-style instructions
- `--schema <file>`: constrain output to a structured output schema
- `--tool <name>`: enable a built-in tool (`barcode`, `ocr`; repeatable)
- `--image <path>` with `--label <name>`: multimodal input
- `--save-transcript <file>` / `--resume <file>`: persist and continue a conversation
- `--use-case <general|content-tagging>` and `--guardrails <default|permissive-content-transformations>`
- `-g, --greedy`: greedy sampling (deterministic); `--[no-]stream`

## Structured output

```bash
fm schema object --name Person --string name --int age > person.json
fm respond --schema person.json 'Alice is 30 years old'
```

The generated schema is plain JSON schema (`type: object`, `properties`, `required`, `x-order`).

## serve

```bash
fm serve --port 1976
fm serve --socket /tmp/fm.sock   # Unix domain socket, recommended for local Python bindings
```

Endpoints: `GET /health`, `GET /v1/models`, `POST /v1/chat/completions` (streaming and non-streaming). Because it speaks the Chat Completions format, existing OpenAI-compatible clients can point at it.

## count-tokens

```bash
fm count-tokens -q 'Hello world'            # bare integer
fm count-tokens -i 'Answer concisely' 'What is Swift?'
fm count-tokens --transcript session.json
```

## Links

- [Models](ai/llm/fundamentals/models.md)
- [Building LLM apps](ai/llm/building-llm-apps/building.md)
- Run `fm <command> --help` for full options
