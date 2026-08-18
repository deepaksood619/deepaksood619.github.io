---
slug: ai-website-builder-architecture
title: Building an AI-Powered React Static Site Builder
description: An architecture guide for a system that generates static React websites from a prompt and edits them at the section level through natural language — without regenerating the page, and without a server-side CMS.
created: 2026-06-24
updated: 2026-08-06
---
An architecture guide for a system that generates static React websites from a prompt and edits them at the **section level** through natural language — without regenerating the page, and without a server-side CMS.

## 1. The Core Thesis

The hard part of an AI site builder is not generation. Generation is a single well-prompted call against a good component library. The hard part is **the second edit** — the user pointing at one section and saying "make this hero taller and move the image to the other side" and getting exactly that, repeatably, without the pricing table below it changing.

Everything about reliability, latency, cost, preview strategy and blast radius is determined by one decision: **how the site is represented in the system**. Choose a representation that is designed to be machine-edited and section-level editing becomes an engineering problem with known solutions. Choose raw code and it stays a research problem.

The recommendation in this document:

> A site is a **typed JSON document** describing a tree of sections. Every section maps to a hand-built, tested React component in a curated registry. Styling is expressed exclusively through **design tokens** and **variant enums** — never raw CSS. An AI edit is a **schema-validated JSON Patch**, not generated code.

## 2. The Representation Decision

Three viable substrates:

| Substrate | How it works | Trade-off |
|---|---|---|
| **A. Code as source of truth** (Bolt, Lovable, Onlook) | The agent reads and writes real `.tsx` files. Edits are code diffs applied to a project tree. | Maximum expressivity. Weakest determinism — output must parse, typecheck, compile and render, and a bad edit breaks the build. Requires a per-session build sandbox, which is real per-user compute. |
| **B. JSON tree over a curated registry** (Puck model) | A page is a JSON document of typed nodes. Every node maps to a component you wrote and tested. The AI only ever emits **data**. | Maximum determinism — validation is a schema check, not a compile. Expressivity is bounded by the component library you ship. |
| **C. Hybrid — B with a code escape hatch** | JSON tree for ~95% of operations; a gated code-generation path for genuinely novel components, admitted to the registry only after passing automated checks. | Best of both, at the cost of two code paths and a sandboxed verification pipeline. |

**Build (B) first; architect for (C).** The escape hatch is the last thing you add, not the first — and deferring it is what makes the core loop tractable.

The reason (B) works is worth stating plainly: when the model emits data instead of code, **invalid output becomes structurally impossible rather than merely unlikely**. A schema violation is caught by a Zod parse in microseconds, before anything reaches the DOM. There is no compile step to fail, no syntax to malform, no import to hallucinate.

## 3. The Site Document

The entire site — structure, content, theme, asset references — is one versioned JSON document. This document is the only "database" the published site has.

```json
{
  "schemaVersion": "1.0",
  "theme": {
    "tokens": {
      "color.brand.500":  "#1E7F5C",
      "color.brand.600":  "#166248",
      "color.surface":    "#FBF9F4",
      "color.ink":        "#14211C",
      "font.heading":     "Fraunces",
      "font.body":        "Inter",
      "radius.md":        "10px",
      "space.section":    "96px"
    }
  },
  "pages": [
    {
      "id": "pg_home",
      "path": "/",
      "seo": { "title": "Kettle & Leaf", "description": "Single-origin loose leaf tea." },
      "sections": [
        {
          "id": "sec_a91c",
          "type": "Hero.Split",
          "props": {
            "eyebrow": "Single-origin, small batch",
            "heading": "Tea worth slowing down for",
            "body": "Hand-picked leaves, roasted weekly.",
            "cta": { "label": "Shop the range", "href": "/shop" },
            "media": { "assetId": "ast_4d02", "alt": "Loose leaf tea in a ceramic scoop" },
            "variant": "media-right",
            "tone": "brand",
            "density": "comfortable"
          }
        },
        { "id": "sec_bb40", "type": "Pricing.ThreeTier", "props": { "…": "…" } }
      ]
    }
  ],
  "assets": {
    "ast_4d02": { "hash": "b19f…", "width": 2400, "height": 1600, "mime": "image/avif" }
  }
}
```

### 3.1 Four schema rules that do all the work

