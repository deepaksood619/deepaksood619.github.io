---
slug: /research-frameworks/gtm/messaging-app-distribution
title: Messaging App Distribution - WhatsApp & Telegram GTM
description: Go-to-market strategy for WhatsApp/Telegram bots including viral loops, referrals, and conversational onboarding
created: 2026-06-26
updated: 2026-06-26
---

## WhatsApp/Telegram GTM Strategy

**Core advantage:** No app download, lives in messaging app users already use

## Platform Choice

**Start with Telegram (Month 1-2):**

- Free Bot API (no costs)
- Easy approval process
- Developer-friendly
- Test product-market fit

**Add WhatsApp (Month 3+):**

- 2.7B users (vs Telegram's 900M)
- Business API costs ($0.005-0.09/message)
- Requires Facebook Business Manager approval
- Mainstream adoption

## Onboarding Flow

**Zero-friction signup:**

1. User sends "Start" or clicks link
2. Bot responds instantly with value
3. No email, no password, just chat
4. First action within 30 seconds

**Example:**

```text
User: /start
Bot: 👋 I'm your AI reminder assistant!

Try me: "Remind me to call John tomorrow at 2pm"
```

## Viral Distribution

### 1. Referral Loops

**Invite friends mechanism:**

```text
Bot: "Want 50 extra reminders? Share this link:
t.me/YourBot?start=ref_user123

For every friend who joins, you both get +50!"
```

**Tracking:** Unique ref codes per user

---

### 2. Share-to-Unlock

**Lock premium features behind shares:**

```text
Bot: "⭐ Unlock AI insights by sharing with 3 friends!"
[Share Button]
```

---

### 3. Group Bots

**Allow in group chats:**

- Visible to all group members
- "@YourBot remind us about standup at 9am"
- Every interaction is advertising

---

## WhatsApp Business API

**Costs (per conversation, not per message):**

- User-initiated: $0.005-0.02
- Business-initiated: $0.03-0.09
- Free tier: 1,000 user-initiated/month

**Best practices:**

- User-initiated is cheaper (wait for user to message first)
- 24-hour window (free messages within 24h of user message)
- Template messages (pre-approved by WhatsApp)

## Launch Strategy

**Week 1-2: Telegram MVP**

- Soft launch to friends/family (50 users)
- Iterate based on feedback
- Ship daily

**Week 3-4: Public Telegram Launch**

- Product Hunt "Telegram Bot of the Week"
- Post in Telegram channels/groups
- Indie Hackers, Reddit

**Month 2-3: WhatsApp Launch**

- Apply for Business API (2-4 week approval)
- Migrate existing users
- Broader marketing (WhatsApp = mainstream)

## Pricing

**Free:**

- 50 actions/month
- Core features
- Telegram only

**Pro ($5-10/month):**

- Unlimited actions
- WhatsApp support
- AI features
- Priority support

## Growth Metrics

**Month 1 (Telegram):**

- 500-1,000 users
- 10-20 paid users
- $50-200 MRR

**Month 3 (WhatsApp added):**

- 3,000-5,000 users
- 100-200 paid users
- $500-2K MRR

**Month 6:**

- 20,000+ users
- 1,000+ paid users
- $5-10K MRR

## Distribution Channels

1. Product Hunt (Telegram bot launch)
2. BotList directories (Telegram, WhatsApp)
3. Reddit (r/Telegram, r/productivity)
4. Twitter/X (demo videos, use cases)
5. WhatsApp Status (user shares)
6. Group chats (viral within groups)

## Resources

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)
- [WhatsApp Pricing](https://developers.facebook.com/docs/whatsapp/pricing)
