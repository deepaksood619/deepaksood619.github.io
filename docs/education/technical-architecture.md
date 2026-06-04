# Technical Architecture

**Last Updated:** 2026-06-04

---

## Core Innovation

**Not just ChatGPT wrappers** - we build real adaptive learning systems

### 1. Real-Time AI Question Generation
- Generate infinite personalized questions on-demand
- Contextual to learner's weak areas
- Adaptive difficulty based on performance
- Multi-modal (code, SQL, system design, MCQ, essays)

### 2. Algorithmic Adaptivity (IRT/BKT)
- **IRT (Item Response Theory):** Match learner ability to question difficulty
- **BKT (Bayesian Knowledge Tracing):** Track probability of concept mastery
- Real-time difficulty adjustment (not static question banks)
- Mastery-based progression (can't advance until 80% correct)

### 3. Multi-Agent Architecture
- 10+ specialized AI agents (not one general chatbot)
- Each optimized for specific task
- Coordinated via central orchestrator
- See agent details below

---

## AI Agent System

### Agent 1: Tutor Agent
- **Role:** Explain concepts, answer questions, provide hints
- **Model:** Claude 3.5 Sonnet (now), fine-tuned Llama 3 (Month 6+)
- **Cost:** ₹2-4 per interaction
- **Features:** Socratic method, never gives direct answers, guides discovery

### Agent 2: Mock Interview Agent
- **Role:** Conduct technical + behavioral interviews
- **Model:** GPT-4 for conversational (voice-enabled)
- **Cost:** ₹20-40 per session
- **Features:** Real-time feedback, tracks body language (future), rates answers

### Agent 3: Mentor Agent
- **Role:** Career advice, skill gap analysis, goal setting
- **Model:** Claude 3.5 Sonnet + RAG (job market data)
- **Cost:** ₹10-20 per session
- **Features:** Personalized career paths, salary predictions, job recs

### Agent 4: Code Review Agent
- **Role:** Review code quality, suggest improvements, best practices
- **Model:** Fine-tuned CodeLlama
- **Cost:** ₹5-10 per review
- **Features:** Performance analysis, security checks, refactoring suggestions

### Agent 5: Resume Agent
- **Role:** Build, optimize, ATS-check resumes
- **Model:** Claude 3.5 Sonnet
- **Cost:** ₹20 per review/build
- **Features:** ATS optimization, keyword analysis, format templates

### Agent 6: Project Guide Agent
- **Role:** Suggest projects, guide implementation, review outcomes
- **Model:** GPT-4 + code execution sandbox
- **Cost:** ₹10-30 per project
- **Features:** Step-by-step guidance, code hints, debugging help

### Agent 7: Assessment Generator Agent
- **Role:** Generate custom assessments from JD/topics
- **Model:** Claude 3.5 Sonnet
- **Cost:** ₹3-8 per assessment
- **Features:** JD parsing, skill extraction, difficulty calibration

### Agent 8: Feedback Agent
- **Role:** Detailed explanations on wrong answers
- **Model:** Fine-tuned Llama 3
- **Cost:** ₹4-5 per feedback
- **Features:** Error pattern detection, concept gaps, practice recommendations

### Agent 9: Strength/Weakness Profiler Agent
- **Role:** Continuous skill assessment, visual dashboards
- **Model:** Python analytics + ML clustering
- **Cost:** ₹1-2 per update (compute only)
- **Features:** Skill heatmaps, growth tracking, peer comparisons

### Agent 10: Hiring Match Agent
- **Role:** Match candidates to jobs based on skills
- **Model:** Embedding-based similarity (Vector DB)
- **Cost:** ₹2-5 per match
- **Features:** Job scraping, skill mapping, application automation

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14 (React 18)
- **UI:** Tailwind CSS + shadcn/ui
- **State:** Zustand + React Query
- **Real-time:** WebSockets (Socket.io)

### Backend
- **API:** Node.js + Express (REST + GraphQL)
- **Auth:** Clerk / Auth0 (SSO support)
- **Payments:** Razorpay (India), Stripe (international)
- **Jobs:** BullMQ (Redis-based)

### Database
- **Primary:** PostgreSQL (user data, transactions)
- **Cache:** Redis (sessions, leaderboards)
- **Vector:** Pinecone / Weaviate (semantic search, job matching)
- **Analytics:** ClickHouse (events, usage tracking)

### AI/ML
- **LLM APIs:** Claude 3.5 Sonnet, GPT-4 (Phase 1)
- **Self-hosted:** Llama 3 fine-tuned (Phase 2+)
- **Code Execution:** Judge0 / Piston (sandboxed)
- **Embeddings:** OpenAI text-embedding-3

### Infrastructure
- **Hosting:** AWS / GCP (start with AWS)
- **CDN:** Cloudflare
- **Monitoring:** Datadog / New Relic
- **Logging:** ELK Stack

---

## AI Cost Optimization Roadmap

### Phase 1 (Month 1-6): API-Based
- Use Claude 3.5 Sonnet API
- Cost: ₹1.50-2/question
- Quick to market, no ML ops

### Phase 2 (Month 6-12): Fine-Tuning
- Fine-tune Llama 3 on expert questions
- Self-host on AWS EC2/GCP
- Cost: ₹0.60/question (60% reduction)
- Requires ML engineer

### Phase 3 (Month 12-18): Custom Models
- Build smaller task-specific models
- Distill from Llama 3
- Cost: ₹0.30/question (80% reduction)
- Requires ML team (2-3 people)

### Phase 4 (Month 18+): Edge Optimization
- Cache common questions/feedback
- Pre-generate question banks (indexed)
- Cost: ₹0.10-0.20/question (90% reduction)

**Goal:** ₹24 crore AI costs → ₹6 crore (18% → 5% of revenue)

---

## Open Source Strategy

### Year 1: Closed (Build & Validate)
- Focus on product-market fit
- Validate algorithms work
- Build community trust

### Year 2: Open Algorithms
- IRT/BKT implementations (MIT license)
- Question generation prompts
- Dataset of 10K+ questions (Creative Commons)

### Year 3: Selective Platform
- Frontend components (UI library)
- API SDKs (Python, JavaScript)
- Self-hosting guides
- Keep core platform proprietary (non-profit IP)

**Why selective:**
- Prevent for-profit clones
- Maintain mission control
- Balance transparency with sustainability

---

## Security & Privacy

**Data Protection:**
- End-to-end encryption (user data at rest)
- GDPR/CCPA compliant
- Regular security audits
- Bug bounty program (Year 2)

**Code Security:**
- Sandboxed code execution (Judge0/Piston)
- Rate limiting (prevent abuse)
- DDoS protection (Cloudflare)

**Privacy:**
- Minimal data collection
- User controls (delete data anytime)
- No selling data (non-profit = no incentive)

---

## Scalability Plan

### 100K Users (Month 12)
- 2-3 backend instances
- PostgreSQL primary + 1 read replica
- Redis single instance
- Cost: ₹2-3L/month infra

### 1M Users (Month 18)
- 10+ backend instances (auto-scaling)
- PostgreSQL sharding
- Redis cluster
- CDN for static assets
- Cost: ₹10-15L/month infra

### 5M Users (Month 24)
- 50+ backend instances
- Multi-region deployment (AWS Mumbai + Singapore)
- Dedicated ML inference servers
- Cost: ₹40-50L/month infra

**Cost per user drops as we scale** (economies of scale)