**1. Every section carries a stable ID.**
The ID is the addressing unit for every edit, every version-history entry, every undo, every analytics event. Nothing is ever identified by array position or by prose description. IDs are generated once and never reused.

**2. Layout is expressed as variant enums, never as free CSS.**

```ts
variant: "media-right" | "media-left" | "centered" | "stacked"
```

"Move the image to the other side" cannot produce a broken layout, because the enum has only valid members. Every member has been designed, built and visually tested. The model is choosing from a menu, not composing CSS.

**3. Styling references design tokens only.**
Section props never contain a hex value, a pixel value, or a class string. "Make the palette warmer" becomes a mutation of three or four token values rather than forty scattered edits — atomic, reversible, and impossible to apply inconsistently.

**4. Props are declared in Zod, and the Zod schema *is* the model's tool definition.**
One source of truth generates four things: the TypeScript types, the runtime validator, the editor's form controls, and the JSON Schema handed to the LLM. The model literally cannot be told about a prop that does not exist.

```ts
// registry/hero-split/schema.ts
export const HeroSplitProps = z.object({
  eyebrow:  z.string().max(60).optional(),
  heading:  z.string().min(3).max(90),
  body:     z.string().max(240).optional(),
  cta:      z.object({ label: z.string().max(30), href: z.string() }).optional(),
  media:    z.object({ assetId: AssetId, alt: z.string().min(1).max(160) }),
  variant:  z.enum(["media-right", "media-left", "centered", "stacked"]),
  tone:     z.enum(["brand", "neutral", "inverse"]),
  density:  z.enum(["compact", "comfortable", "spacious"]),
});

export const registry = {
  "Hero.Split": {
    schema: HeroSplitProps,
    component: HeroSplit,
    // Natural-language hints the router uses for section selection
    describes: ["hero", "banner", "header section", "top of page", "masthead"],
    // Prop-level guidance surfaced to the model at generation time
    guidance: {
      heading: "5–9 words. Benefit-led, not feature-led. No trailing period.",
      variant: "Use media-left/right for products, centered for services.",
    },
  },
} satisfies Registry;
```

Note the `describes` and `guidance` fields. They cost nothing and they solve two real problems: referent resolution ("the banner bit") and generation quality (the model writing 30-word headings that overflow).

### 3.2 Component contract

Every registry component must satisfy these rules, enforced by lint rules and a registry test suite:

- **Pure and props-driven.** No module-level state, no context reads, no data fetching. Given props, the output is deterministic.
- **Serializable props only.** No functions, no React nodes, no class instances. Props must round-trip through `JSON.stringify`.
- **Owns its own class mapping.** The component maps `variant` + `tone` + `density` to Tailwind classes internally. Callers never pass `className`.
- **Degrades on missing optional props.** A hero with no `eyebrow` renders correctly, not with an empty gap.
- **Renders at every breakpoint** with content at the schema's `min` and `max` lengths. This is a visual regression test, and it's the single highest-leverage test in the system.

## 4. The Section-Level Edit Engine

A single user edit passes through seven stages. Stages 1, 3 and 4 are where reliability is won or lost.

```text
prompt + selection
   │
   ▼
[1] Scope resolution ──────► { scope, targetId, confidence }
   │                              │
   │                       low confidence → ask one question, highlight candidate
   ▼
[2] Context assembly ──────► target props + component schema + theme + sibling summary
   │
   ▼
[3] Constrained generation ► JSON Patch (RFC 6902) via tool call
   │
   ▼
[4] Validation gate ───────► Zod · tokens · refs · a11y · path allowlist
   │                              │
   │                          reject → retry with validator error (max 2) → fail visibly
   ▼
[5] Apply + append to patch log
   │
   ▼
[6] postMessage → preview iframe re-renders
   │
   ▼
[7] Publish → build → immutable static artifact
```

### 4.1 Stage 1 — Scope resolution

A small, fast model classifies the prompt and resolves referents. It returns structure, not prose:

```ts
type Scope =
  | { kind: "theme";       tokens: string[] }
  | { kind: "page";        pageId: string }
  | { kind: "section";     pageId: string; sectionId: string }
  | { kind: "prop";        pageId: string; sectionId: string; path: string }
  | { kind: "add-section"; pageId: string; afterSectionId: string | null }
  | { kind: "tree-op";     op: "move" | "delete" | "duplicate"; sectionId: string }
  | { kind: "code-escape"; description: string }
  | { kind: "ambiguous";   candidates: string[]; question: string };
```

