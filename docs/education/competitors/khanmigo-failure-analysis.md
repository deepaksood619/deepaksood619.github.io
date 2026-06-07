---
title: Why Khanmigo Failed - A Post-Mortem Analysis
source_linkedin: Sal Khan LinkedIn post (2026-05-29)
source_nytimes: https://www.nytimes.com/2026/05/16/business/tyrangiel-ai-book-openai-khan-academy-khanmigo.html
type: case-study
tags: [ai-tutoring, edtech-failure, product-market-fit, khanmigo]
date_analyzed: 2026-05-29
---
## Why Khanmigo Failed - A Post-Mortem Analysis

**TL;DR:** Khan Academy's AI tutor Khanmigo, launched in March 2023 via partnership with OpenAI, failed to revolutionize education despite significant technical achievement. The failure stemmed from misaligned user incentives, technical limitations, wrong target user focus, and the fundamental insight that **"learning still happens through practice, with teachers at the center"** - not through AI tutoring alone.

## Sal Khan's Own Assessment (May 2026)

From his LinkedIn post, Khan explicitly acknowledged the pivot:

```text
What's been clear is that learning still happens through practice,
with teachers at the center. AI can help when a student is stuck,
but it works best as part of a broader instructional experience.

So we've been rebuilding Khan Academy to better support that.
```

**Key admission:** After 3+ years with Khanmigo, Khan Academy is **rebuilding from scratch** - a clear signal that the AI tutor model didn't work as envisioned.

## The Five Failure Modes

### 1. Product-Market Misfit: Students Want Answers, Not Tutoring

**The core tension:**

