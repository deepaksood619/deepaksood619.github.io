---
slug: /ucp-universal-commerce-protocol
title: UCP - Universal Commerce Protocol
description: Google's open standard enabling direct AI-powered checkout across Google Search AI Mode and Gemini, with REST API and MCP binding support.
created: 2026-06-24
updated: 2026-06-24
---

UCP is an open standard that unifies digital commerce. It enables direct, instant purchases across AI surfaces like AI Mode in Google Search and the Gemini app, reducing friction and cart abandonment.

## Does UCP Require an MCP Server?

**No — UCP is NOT the same as MCP, and merchants don't need to run an MCP server.** However, UCP *supports* MCP as one of its transport bindings.

Merchants choose one of these integration paths:

| Integration Path | What Merchants Implement |
|---|---|
| **REST API binding** | 3 REST endpoints + `/.well-known/ucp` manifest |
| **MCP binding** | MCP server exposing UCP tools |
| **Agent2Agent (A2A)** | A2A-compatible agent endpoints |

Most merchants use the **REST API binding** — simpler and more widely documented.

## How UCP Works (Architecture)

```text
Google AI Surface (Search/Gemini)
        ↓
  Reads /.well-known/ucp  ← publicly hosted JSON manifest on merchant's domain
        ↓
  Discovers endpoints, capabilities, payment handlers
        ↓
  Calls merchant REST endpoints for checkout session lifecycle
        ↓
  Merchant server handles session, payment, fulfillment
```

**Discovery is automatic** — once the `/.well-known/ucp` file is public, Google's agents can find your store's capabilities without hard-coded integrations.

## Where Do Merchants Register the UCP Endpoint?

Two-part setup:

### 1. Host the Manifest File (Self-Serve)

Create and host a JSON file at:

```text
https://yourdomain.com/.well-known/ucp
```

This file must be **publicly accessible** (no auth). It declares:

- `version` — protocol version
- `services` — shopping service definitions
- `capabilities` — checkout, fulfillment, discount, order management flags
- `payment_handlers` — Google Pay config, payment method params
- `signing_keys` — public JWK keys for webhook verification

### 2. Register via Google Merchant Center

- Submit interest form → Google onboarding
- Configure Merchant Center account with UCP settings
- Provide API keys (separate staging + production keys) via email to Google for key exchange
- Optional: OAuth 2.0 setup if using **identity linking** (guest checkout works without OAuth)

## Three Core REST Endpoints (Native Checkout)

Merchants implement these endpoints on their server:

```text
POST   /checkout-sessions          ← Create checkout (initiate cart)
PUT    /checkout-sessions/{id}     ← Update checkout (shipping, promo codes)
POST   /checkout-sessions/{id}/complete  ← Complete checkout (place order)
```

Plus a **webhook endpoint** for Google to push order status updates back to the merchant.

## Checkout Session Lifecycle

```text
User in AI Mode/Gemini
  → "Create checkout"   → POST /checkout-sessions
  → "Update checkout"   → PUT  /checkout-sessions/{id}  (shipping, promo)
  → "Complete checkout" → POST /checkout-sessions/{id}/complete
  → Google webhooks order status back to merchant
```

## Identity Options

| Mode | Requirements |
|---|---|
| **Guest checkout** | No OAuth needed; optimized for conversion |
| **Identity linking** | OAuth 2.0 + `/.well-known/oauth-authorization-server` (RFC 8414) |

## Authentication

- Merchants provide API keys; Google uses them to authenticate requests to merchant endpoints
- Merchants use public JWK signing keys to verify webhook authenticity from Google
- Separate keys for staging and production

## MCP Binding vs REST Binding

UCP natively supports both:

```text
REST API binding  →  HTTP endpoints (standard, most documented)
MCP binding       →  MCP server exposing UCP tools (for AI-native stacks)
A2A binding       →  Agent2Agent protocol
```

The MCP binding lets merchants expose UCP capabilities as MCP tools, making them directly callable by LLM agents without a separate HTTP layer.

## Key Design Principles

- **Merchant of Record:** Merchant retains full ownership of customer data, relationships, and post-purchase experience
- **Open standard:** Not proprietary — based on RFC standards, JWK, OAuth 2.0
- **Discovery-first:** `/.well-known/ucp` enables zero-config agent discovery
- **Payment separation:** Payment instruments (what user pays with) separated from payment handlers (processors), enabling interoperability

## Embedded Checkout (Alternative)

For merchants with complex requirements, an **iframe-based embedded checkout** is available (requires Google approval). Simpler to implement but less native than the REST/MCP binding approach.

## Testing the Integration

### 1. Merchant Center Sandbox UI (Official)

Go to **Merchant Center → UCP → "Test"** on the sandbox card → opens "UCP sandbox integration" page.

Lets you manually fire the 3 checkout endpoints with a JSON editor:

- Create checkout → Update checkout → Complete checkout

**Limitation:** Only validates API responses — doesn't show actual product rendering in Gemini/AI Mode.

### 2. Verify the `/.well-known/ucp` Manifest

```bash
curl https://yourdomain.com/.well-known/ucp
```

Check:
- Returns valid JSON with `Content-Type: application/json`
- Contains `services`, `capabilities`, `payment_handlers`
- No auth required (must be publicly accessible)

### 3. UCP CLI Tool

```bash
ucp-cli test --target http://localhost:3000 --scenario full_purchase
```

Simulates full agent flow locally: discovery → search → cart → checkout.

### 4. Seeing Products in Gemini / AI Mode

**Not self-serve** — Google controls which merchants appear. To get products showing:

1. Submit the **UCP interest form** via Merchant Center
2. Pass Google's onboarding/approval
3. Add `native_commerce` attribute to eligible products in the feed — only products with this attribute get the **Buy button**
4. Once approved, products surface when users query Gemini/AI Mode for matching items

There is no preview mode or way to force a test query in Gemini before approval.

### What About ChatGPT?

UCP is **Google-only** (AI Mode in Search + Gemini). ChatGPT/OpenAI has a completely separate system — products appear there via **Microsoft/Bing product indexing**, not UCP.

## Monitoring & Analytics

Post-integration, merchants access via Merchant Center Analytics:

- Click-through rates
- Conversion rates
- Average order value
- Cancellation data

## Links

- [Integration Guide](https://developers.google.com/merchant/ucp/guides/integration-ui/integration)
- [UCP Profile (`/.well-known/ucp`)](https://developers.google.com/merchant/ucp/guides/ucp-profile)
- [UCP Overview](https://developers.google.com/merchant/ucp/)
- [Google Dev Blog: Under the Hood of UCP](https://developers.googleblog.com/under-the-hood-universal-commerce-protocol-ucp/)
- [UCP Open Spec](http://ucp.dev/2026-04-08/specification/overview/)
- [Merchant Center Help](https://support.google.com/merchants/answer/16837055)
- [MCP Model Context Protocol](ai/llm/mcp/mcp-model-context-protocol.md)