Two things make this work far better than it sounds:

- **Click-to-select supplies the target ID directly.** If the user has a section selected in the editor, `sectionId` is known and the router only has to classify intent. This removes most of the ambiguity that makes prompt editing feel arbitrary. It is the single highest-value UI affordance in the product — borrowed directly from Onlook's model.
- **`ambiguous` is a first-class outcome.** Asking one question and visually highlighting the candidate section is dramatically better than guessing. Users forgive a clarifying question; they do not forgive a wrong global edit.

### 4.2 Stage 2 — Context assembly

Send only what the edit needs:

- the target section's current props
- that component's JSON Schema + prop guidance
- the theme token table
- a one-line summary of each sibling section (`"sec_bb40: Pricing.ThreeTier — three plans"`)

**Never send the whole site.** A hero edit is ~1.5–2k tokens of context instead of ~40k. This is simultaneously the biggest cost lever and the biggest *quality* lever in the system — a narrow context cannot wander. Whole-site-context editing costs roughly an order of magnitude more and produces measurably worse results, because the model has forty other things it could plausibly change.

Cache the registry schemas and system prompt via prompt caching; they are identical across every request.

### 4.3 Stage 3 — Constrained generation

The model returns a JSON Patch through a tool call, using structured outputs / grammar-constrained decoding:

```json
[
  { "op": "replace", "path": "/props/variant", "value": "media-left" },
  { "op": "replace", "path": "/props/density", "value": "spacious" },
  { "op": "replace", "path": "/props/heading", "value": "Slow tea, properly made" }
]
```

Paths are **relative to the resolved scope root**, not absolute into the document. The applier prefixes them. This makes the path allowlist in stage 4 trivial to enforce and makes patches portable across duplicated sections.

No JSX. No prose. No markdown fences to strip. No "here's the updated code" preamble to parse around.

### 4.4 Stage 4 — The validation gate

Five checks, in order, cheapest first:

```ts
function validate(patch: Patch, scope: Scope, doc: SiteDoc): Result {
  // 1. Path allowlist — enforced structurally, not by prompt instruction
  const allowed = allowedPathsFor(scope);           // e.g. /props/**
  if (!patch.every(op => allowed.matches(op.path)))
    return reject("PATH_OUT_OF_SCOPE");

  // 2. Schema — does the result still satisfy the component's contract?
  const next = applyPatch(structuredClone(doc), scope, patch);
  const parsed = registry[target.type].schema.safeParse(next.props);
  if (!parsed.success) return reject("SCHEMA", parsed.error);

  // 3. Token references — no raw hex, no unknown token names
  if (hasRawColorLiteral(next.props)) return reject("RAW_STYLE_VALUE");
  if (unknownTokens(next, doc.theme).length) return reject("UNKNOWN_TOKEN");

  // 4. Referential integrity — every assetId and internal href resolves
  if (danglingRefs(next, doc).length) return reject("DANGLING_REF");

  // 5. Accessibility — contrast on the resulting token pair, alt text present
  if (contrastRatio(next, doc.theme) < 4.5) return reject("CONTRAST");

  return ok(next);
}
```

Three principles behind this:

- **Nothing unvalidated ever reaches the DOM.** A rejected edit is a retry, not a broken site.
- **Bounded reject-and-retry.** Feed the validator's specific error back to the model, retry at most twice, then surface a clear failure. Silent degradation is worse than a visible error.
- **Path allowlists are enforcement; prompt instructions are advisory.** This is the whole answer to "I asked it to change the hero and it restyled my entire site." An edge case is not a prompt-engineering problem when it can be a type-system problem.

### 4.5 Stage 5 — Apply and version

Store the patch, not the resulting document. An append-only patch log gives you undo, per-section revert, a full audit trail and cheap storage for free:

```text
sec_a91c  v1  {op:replace, /props/heading}      2026-08-04T09:12Z  ai
sec_a91c  v2  {op:replace, /props/variant}      2026-08-04T09:13Z  ai
theme     v3  {op:replace, /tokens/color.brand} 2026-08-04T09:15Z  ai
sec_bb40  v4  {op:replace, /props/tiers/0/price} 2026-08-04T09:20Z human
```