- **What Khanmigo offered:** Socratic questioning, productive struggle, gentle nudges (mimicking Sal Khan's tutoring style)
- **What students wanted:** Quick answers to homework problems

**Evidence from NYT article:**

```text
"Some students immediately found it helpful. Others lost interest
upon discovering it would not simply hand over the answers."
```

**Why this matters:** The product was optimized for pedagogical correctness, not user engagement. Students experiencing friction (homework, time pressure, lack of intrinsic motivation) don't want to be tutored - they want efficiency. Khanmigo's refusal to provide answers made it **less useful than ChatGPT** for most student use cases.

**Economic parallel:** This is Clayton Christensen's "jobs to be done" framework. Students weren't hiring Khanmigo to **learn better** - they were hiring it to **finish homework faster**. The product solved the wrong job.

### 2. Wrong Primary User: Teachers `>` Students

**Initial assumption:** Build AI tutor for students (scaling Sal Khan's 1-on-1 tutoring)

**Reality discovered:**

```text
"Teachers tended to be more inspired users, and over time,
Khan Academy shifted its engineering focus to add more than 30 new
features for them"
```

**Why this happened:**

- **Teachers** have professional motivation to explore pedagogical tools
- **Teachers** aren't trying to game the system for quick answers
- **Teachers** understand the value of AI for differentiation, not just answer-getting

**Strategic consequence:** The product was built for the wrong user persona. A teacher-focused AI tool would have different UX, different features, different pricing - fundamentally different product strategy.

### 3. Technical Limitations: Hallucinations & Cost

**Math hallucinations:**

```text
"GPT-4 was awful at math — inconsistent and easily bullied by
users into making right answers wrong."
```

**Historical inaccuracies:**

- Asked about Trail of Tears, GPT-4 described Andrew Jackson's forced displacement as a "government-sponsored hike"
- This required extensive red-teaming and guardrails

**Cost structure:**

- Context stuffing (loading student history, learning standards, progress) was expensive
- "Goldilocks problem": Too little context = ineffective, too much = unaffordable
- Operating costs covered by Khan Academy, then Microsoft funding for free K-12 access
- **Implication:** Unit economics never worked without subsidy

**Instability:**

```text
"Each new update could, and often did, produce a fresh cascade of
hallucinations and unpredictability, making the earlier progress obsolete."
```

**Bottom line:** The product was built on unstable foundation (GPT-4 in early 2023) that required constant firefighting. Not sustainable for educational reliability.

### 4. Partnership Dysfunction: OpenAI's Chaotic Execution

**Warning signs of bad partnership:**

1. **No legal agreements:** "That implies there were other legal agreements" - DiCerbo laughed when asked about legal recourse
2. **No technical documentation:** OpenAI provided API access but minimal guidance
3. **Unannounced public launch:** OpenAI released ChatGPT-3.5 (Nov 2022) without informing Khan Academy
4. **Reputational damage:** ChatGPT cheating scandal led schools to ban it, harming Khan Academy's bet
5. **Vegas-style elopement:** "OpenAI was moving with such speed and secrecy that there was none of that, just a Vegas-style corporate elopement"

**Sal Khan's reaction:**

```text
"We're betting the org on this, and now the baby is getting thrown out with the bathwater." He was "annoyed"
```

**Power imbalance:** Khan Academy was one of many OpenAI partners (Duolingo, Stripe, Morgan Stanley). Limited attention, limited support, limited control.

**Strategic mistake:** Betting organizational reputation on unstable partner with misaligned incentives (OpenAI wanted credibility, Khan Academy wanted product stability).

### 5. Engagement Failure: No Revolution Materialized

**Kristen DiCerbo's assessment (2024):**

```text
"So far I am not seeing the revolution in education"
```

**Sal Khan's admission:**

```text
"We need to be realistic that there's no simple answer for student engagement"
```

**Metrics disconnect:**

- Khan Academy touted "731 percent increase in Khanmigo's reach year over year"
- But: Reach ≠ Engagement ≠ Learning outcomes ≠ Transformation
- Classic vanity metric: growth from small base doesn't indicate product-market fit

**Parallel product development:**

- Khan Academy developed Writing Coach (essay drafting tool)
- Continued investing in pre-AI core offerings
- **Signal:** Diversifying away from AI tutor model indicates lack of confidence

## The Fundamental Insight: AI as Complement, Not Replacement

**Sal Khan's core realization:**

```text
Learning still happens through practice, with teachers at the center.
AI can help when a student is stuck, but it works best as part of a broader instructional experience.
```

**What this means:**

1. **Practice is primary** - Students need structured problem sets, not conversational tutoring
2. **Teachers are irreplaceable** - AI is assistive technology, not autonomous pedagogy
3. **Integration matters** - AI must be embedded in curriculum/workflow, not standalone product

**Why Khanmigo violated this:**

- It was a **standalone chatbot**, not integrated into practice workflow
- It required students to **seek help** rather than scaffolding help into exercises
- It assumed **intrinsic motivation** (students choosing to be tutored) rather than designing for extrinsic reality

## What Khan Academy Is Building Instead

**From Sal's post:**

```text
We've been rebuilding Khan Academy to better support that.
We shared some of this last fall, and the full launch is just months away.
```

**Likely direction (based on "practice with teachers at center"):**

1. **AI-enhanced exercises** - Hints/explanations embedded in problem sets, not separate chat
2. **Teacher dashboards** - AI-powered insights for differentiation and intervention
3. **Adaptive practice** - AI selecting next problems based on mastery, not conversational tutoring
4. **Workflow integration** - AI as invisible assistant in existing Khan Academy UX

**Strategic shift:** From "AI tutor" to "AI-enhanced learning platform" - AI as infrastructure, not interface.

## Lessons for AI in Education

### 1. User Incentives Trump Pedagogy

**Khanmigo lesson:** The pedagogically correct solution (Socratic tutoring) lost to user reality (students want answers).

**Design implication:** Either (a) design for actual user jobs-to-be done, or (b) create incentive structures that align user behavior with learning goals (gamification, teacher oversight, assessment integration).

### 2. Teachers `>` Students as Early Adopters

**Khanmigo lesson:** Teachers were more engaged users than students.

**Market strategy:** B2B (school/district sales via teacher value prop) may be better path than B2C (direct-to-student viral adoption).

### 3. Standalone AI Tools Don't Transform Workflows

**Khanmigo lesson:** Separate chatbot requires context-switching, lacks integration with practice/assessment.

**Product strategy:** AI must be embedded in existing workflows (Google Docs suggestions, GitHub Copilot autocomplete) not parallel interface (Clippy, chatbots).

### 4. LLM Instability Is Existential Risk

**Khanmigo lesson:** Every GPT-4 update broke previous prompts, required constant firefighting.

**Technical strategy:** Either (a) self-host open models for stability, or (b) build abstraction layer to insulate from provider changes, or (c) accept perpetual maintenance cost.

### 5. Partnerships Require Alignment & Contracts

**Khanmigo lesson:** Informal partnership with OpenAI led to reputational damage and lack of support.

**Business strategy:** Even with mission-aligned partners, formalize agreements, ensure dedicated support, maintain control over public narrative.

## Comparison to Other AI Tutoring Failures

**Similar pattern:** Standalone AI tutoring products have uniformly failed to achieve transformation:

- Khanmigo (Khan Academy) - rebuilding
- Tutor CoPilot - low engagement
- Duolingo Max (GPT-4 powered) - supplementary feature, not core product
- Quizlet Q-Chat - supplementary feature

**Success pattern:** AI embedded in practice/workflow:

- Duolingo sentence construction (AI-generated exercises)
- Quizlet test generation (AI creating practice from content)
- Khan Academy's likely future (AI-enhanced exercises)

**Hypothesis:** Conversational AI tutoring is pedagogically sound but behaviorally misaligned. The winning pattern is **invisible AI** that scaffolds practice, not **visible AI** that requires seeking help.

## Unanswered Questions

1. **What were actual engagement metrics?** (Sessions/user, retention, completion rates)
2. **Did Khanmigo improve learning outcomes?** (No RCT data published)
3. **What % of users were organic vs assigned by teachers?** (Intrinsic vs extrinsic motivation)
4. **What was unit cost per session?** (Economic viability without subsidy)
5. **What is Khan Academy's new product specifically?** (Launches "months away" as of May 2026)

## Connections

Related analysis:

- [Khan Academy Analysis](education/competitors/moocs/khan-academy-analysis.md) - Broader organizational strategy
- AI Tutoring Market - Category analysis needed
- Personalized Learning - Pedagogical theory vs implementation reality

**Contradicts assumption in:**

- Early AI tutoring optimism (Bloom's 2-sigma problem solved by LLMs)

**Supports:**

- Human-in-the-loop AI systems (teachers at center)
- Practice-based learning over conversational tutoring

## Startup Implications

**For AI tutoring products:**

1. ❌ **Don't build:** Standalone AI tutoring chatbots for students
2. ✅ **Do build:** AI-enhanced practice systems, teacher tools, workflow-embedded AI

**For edtech generally:**

1. **User incentives `>` pedagogical theory** - Design for behavior, not ideals
2. **Teachers are buyers, students are users** - B2B sales, B2C engagement
3. **Integration `>` standalone tools** - Embed in existing workflows
4. **Evidence before scale** - Small RCTs before large launches
5. **Partnership governance** - Formalize agreements even with mission-aligned partners

**Economic reality:**

- AI tutoring at `<`$20/month hard to monetize with LLM costs
- Enterprise/district sales more viable than consumer subscription
- Free models (ad-supported, freemium) face engagement cliffs

## Meta-Lesson: When Experts Build Wrong Thing

**Irony:** Sal Khan is most admired educator in edtech, yet Khanmigo still failed.

**Why expertise didn't prevent failure:**

1. **Subject matter expertise ≠ product intuition** - Khan understood pedagogy, not behavior
2. **Mission alignment ≠ market alignment** - What should work ≠ what does work
3. **Early access created false confidence** - GPT-4 amazement led to wrong product bets

**Broader pattern:** Domain experts often build pedagogically correct but behaviorally misaligned products. Need balance of **learning science + behavioral economics + product sense**.

## Timeline

- **Summer 2022:** Khan Academy gets early GPT-4 access
- **Nov 2022:** OpenAI launches ChatGPT-3.5 publicly (without informing Khan Academy)
- **March 2023:** Khanmigo launches alongside GPT-4
- **2024:** Kristen DiCerbo: "Not seeing the revolution"
- **2024-2025:** Khan Academy pivots to rebuilding platform
- **May 2026:** Sal Khan announces "we've been rebuilding" - new launch "months away"

**Duration:** ~3 years from launch to acknowledged pivot. Longer than typical startup pivot cycle, likely due to (a) nonprofit patience, (b) sunk cost (reputation bet), (c) Microsoft subsidy reducing urgency.

## Teacher Perspective: Reddit r/Teachers Discussion

**Source:** [Reddit thread](https://www.reddit.com/r/Teachers/comments/1squ1uh/sal_khan_admitted_khanmigo_was_a_nonevent_for/) (344 upvotes, 42 comments)

### The Core Problem: "Students Aren't Great at Asking Questions Well"

**Sal Khan's admission (via Chalkbeat):**

> "Khanmigo was 'a non-event' for most students. They just didn't use it much."

**His analogy:**

> "Passive AI assistance is like a student sitting in the back of the classroom who won't raise their hand — no amount of availability changes the outcome if the kid isn't motivated or doesn't know what to ask."

**Chief Learning Officer (Kristen DiCerbo):**

> "Students aren't great at asking questions well."

### Teacher Reactions: "We Already Knew This"

**Top comment (246 upvotes):**

> "So basically, kids have to be explicitly taught how to come up with and ask cogent research questions on a topic in order to effectively find information. Something I think most teachers know."

**Key insight (73 upvotes):**

> "'Nobody is talking about this' means 'We didn't actually ask the people who are experts in helping kids learn this what that process typically looks like.'"

**The brutal truth (46 upvotes):**

> "The problem with 75% of student facing ed-tech is that it assumes students are going to operate it in good faith, willing to learn. If students were willing to learn, 95% of education problems would be solved."

### What Teachers Observed in Practice

**Pattern 1: Self-Directed Students Don't Need It**

> "The students who'd benefit most from tutoring tools are often the ones least equipped to use them independently. The kids who are already self-directed and curious? They're fine. They'll ask good questions and dig deeper. But the struggling students? They click around for two minutes, get a generic answer, and peace out."

**Pattern 2: Students Use It Wrong**

> "Most of these kids just copy and paste questions into ChatGPT and copy the answer word for word. Either that or they say 'I don't understand' instead of asking to be more specific."

**Pattern 3: Metacognitive Skills Missing**

> "You can give a kid access to the world's best AI tutor, but if they don't know what they don't understand, they won't ask. And if they do ask, it's usually surface-level."

**Research validation:**

> "When you ask students to formulate a question or discover a result all of their cognitive resources are expended on the search process. There's nothing left over for the learning target." - Paul Kirschner

### Sal Khan Was Warned (And Ignored Teachers)

**Teacher comment (17 upvotes):**

> "Sal was told this multiple times from multiple experts in multiple meetings when he pushed Khanmigo on all students at his school 4 years ago."

**Another teacher:**

> "The bozos they sent to our campus to market it seemed like they secretly suspected this too."

### The ONE Use Case That Actually Works

**Teacher success story (92 upvotes):**

> "The only positive use case I've found is on HW corrections. I go over common mistakes in class and leave some light annotation but some students really need a one on one back-and-forth. I tell them to take a picture of the problem and ask the AI what they did wrong and what they don't understand. **This rigid directive is the only way they actually use the AI effectively** and ensures the AI actually targets topics the student doesn't understand."

**Why it works:**

- **Rigid directive** (not open-ended "use AI to learn")
- **Specific context** (HW correction, not general tutoring)
- **Teacher scaffolding** (go over mistakes first, then AI for 1:1)
- **Guaranteed relevance** (AI targets student's actual mistake)

### What Teachers Say AI IS Good For

**Working use cases:**

1. **Leveling texts** - Making reading materials accessible
2. **Breaking down syllabi** - Chunking complex requirements
3. **Quiz/test generation** (with heavy editing) - Time saver if formatted correctly
4. **Advanced spell check** - Grammar, clarity improvements

**What doesn't work:**

- Open-ended tutoring (students don't know what to ask)
- Self-directed learning (assumes motivation exists)
- Replacing teacher scaffolding (AI can't build metacognition)

### Age-Specific Insight: Interface Barrier (6-8 Year Olds)

**Parent comment:**

> "My kids tried out Khanmigo story creation half a year ago, they loved it. The biggest problem, at 6 and 8, **they can't type and they don't like to use the speech interface**. So I became their 'interface' to the app. It's time consuming on my end, but I am glad to see their creativity flow."

**Insight:** Even when content works, interface is barrier:

- 6-8 year olds: Can't type fast enough
- Don't like speech interface (unclear why - privacy? accuracy? awkwardness?)
- Requires adult as "interface" (not scalable)

### Teacher Sentiment on EdTech

**The pattern (12 upvotes):**

> "'Nobody is talking about this' equals 'nobody asked a teacher' about a program designed to teach students."

**The frustration (22 upvotes):**

> "I think my next job will be an education consultancy that's 100% focus groups and first-person surveys from accredited teachers who have been in a classroom in the past 5 years. Districts can pay me to ignore my research rather than ignore my bitching for free."

**On Sal Khan specifically:**

> "Khan, to me, has always had this tech-bro attitude and a 'saviour of the dying education system' Messiah complex. Stop blaming the system and the kids, Khan, and you'll figure out where the problem is."

**The fundamental insight (46 upvotes):**

> "So they discovered why the teaching profession exists?"

### What This Means for Product Design

**Teachers are telling us:**

1. **Don't assume self-direction** - Struggling students won't use open-ended tools
2. **Rigid `>` Flexible** - Specific directives work, open exploration fails
3. **Scaffold, don't replace** - AI assists teacher-led instruction, doesn't replace it
4. **Context-specific `>` General** - HW corrections work, generic tutoring doesn't
5. **Interface matters** - Typing/speech barriers for young students
6. **Ask teachers FIRST** - Not after product launch

**The money quote:**

> "If students were willing to learn, 95% of education problems would be solved."

**Translation:** EdTech that assumes motivation/metacognition is DOA.

---

**Evidence Quality:** Strong - Based on direct quotes from founder, leadership, detailed NYT investigative reporting with insider access, and frontline teacher experiences (r/Teachers community, 344 upvotes).

**Last Updated:** 2026-05-30

## Links

- https://www.reddit.com/r/Teachers/comments/1squ1uh/sal_khan_admitted_khanmigo_was_a_nonevent_for/
- [Josh Tyrangiel book excerpt: How OpenAI and Khan Academy Made a Chatbot - The New York Times](https://www.nytimes.com/2026/05/16/business/tyrangiel-ai-book-openai-khan-academy-khanmigo.html)
- [Why Sal Khan is rethinking how AI will change schools - Chalkbeat](https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/)
