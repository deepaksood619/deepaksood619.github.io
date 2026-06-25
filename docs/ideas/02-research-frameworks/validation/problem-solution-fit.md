---
slug: /research-frameworks/validation/problem-solution-fit
title: Problem-Solution Fit Framework
description: Framework for validating problem-solution fit through customer interviews, prototyping, and usage metrics
created: 2026-06-26
updated: 2026-06-26
---

## Problem-Solution Fit Definition

**Problem-Solution Fit:** Evidence that your solution effectively solves a painful problem for a specific customer segment.

**Before building full product:** Validate with minimal viable solution (mockup, landing page, or simple prototype)

---

## Phase 1: Problem Discovery

### Customer Interview Guide

**Goal:** Understand current behavior and pain points

**Questions to ask (10-20 people):**

1. "Walk me through how you currently do [X]?"
2. "What's most frustrating about this process?"
3. "How much time do you spend on this per week?"
4. "What have you tried to solve this?"
5. "How much would it be worth to solve this problem?"

**Listen for:**

- Unprompted frustration (not just polite agreement)
- Workarounds they've built (spreadsheets, tools, manual processes)
- Dollar amounts or time spent
- "I wish there was..."

---

### Problem Validation Metrics

**Strong problem signals:**

- [ ] 70%+ mention problem unprompted
- [ ] Currently paying for imperfect solution
- [ ] Daily/weekly frequency (not occasional)
- [ ] Multiple failed attempts to solve
- [ ] Measurable cost (time, money, lost opportunity)

**Weak problem signals:**

- [ ] Only 20-30% relate to problem
- [ ] "Nice to have" language
- [ ] Using free tools, no paid solutions
- [ ] Can't quantify impact
- [ ] Haven't tried to solve it

---

## Phase 2: Solution Hypothesis

### Minimum Viable Solution (MVS)

**Don't build full product yet.** Test with:

**Landing page:**

- Headline (promise/benefit)
- 3 bullet points (how it works)
- Mockup/screenshot
- Sign up button
- Goal: 10%+ click "Sign up"

**Figma mockup:**

- Key screens only (5-10 screens)
- Show to interviewees
- "Would this solve your problem?"
- Goal: 70%+ say yes

**No-code prototype:**

- Zapier + Airtable + Typeform
- Works but not scalable
- Test with 10-20 early users
- Goal: 50%+ use more than once

---

### Solution Interview Guide

**Show prototype/mockup, then ask:**

1. "What problem does this solve for you?"
2. "How would you use this in your workflow?"
3. "What's missing that you'd need?"
4. "Would you use this over [current solution]? Why?"
5. "If this launched tomorrow, would you sign up?"

**Look for:**

- "This solves my problem" (clear, no hesitation)
- Specific use cases (they've thought about it)
- Comparison to current solution (unprompted)
- "When can I get access?" (urgency)

---

## Phase 3: Usage Validation

### MVP Metrics (First 10-20 Users)

**Engagement metrics:**

- [ ] 50%+ activate (complete onboarding)
- [ ] 30%+ return next day
- [ ] 50%+ use weekly
- [ ] 3+ actions per session (average)

**Retention cohorts:**

- Week 1: 50%+ retained
- Week 2: 30%+ retained
- Week 4: 20%+ retained

**Qualitative signals:**

- [ ] Users ask "When is [feature] coming?"
- [ ] Users invite friends/colleagues
- [ ] Unsolicited positive feedback
- [ ] Complaints when it's down (they depend on it)

---

## Problem-Solution Fit Scorecard

### Scoring (1-5 scale)

**Problem severity:**

- 5: Daily pain, willing to pay $50+/month to solve
- 3: Weekly pain, worth $10-20/month
- 1: Occasional annoyance, wouldn't pay

**Solution effectiveness:**

- 5: "This solves my problem completely"
- 3: "This helps but I still need [workaround]"
- 1: "This doesn't really solve it"

**Alternative comparison:**

- 5: "Way better than current solution, would switch immediately"
- 3: "About the same, might try"
- 1: "Current solution is fine"

**Behavioral intent:**

- 5: "Where do I pay?" or "When can I use this?"
- 3: "I'd try this"
- 1: "Interesting idea"

**Total score:**

- 18-20: Strong fit, build MVP
- 12-17: Moderate fit, refine solution
- 4-11: Weak fit, pivot or explore different problem

---

## Examples

### Good Problem-Solution Fit

**Problem:** API testing with Postman is slow and expensive
**Evidence:**

- 80% of developers interviewed complain about Postman's speed
- 70% say it's too expensive for small teams ($36/user/month)
- All have tried alternatives (Bruno, Thunder Client, Insomnia)

**Solution:** Lightweight, fast API client with 70% cheaper pricing
**Evidence:**

- Mockup shown to 15 developers, 14 said "I'd use this"
- 10 asked "When is it launching?"
- 5 offered to pre-pay
- First 20 users: 75% used it 3+ times in first week

**Scorecard:** 19/20 (strong fit)

---

### Weak Problem-Solution Fit

**Problem:** People forget to follow up with contacts
**Evidence:**

- 50% say "yeah that happens sometimes"
- None have tried solutions
- Can't quantify cost ("I don't know, maybe I lose a few opportunities?")

**Solution:** WhatsApp reminder bot
**Evidence:**

- Mockup shown to 20 people, 8 said "that's cool"
- 0 asked when they can use it
- First 20 users: 20% used it once, 0% used it again

**Scorecard:** 8/20 (weak fit, pivot needed)

---

## Common Pitfalls

1. **Confirmation bias** - Only asking people who agree
2. **Leading questions** - "Would you use a tool that does X?" (of course they say yes)
3. **Ignoring behavior** - People say they'd pay but don't
4. **Building too much** - Spending months on full product before validation
5. **Feature creep** - Adding features instead of validating core value

---

## Next Steps After Validation

**Strong fit (18-20):**
→ Build MVP (4-8 weeks), get first 100 users

**Moderate fit (12-17):**
→ Refine solution, re-test with updated prototype

**Weak fit (4-11):**
→ Pivot to different solution or different problem

---

## Resources

- [The Mom Test](http://momtestbook.com/) - Customer interview guide
- [Lean Customer Development](https://www.amazon.com/Lean-Customer-Development-Cindy-Alvarez/dp/1449356354)
- [Testing with Humans](https://testingwithhumans.com/)