Snapshot every *n* patches so document reconstruction stays fast. Surface the log to the user as a visual timeline with thumbnails — users forgive a wrong edit they can undo instantly, and they do not forgive one they cannot find.

## 5. Edit Classes and Expected Behaviour

| Edit class                           | Mechanism                               | Determinism / latency          |
| ------------------------------------ | --------------------------------------- | ------------------------------ |
| Rewrite copy in a section            | Text prop patch                         | Very high / `<1s`              |
| Change palette or typography         | Theme token patch (3–6 values)          | Very high / `<1s`              |
| Change a section's layout            | Variant enum swap                       | High / 1–2s                    |
| Reorder, duplicate, delete a section | Deterministic tree op — **no LLM call** | Exact / instant                |
| Swap an image                        | Asset reference patch — **no LLM call** | Exact / instant                |
| Add a new section                    | Registry selection + prop synthesis     | High / 2–4s                    |
| Genuinely novel component            | Code escape hatch                       | Medium / 10–30s + verify build |

Three of the seven common operations need no model call at all. A large part of making an AI builder feel fast and trustworthy is recognising which user intents are **deterministic operations wearing a natural-language costume**, and routing them straight to code. "Move the testimonials above the pricing" is a tree operation, not a generation task.

### 5.1 Model tiering

| Task | Model class | Why |
|---|---|---|
| Scope resolution / intent routing | Small, fast | Classification with a fixed output shape. Latency dominates. |
| Copy rewriting, token edits, variant swaps | Mid-tier | The schema does the constraining; the model only needs taste and instruction-following. |
| Full-site generation, new-section synthesis | Frontier | Needs judgement about structure, hierarchy and coherence across sections. |
| Code escape hatch — planning | Frontier | Real code, real design decisions. |
| Code escape hatch — applying the edit | Fast-apply model | Mechanical merge. See §9. |

Rough envelope: a single section edit is ~2–4k tokens in / ~300 out. A full-site generation is ~15–25k in. Scoped context is what keeps this economical at volume.

## 6. Frontend and Rendering Stack

Two distinct stacks are in play, and conflating them is a common early mistake. The **builder application** is a dashboard-grade React SPA. The **generated site** is a static artifact. Different requirements, different choices.

### 6.1 Output stack

| Option | Assessment |
|---|---|
| **Astro + React islands** *(recommended)* | Ships zero JavaScript by default and hydrates only interactive islands. A brochure or marketing site is ~95% static markup with two or three interactive pieces — nav drawer, carousel, form. Astro matches that shape exactly, so excellent Core Web Vitals are the default rather than the result of tuning. File-based content collections handle a blog with no CMS. Costs: smaller talent pool, and hydration directives (`client:load`, `client:visible`) need deliberate handling in the registry. |
| **Next.js static export** `output: 'export'` | Ubiquitous familiarity, excellent DX, one mental model shared with the builder app. Strong fallback if Next fluency is the binding constraint. But it ships a full React runtime and hydrates pages that need no JS, and export mode disables image optimisation, middleware and ISR — precisely the features engineers reach for by reflex, which makes it a footgun in an otherwise static pipeline. |
| **Vite + React Router (SPA)** | Simplest build, fastest iteration. But a client-rendered shell is a poor fit for SEO-sensitive sites. Fine for a de-risking spike; not for the shipped product. |

If you choose Astro, author registry components as React and mark hydration in the registry metadata rather than in the component:

```ts
"Nav.Drawer":     { hydrate: "load" },
"Carousel.Cards": { hydrate: "visible" },
"Hero.Split":     { hydrate: false },
```

That keeps the hydration decision a **data** decision, consistent with everything else in the architecture — and it means the AI can add a hero without anyone reasoning about client directives.

### 6.2 Styling: Tailwind with token-backed theming

Tailwind v4 with CSS-variable design tokens declared in `@theme`. The reasoning is about AI controllability, not developer preference:

```css
@theme {
  --color-brand-500: #1E7F5C;
  --color-brand-600: #166248;
  --color-surface:   #FBF9F4;
  --color-ink:       #14211C;
  --font-heading:    "Fraunces", serif;
  --radius-md:       10px;
  --spacing-section: 96px;
}
```

