---
slug: /ucp-universal-commerce-protocol
title: UCP - Universal Commerce Protocol
description: Google's open standard enabling direct AI-powered checkout across Google Search AI Mode and Gemini, with REST API and MCP binding support.
created: 2026-06-24
updated: 2026-09-03
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

[GitHub - Universal-Commerce-Protocol/conformance: Conformance Tests for UCP · GitHub](https://github.com/Universal-Commerce-Protocol/conformance)

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

## How does it work

### Discovery — the manifest

Every UCP store publishes /.well-known/ucp (exactly what you curled against test.local). It declares:

- **services —** vertical API surfaces (dev.ucp.shopping) with a transport (REST/MCP/A2A/Embedded) and an endpoint.
- **capabilities —** individual features (catalog, cart, checkout, discount, fulfillment, buyer_consent, order, ap2_mandate...), each pointing at a spec + JSON Schema. Capabilities only ever inherit the service's endpoint — that's why the checklist you ran flagged it as wrong if a capability declared its own endpoint.
- **extends —** some capabilities are extensions of a base one (discount extends checkout and cart — hence the array you fixed on this store).
- **signing_keys —** JWKs used to verify this business's signatures (empty until AP2 is turned on, which you saw toggle on/off).

An agent fetches this once, per store, before doing anything else.

### Capability negotiation

Both sides can have different levels of the same capability. The agent sends its own profile URL via a UCP-Agent header; each side computes the intersection: match capability names → pick the highest mutually-supported version → drop any extension whose parent capability didn't survive the intersection → repeat.

This is why the fulfillment/buyer_consent/order capabilities you added back mattered — an agent doing exact-match negotiation would silently treat the store as not supporting them at all if they were missing, even though the underlying checkout logic worked fine.

### The shopping flow itself

1. Catalog — search/browse products.
2. Cart — build a line-item cart.
3. Checkout session — create → update (attach shipping/fulfillment, buyer info, discount codes) → complete. This is stateful: the session tracks totals, discounts, fulfillment options as you PATCH it.
4. Payment — a three-step handshake designed to keep raw card data away from both the agent and the merchant: the store advertises payment handlers (Google Pay, Stripe, etc.) in the checkout response → the agent's payment provider does the actual credential exchange → the agent hands the store only an opaque token.

That's why PCI scope stays small on both sides.

1. Order — once complete, the store owns the order lifecycle and must push signed webhook events (order_placed, order_shipped, ...) to the agent's registered URL. This is exactly the ucp_webhooks.py machinery you exercised — Webhook-Id, Webhook-Timestamp, Content-Digest, and an RFC 9421 HTTP Message Signature covering ucp-agent as a signed component.

### Trust and signing

Two separate signature mechanisms show up in this demo:

- AP2 mandates — a payment-authorization layer: the merchant signs a merchant_authorization at checkout creation, proving this store approved this exact cart/total, verifiable via the signing_keys in its manifest. This is the piece intentionally off by default in your setup (AP2_MANDATE_REQUIRED=false) — it's why the conformance suite's one "expected" failure exists.
- Webhook signing (RFC 9421) — every outbound order-event webhook is signed so the receiving agent can verify it really came from the business whose profile it fetched. Verification flow: read keyid from the Signature header → fetch that business's /.well-known/ucp (cached ≥60s) → match kid in signing_keys[] → verify.

Both use the same pattern: the manifest is the trust root — it's both "what can you do" and "here's the public key to prove it was really you."

So in short: manifest advertises capabilities → agent and store negotiate the intersection → agent drives a stateful checkout session through a standard REST/MCP contract → payment happens via a three-party handshake that never exposes raw card data to the store → the store is obligated to notify the agent of order events via signed webhooks. Everything you fixed in the self-test — the missing capabilities, the wrong extends shape, the unsigned webhooks — were all breaks in exactly this discovery→negotiation→trust chain.

## Protocol

### `ucp.dev` — the standards body, not a store

`ucp.dev` is where the **protocol itself** is published — the spec docs, JSON Schemas, and OpenAPI/REST-binding definitions you and I were just fetching (`/2026-04-08/specification/catalog`, `/2026-04-08/schemas/shopping/catalog.json`, etc.). It's analogous to `schema.org` or `oauth.net`: a reference authority that defines *how the protocol works*, not a server anyone transacts against. No agent ever sends a checkout request to `ucp.dev`.

Every `spec`/`schema` URL inside the manifest you fetched points at `ucp.dev` for exactly this reason — they're **documentation/contract references**, telling an agent "here's the rulebook this capability follows," not "call this URL."

### `test.local` — an actual merchant implementing that protocol

`test.local` is a real, individual store — this demo's WordPress site — that has implemented the UCP spec and published its own manifest declaring which parts of it (`catalog`, `checkout`, `order`, ...) it supports. It's the thing an agent actually talks to. That's why the manifest's `services["dev.ucp.shopping"][0].endpoint` is `http://test.local`, not `ucp.dev` — `endpoint` is the one field in the whole manifest that's merchant-specific; everything else (`spec`, `schema`) is a fixed pointer back to the shared rulebook at `ucp.dev`.

So the relationship is:

| |`ucp.dev`|`test.local`|
|---|---|---|
|Role|Protocol/standards publisher|One merchant's live implementation|
|What it serves|Spec docs, JSON Schemas, REST/MCP binding definitions|`/.well-known/ucp` manifest + the actual checkout/catalog/order API|
|Who talks to it|Developers/agents *reading the rules once* (often cached)|Agents *transacting*, every request|
|Analogous to|`oauth.net`, `schema.org`|A specific website that supports OAuth / uses schema.org markup|

In production, every UCP-conformant store would have its own domain in the `endpoint` field — Shopify store A, Etsy shop B, `test.local` here — all pointing their `spec`/`schema` fields back at the same `ucp.dev` URLs, because they're all implementing the same shared standard. `ucp.dev` never changes per-store; `endpoint` is the only thing that does.

## Monitoring & Analytics

Post-integration, merchants access via Merchant Center Analytics:

- Click-through rates
- Conversion rates
- Average order value
- Cancellation data

## Links

 - [The Universal Test Harness for Agentic Commerce - UCPPlayground](https://ucpplayground.com/)
- [Integration Guide](https://developers.google.com/merchant/ucp/guides/integration-ui/integration)
- [UCP Profile (`/.well-known/ucp`)](https://developers.google.com/merchant/ucp/guides/ucp-profile)
- [UCP Overview](https://developers.google.com/merchant/ucp/)
- [Google Dev Blog: Under the Hood of UCP](https://developers.googleblog.com/under-the-hood-universal-commerce-protocol-ucp/)
- [UCP Open Spec](http://ucp.dev/2026-04-08/specification/overview/)
- [Merchant Center Help](https://support.google.com/merchants/answer/16837055)
- [MCP Model Context Protocol](ai/llm/mcp/mcp-model-context-protocol.md)
- [Overview  \|  Google Universal Commerce Protocol (UCP) Guide  \|  Google for Developers](https://developers.google.com/merchant/ucp/guides)
- [Google UCP \| Universal Commerce Protocol \| Pixus](https://www.pixus.uk/google-ucp-management/)
- [GitHub - Universal-Commerce-Protocol/conformance: Conformance Tests for UCP · GitHub](https://github.com/Universal-Commerce-Protocol/conformance)
- [UCP v2026-04-08: The Spec Just Got Its Biggest Update Since Launch — UCP Checker Blog](https://ucpchecker.com/blog/ucp-v2026-04-08-spec-update)
- [GitHub - Universal-Commerce-Protocol/python-sdk: The official Python SDK for UCP · GitHub](https://github.com/Universal-Commerce-Protocol/python-sdk)
	- [ucp-sdk · PyPI](https://pypi.org/project/ucp-sdk/)
	- `pip install ucp-sdk`
