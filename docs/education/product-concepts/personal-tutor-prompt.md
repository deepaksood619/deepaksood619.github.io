# Personal Tutor Prompt

## 1. Project Overview

- **Platform purpose**: Deliver personalized, interactive tutoring experiences for K–12 and college prep students
- **Key components**: Lesson planner, assessment engine, progress analytics, adaptive recommendation, communication hub, admin console

## 2. Functional Features

### 2.1 User Roles & Permissions

- **Student**: sign-up/login, view assigned lessons/tests, submit answers, track progress
- **Tutor (Educator)**: create/manage lessons and quizzes, review performance, adjust learning paths, communicate with students/parents
- **Parent**: view child's report, receive notifications, request sessions
- **Admin**: manage users, roles, system configuration, view global analytics
- **RBAC**: define role-based access control for each REST/GraphQL endpoint

### 2.2 Lesson Planning

- **Lesson Model**: title, description, subject, grade level, duration, learning objectives, tags
- **Content Types**: text, image, video, PDF upload, embedded interactive widgets
- **Scheduling**: calendar integration (Google Calendar API), recurring sessions, timezone awareness
- **Versioning**: track edits; allow rolling back to previous versions

### 2.3 Assessments & Quizzes

- **Question Types**: multiple-choice, true/false, short-answer, code snippets
- **Question Bank**: CRUD operations, categorize by difficulty, subject, learning objective
- **Test Builder**: random question selection, timed tests, sections
- **Grading**: auto-grade for objective questions, manual review for subjective answers, rubric support
- **Analytics**: per-question stats, average time per question, heatmap of common mistakes

### 2.4 Progress Tracking & Analytics

- **Dashboard Widgets**: line charts (score over time), pie charts (topic distribution), bar charts (strength vs. weakness).
- **Metrics**: average score, completion rate, time spent per lesson, quiz accuracy
- **Trend Analysis**: highlight improvement/decline, forecast next performance
- **Export**: PDF/CSV report download

### 2.5 Adaptive Learning Engine

- **Algorithm**: spaced repetition (SM-2), difficulty adjustment, prerequisite mapping
- **Data Inputs**: past performance, time spent, question difficulty
- **Recommendation API**: endpoint to fetch next lesson or quiz based on student profile
- **Configuration**: weights for speed vs. accuracy, manual overrides by tutor

### 2.6 Communication & Notifications

- **Messaging**: real-time chat (WebSocket/Socket.io) with read receipts
- **Email Alerts**: upcoming session reminder, new grade notification using a transactional email API (SendGrid/Mailgun).
- **In‑App Notifications**: badge counters, toast messages
- **Parent Access**: view thread, opt in/out per notification type

### 2.7 Reporting & Export

- **Standard Reports**: weekly progress, exam readiness, detailed question analysis
- **Custom Reports**: filter by date range, subject, tutor
- **Exports**: PDF (using jsPDF or ReportLab), Excel/CSV
- **Sharing**: secure link generation, access expiry

## 3. Non‑functional Requirements

- **Performance**: `<200 ms` API response under normal load, `<2 s` for dashboard data
- **Scalability**: stateless backend, auto‑scaling for compute; use Redis for caching
- **Security**: HTTPS/TLS, OWASP Top 10 mitigations, JWT access and refresh tokens
- **Reliability**: 99.9% uptime SLA, monitoring and health checks
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, ARIA labels

## 4. Tech Stack & Architecture

- **Frontend**: React + TypeScript, Redux or Zustand for state, Material UI or TailwindCSS design system
- **Backend**: Python + Django REST Framework, GraphQL optional
- **Database**: PostgreSQL for relational data, Redis for sessions and caching
- **Auth**: JWT/OAuth2.
- **Containerization**: Docker with Compose for local
- **CI/CD**: GitHub Actions workflow: lint → test → build → containerize → deploy to staging automatically
- **Monitoring + APM**: Newrelic

## 5. Deployment & DevOps

- **Infrastructure as Code**: Terraform
- **Environments**: development, staging, production
- **Pipelines**:
	- **Branch-based**: `main` triggers production deploy; `develop` triggers staging
	- **Quality gates**: code coverage `>80%`, linting passes
- **Secrets Management**: Env Files

## 6. Deliverables

- **Source Repo**: well-structured monorepo or polyrepo with clear folder layout
- **Documentation**:
	- `README.md`: project overview, setup instructions
	- API docs: Swagger or GraphQL Playground
	- Architecture diagram: component interactions
	- ERD: database schema
	- Deployment guide: IaC and pipeline details
- **Examples**: seed scripts with sample users, lessons, quizzes
- **Test Suite**: unit tests (Jest/pytest), integration tests, e2e tests (Cypress).

## 7. Acceptance Criteria

- **Local Setup**: `docker-compose up --build` spins up all services; user can register, login, and navigate to dashboard
- **Role Flows**: tutor can create a lesson, student can complete a quiz, auto-grading works, dashboard updates, adaptive suggestion returns correct next lesson
- **Security**: protected endpoints return 401 when unauthorized
- **Reporting**: generate and download PDF report
- **CI/CD**: passes all tests and deploys to staging on push

## 8. Optional Enhancements

- **AI Integration**: GPT‑powered question generation or automated feedback
- **Mobile App**: React Native wrapper
- **Multilingual Support**: i18n for lesson content and UI
- **Gamification**: badges, leaderboards, progress milestones