- The model manipulates a small **closed vocabulary** of tokens rather than arbitrary CSS — a search space of dozens of values instead of infinity.
- Tokens live in exactly one place, so a palette change is a single atomic, reversible mutation that cannot be applied inconsistently.
- Tailwind's constrained utility scale is itself a guardrail: the model cannot emit `margin-left: 37px`. Spacing and type stay on a rhythm even when the AI is guessing.
- Purging keeps shipped CSS tiny, which compounds the performance story.

> **Hard rule:** section props must never contain class strings. Components map `variant` + `tone` + `density` to classes internally. The moment the AI can write arbitrary `className` values, every global-style hallucination problem the schema was designed to prevent comes straight back — and the validator has no way to catch it, because any string is a syntactically valid class list.

## 7. Live Preview

| Approach | Fidelity / cost | Verdict |
|---|---|---|
| **Iframe + JSON hot-swap** *(recommended to start)* | A pre-built preview app receives the document over `postMessage` and re-renders. ~50ms updates. No bundler, no `npm install`, no container. Per-session cost effectively zero. | The right first choice. It can only render registry components — which is exactly the scope of a registry-based builder. Works in every browser including iOS Safari. |
| **Sandpack + Nodebox** (CodeSandbox, Apache 2.0) | Real in-browser bundling with npm resolution. Bundler is **self-hostable**. Built without `SharedArrayBuffer`, so it runs in Safari and needs no cross-origin isolation headers. | The pragmatic upgrade path once a code escape hatch exists. Self-hosting removes the third-party runtime dependency. |
| **WebContainer API** (StackBlitz) | Full Node.js in the browser — highest fidelity, and what powers Bolt. Requires `SharedArrayBuffer` and cross-origin isolation headers; historically no Safari support. | **Production for-profit use requires a commercial licence**, and StackBlitz's terms document a 500-sessions-per-month allowance on commercial plans before separate licensing. Prototypes are exempt. Treat as a legal/procurement decision, not a technical one. |
| **Server-side sandbox** (E2B, Firecracker, Docker) | Full fidelity, no browser constraints, but real per-session compute cost. | Reserve for the publish build and for verifying escape-hatch code. Never for interactive preview. |

> **Architectural principle: preview must not require a build.** If changing a headline triggers an `npm install`, you are paying container compute for every trivial edit by every user. Real builds happen once, at publish.

The preview contract is small enough to write down:

```ts
// editor → iframe
{ type: "doc:replace", doc: SiteDoc }
{ type: "doc:patch",   scope: Scope, patch: Patch }
{ type: "select:set",  sectionId: string | null }

// iframe → editor
{ type: "select:click", sectionId: string, rect: DOMRect }
{ type: "render:error", sectionId: string, message: string }
{ type: "measure",      sectionId: string, height: number }
```

`select:click` is what powers click-to-select targeting. `render:error` lets a single misbehaving section show an inline error boundary instead of blanking the preview.

## 8. Build and Deployment Pipeline

1. **Queue.** Publish serialises the site document and enqueues a build job keyed by site ID and document version. Deduplicate rapid re-publishes.
2. **Build.** An ephemeral containerised worker pulls the pinned template repo and the pinned registry version, injects the JSON, and runs the static build. With a pure registry architecture **no user-authored code executes at all**, which removes an entire class of multi-tenant security problem.
3. **Post-process.**
   - Responsive AVIF/WebP derivatives (Sharp), with `width`/`height` emitted to prevent layout shift
   - `sitemap.xml`, `robots.txt`, RSS if a blog collection exists
   - HTML minification, CSS purge verification
   - Integrity checks: broken internal links, missing `alt`, duplicate `<h1>`, missing meta description
4. **Artifact.** Output is an immutable tarball tagged with a content hash, pushed to object storage. The same artifact is what gets served, archived and exported.
5. **Atomic deploy.** Extract to a versioned directory, then flip a symlink:

   ```text
   /sites/ste_8f21/releases/rel-a91c3f/
   /sites/ste_8f21/current -> releases/rel-a91c3f
   ```

   Deploys are instant and atomic. Rollback is flipping the symlink back. Purge the CDN by tag.
