# Technical Architecture

## Feedbacks / Questions

1. Onboarding Agent
2. Notification Agent (where we can send targeted emails/notifications to bring back the user for practice, and keep them on track to achieve their goal)
3. Revise Agent - Spaced repetition
4. TODO / Queue Agent - That keeps track of things that we need to teach user about, instead of jumping to it right away
	1. We can have a queue that keeps track of what we need to achieve and other agents can pull from this and make a learning plan for the user dynamically
5. Fallback agent - that tries to satisfy user request to best of its ability

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

## AI Agent System

### Agent 1: Tutor Agent

- **Role:** Explain concepts, answer questions, provide hints
- **Features:** Socratic method, never gives direct answers, guides discovery

### Agent 2: Mock Interview Agent

- **Role:** Conduct technical + behavioral interviews
- **Features:** Real-time feedback, tracks body language (future), rates answers

### Agent 3: Mentor Agent

- **Role:** Career advice, skill gap analysis, goal setting
- **Features:** Personalized career paths, salary predictions, job recs

### Agent 4: Code Review Agent

- **Role:** Review code quality, suggest improvements, best practices
- **Features:** Performance analysis, security checks, refactoring suggestions

### Agent 6: Project Guide Agent

- **Role:** Suggest projects, guide implementation, review outcomes
- **Features:** Step-by-step guidance, code hints, debugging help

### Agent 7: Assessment Generator Agent

- **Role:** Generate custom assessments from JD/topics
- **Features:** JD parsing, skill extraction, difficulty calibration

### Agent 8: Feedback Agent

- **Role:** Detailed explanations on wrong answers
- **Features:** Error pattern detection, concept gaps, practice recommendations

### Agent 9: Strength/Weakness Profiler Agent

- **Role:** Continuous skill assessment, visual dashboards
- **Features:** Skill heatmaps, growth tracking, peer comparisons