6. **Serve.** Apache, LiteSpeed, Nginx or a CDN serves files directly. Cache policy is the one that matters:
   - hashed assets (`/_assets/app.a91c3f.css`) → `Cache-Control: public, max-age=31536000, immutable`
   - HTML → `Cache-Control: public, max-age=0, must-revalidate`

   No application runtime, no database, no per-site process. A published site consumes disk and bandwidth and nothing else.

### 8.1 SEO and accessibility as a publish gate

Because every publish runs through one pipeline, correctness checks can be **gates rather than guidelines**:

| Check | Rule |
|---|---|
| Title + meta description | Present, within length bounds, unique per page |
| Heading structure | Exactly one `<h1>`; no skipped levels |
| Images | `alt` present and non-trivial; explicit dimensions |
| Contrast | Resulting token pairs ≥ 4.5:1 for body text |
| Links | No broken internal links; external links have safe `rel` |
| Weight budget | Fail the build above a configured JS/CSS/image budget |

This turns "the AI won't quietly break your SEO" from a hope into something the pipeline enforces.

### 8.2 Closing the dynamic gap without a CMS

A static site still needs a handful of dynamic behaviours. Each is a narrow shared service, not a reintroduced CMS:

| Need | Static-first solution | Honest limitation |
|---|---|---|
| Contact / lead forms | One shared multi-tenant endpoint relaying to email or CRM, with spam scoring and rate limits | No conditional logic or multi-step flows without more work |
| Site search | Prebuilt index (Pagefind) queried entirely client-side | Index grows with page count; comfortable to low thousands |
| Blog / repeatable content | File-based collections (MDX/JSON) plus a list editor in the builder | Every publish is a rebuild. Not viable at 5,000+ entries or breaking-news cadence |
| Commerce | Third-party embed (Stripe Checkout, Shopify Buy Button) | No native catalogue, inventory or tax logic |
| Bookings, chat, reviews | Third-party embeds | Third-party JS partially erodes the performance advantage |

Be explicit about one thing: **"no CMS" does not mean "no backend."** The builder still needs persistence for site documents, patch logs, users, assets and build jobs. What is eliminated is a per-site CMS runtime on the public request path — which is where the cost, the maintenance and the security exposure actually live.

## 9. The Code Escape Hatch

For the ~5% of requests the registry genuinely cannot express. This is the last thing to build, and it needs hard boundaries.

**Generation constraints.** The model produces a single isolated `.tsx` file that must:

- accept only serializable props, declared as a Zod schema alongside the component
- import only from an allowlisted design-system module — no arbitrary npm, no network, no `fs`
- reference styling through tokens only, same rule as everything else
- export a default component and a named `schema`

**Admission gates.** The file enters the registry only after passing, in a sandbox with no network and no secrets:

1. `tsc --noEmit`
2. ESLint with the registry rule set (no module state, no `className` prop, no raw color literals)
3. A headless render smoke test at three breakpoints, with min-length and max-length props
4. A bundle-size delta check

Fail any gate and the user sees "I couldn't build that safely" — never a half-working component in their site.

**Editing generated code.** Do not ask a frontier model to rewrite whole files. Use the plan/apply split that coding agents converged on: the frontier model emits a "lazy" edit snippet with `// ... existing code ...` markers, and a purpose-trained **fast-apply model** merges it into the file. Reported throughput is around 10,500 tokens/second, cutting token usage roughly 50–60% and latency by an order of magnitude versus full-file rewrites.

## 10. Evaluation Harness

This is not optional infrastructure, and it is not a testing afterthought — it is the only thing standing between you and shipping regressions to live sites every time a model version changes.

Structure it as a fixed corpus of `(site document, prompt, assertions)` triples:

```ts
{
  fixture: "tea-shop-v1",
  selection: "sec_a91c",
  prompt: "make the hero image sit on the left and give it more breathing room",
  assert: [
    { patchTouchesOnly: "/props/**" },
    { pathEquals: "/props/variant", value: "media-left" },
    { pathIn: "/props/density", oneOf: ["comfortable", "spacious"] },
    { unchanged: ["/props/heading", "/props/media/assetId"] },
    { validatorPasses: true },
    { maxLatencyMs: 3000 },
  ],
}
```

Track, per model and per prompt version:

| Metric | Why it matters |
|---|---|
| **First-attempt validation pass rate** | The headline quality number. If this is below ~90% the product feels broken regardless of how good the good cases are. |
| **Scope accuracy** | Did it edit the section the user meant? Separately measured from whether the edit was *good*. |
| **Blast-radius violations** | Should be zero by construction. Any non-zero value is a validator bug, not a model bug. |
| **Retry rate** | Cost and latency driver. |
| **p95 edit latency** | Perceived quality. Above ~3s users start clicking twice. |
| **Cost per edit** | Directly tied to context scoping discipline. |

Gate every model, prompt or schema change on this suite. Without it, every provider update is a coin flip played on customer sites.

## 11. Technical Challenges and Mitigations

| Challenge | Mitigation |
|---|---|
| **Syntactically valid, deterministic output** | Structured outputs over a Zod-derived JSON Schema; validator as gatekeeper; bounded reject-and-retry with the error fed back. In the JSON-tree architecture the problem largely dissolves — there is no syntax to break. |
| **Component-boundary bleed / global override** | Path allowlists enforced in the validator, not requested in the prompt. Theme-scope edits require explicit user confirmation ("this affects all 6 sections"). Registry components are pure with no shared state to corrupt. |
| **Referent ambiguity ("make it bigger")** | Click-to-select supplies the ID. `ambiguous` is a first-class router outcome: ask one question, highlight the candidate. |
| **Assets without a database** | Content-addressed object storage; uploads hashed and referenced by `assetId`; derivatives generated on upload, not at request time; dangling references caught at validation. |
| **Repeatable content without a CMS** | File-based collections plus a purpose-built list editor. Accept the rebuild-per-publish limitation rather than engineering around it. |
| **Cost and latency** | Scoped context (~2k not ~40k), model tiering, prompt caching of registry schemas, and routing deterministic intents away from the model entirely. |
| **SEO/a11y regression from an AI edit** | Automated publish gates (§8.1). Cheaper than trusting the model and far cheaper than user-reported regressions. |
| **User trust** | Visual version timeline with thumbnails, one-click per-section revert, preview-before-publish as the default. |
| **Multi-tenant build safety** | No user-authored code in the registry-only path. With the escape hatch: ephemeral sandbox, no network, no secrets, CPU/memory/wall-clock caps. |
| **Model provider dependency** | Provider-agnostic SDK layer; gate every change on the eval suite. |
| **Registry breadth as a quality ceiling** | Accept it and plan for it. **Output quality equals component-library quality × token-default quality.** An excellent model over a mediocre registry produces mediocre sites, quickly. |

The last row deserves emphasis because it is counter-intuitive to people who think of this as an AI project. The AI layer described in this document is a few thousand lines of routing, patching and validation. The thing that determines whether generated sites look good is the **design system** — the breadth of sections, the quality of the default token palettes, the taste encoded in the variants. Budget accordingly.

## 12. Open-Source Landscape

Several projects solve pieces of this well enough to adopt outright.

| Project | What it is | How to use it |
|---|---|---|
| **[Puck](https://github.com/puckeditor/puck)** · [puckeditor.com](https://puckeditor.com) · MIT | Open-source visual editor for React. A page is a JSON tree whose nodes map to the props of your own components; output is portable JSON with no lock-in. Explicitly licensed for commercial use. | **Strongest adopt candidate.** Almost exactly the substrate described above, already built: editor shell, registry pattern, drag-and-drop, portable data model, field controls. Adopt it for the editor and data layer; the AI routing/patching layer, the registry and the publish pipeline are yours. |
| **[Onlook](https://github.com/onlook-dev/onlook)** · Apache 2.0 | "Cursor for designers" — visual editing of a live React/Next + Tailwind app. DOM selection maps back to source location, and edits are written back through **ASTs** rather than runtime wrappers. | **Best reference for the targeted-edit UX.** Study the click-to-select → resolve-to-source → write-back loop and their architecture docs. This is the pattern that makes "edit this section" feel precise rather than arbitrary. |
| **[bolt.diy](https://github.com/stackblitz-labs/bolt.diy)** · MIT | Open-source Bolt.new: prompt-to-app in the browser, multi-provider via the Vercel AI SDK, WebContainer execution. | **Study, don't fork.** Excellent reference for prompt architecture, streaming UX and in-browser execution. But it is a general code agent — adopting it means inheriting the code-as-source-of-truth substrate. |
| **[open-lovable](https://github.com/firecrawl/open-lovable)** · MIT | Turns any URL into a React app, combining Firecrawl scraping with AI codegen and E2B sandboxes. | The blueprint for an **"import my existing site"** on-ramp — mapping a scraped page onto your registry rather than onto free-form code. |
| **[dyad](https://github.com/dyad-sh/dyad)** · Apache 2.0 (outside `src/pro`) | Local-first open-source AI app builder with published starter templates. | Reference for provider abstraction, BYO-key handling and template-repo structure. |
| **[Sandpack](https://github.com/codesandbox/sandpack)** · [sandpack.codesandbox.io](https://sandpack.codesandbox.io) | CodeSandbox's open-sourced in-browser bundler with the Nodebox runtime. Bundler is self-hostable; built without `SharedArrayBuffer` so it works in Safari. | The preview upgrade path once you need real bundling. [Self-host the bundler](https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler) to drop the third-party dependency. |
| **[WebContainer API](https://webcontainers.io)** | StackBlitz's WebAssembly Node runtime — highest fidelity, powers Bolt. | Note the [commercial licensing requirements](https://webcontainers.io/enterprise) before building on it. |
| **[Morph Fast Apply](https://www.morphllm.com/fast-apply-model)** · [Relace](https://relace.ai/blog/relace-apply-3) | Purpose-trained models that merge a lazy edit snippet into a full file at ~10,500 tok/s using speculative decoding. | For the escape hatch: 50–60% fewer tokens and an order of magnitude less latency than frontier-model file rewrites. |
| **[GrapesJS](https://github.com/GrapesJS/grapesjs)** | Mature framework-agnostic visual builder that outputs HTML/CSS. | Listed for completeness. Wrong output shape for a React component registry; Puck is the better fit. |

### 12.1 Load-bearing dependencies

- **[Astro](https://astro.build)** — static output with React islands
- **[Tailwind CSS v4](https://tailwindcss.com)** — `@theme` CSS-variable design tokens
- **[Zod](https://zod.dev)** — single source of truth for types, runtime validation, editor controls and the LLM's JSON Schema
- **[fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch)** — RFC 6902 application, the atomic unit of every edit
- **[Vercel AI SDK](https://sdk.vercel.ai)** — provider abstraction and structured output generation
- **[Pagefind](https://pagefind.app)** — static search index, no backend
- **[Sharp](https://sharp.pixelplumbing.com)** — build-time responsive AVIF/WebP derivatives

### 12.2 Recommendation

**Adopt Puck's data model and editor primitives. Borrow Onlook's selection-to-edit pattern. Build the AI layer, the component registry and the publish pipeline yourself.** Those three are where the defensible product lives; the rest is solved and permissively licensed.

## 13. Summary of Design Decisions

| Decision | Choice | Because |
|---|---|---|
| Site representation | Typed JSON tree over a curated registry | Makes invalid AI output structurally impossible rather than unlikely |
| Edit unit | Schema-validated JSON Patch, scope-relative paths | Validation in microseconds; trivial undo; enforceable blast radius |
| Styling | Design tokens + variant enums; no class strings in props | Closed vocabulary the model can't escape; atomic theme changes |
| Schema definition | Zod, generating types + validator + form controls + LLM tool schema | One source of truth; the model can't be told about props that don't exist |
| Blast-radius control | Path allowlists in the validator | Enforcement, not prompt instruction |
| Targeting | Click-to-select supplies the section ID | Removes most referent ambiguity before the model sees the prompt |
| Preview | Iframe + JSON hot-swap over `postMessage` | ~50ms updates, zero per-session compute, no build |
| Output framework | Astro + React islands | Zero JS by default; matches the artifact shape; performance by default |
| Deploy | Immutable hashed artifact + symlink flip | Atomic deploys, instant rollback |
| Escape hatch | Deferred; gated by typecheck + lint + render smoke test | Defers the hardest problem without blocking the core loop |
| Quality control | Eval harness gating every model/prompt/schema change | The only defence against silent regressions on live sites |
