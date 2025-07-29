# Quiz App Prompt

# Logo Quiz App using Google ADK

An **infinite real‑time quiz**: display company logos, let users identify them, update scores live, and continue indefinitely while users can join or leave anytime.

**Tech Stack**:  
- **Backend**: Python with Google ADK (Agents) + FastAPI  
- **Frontend**: React (UI)  
- **Database**: PostgreSQL  
- **Communication**: WebSockets for live leaderboard  
- **Deployment**: Docker (backend, frontend, database)

## 1. Core Features

1. **User Experience**
   - User enters a nickname (no authentication).
   - Presented with a random logo and four multiple-choice answers.
   - Scores: +10 for correct, -5 for incorrect.
   - Continuous gameplay (no end screen).
   - Leaderboard updates live for all connected players.

2. **Logos**
   - Seeded dataset in PostgreSQL or pulled via external API (e.g., Clearbit Logos).
   - Logos stored as URLs.

3. **Leaderboard**
   - Real-time updates via WebSockets.
   - Shows top 10 players with live ranks.

4. **Agent-Driven Orchestration**
   - **LogoQuizAgent** (built with Google ADK) manages:
     - Fetching logos and building questions.
     - Validating answers.
     - Updating scores.
     - Broadcasting leaderboard changes.

## 2. Architecture Overview

### ADK Agent (Python)

- **Primary Agent**: `LogoQuizAgent`
  - Built with `LlmAgent` from `google-adk`.
  - Uses tools for:
    - Fetching questions.
    - Checking answers.
    - Updating and fetching leaderboard.
  - Orchestrated with `Runner` and `SessionService` for user sessions.
  - Uses `LoopAgent` or similar for continuous game cycles.

Example Agent:

```python
from google.adk.agents import LlmAgent
from google.adk.runners import Runner
from my_logo_tools import get_next_question, check_answer, fetch_leaderboard

logo_agent = LlmAgent(
    name="logo_quiz_agent",
    model="gemini-2.0-flash",
    instruction="""Run infinite quiz rounds: fetch a question, validate user answers, update scores, return next question.""",
    tools=[get_next_question, check_answer, fetch_leaderboard],
)

runner = Runner(agent=logo_agent)
```

### Backend (FastAPI + ADK)

- **Endpoints**:
    
    - `POST /join`: Create user session via ADK SessionService.
    - `GET /question`: Invoke `get_next_question`.
    - `POST /answer`: Invoke `check_answer` and update score.
    - `GET /leaderboard`: Fetch leaderboard snapshot.
    - `WS /ws/leaderboard`: Push leaderboard changes in real time.

### Frontend (React)

- **Pages**:
    
    - **Landing**: Nickname input.
    - **Quiz**: Displays logo, options, and score.
    - **Leaderboard**: Side panel with live updates.
        
- Uses REST for initial state and WebSocket for leaderboard.
    
- State managed by Redux or Zustand.

### Database (PostgreSQL)

**Tables**:

1. `users (id, nickname, score, joined_at)`
2. `logos (id, company_name, logo_url)`
3. `questions (id, logo_id)`
4. `answers_log (id, user_id, question_id, is_correct, timestamp)`

Seed logos or fetch dynamically.

### Dockerization

**Services**:

- `backend`: FastAPI + ADK.
- `frontend`: React build served by Nginx.
- `db`: PostgreSQL with seeded data.
- Optional: `pgadmin` for DB inspection.

## 3. Game Loop Workflow

1. User joins → Backend registers session.
    
2. Backend requests a question via `get_next_question` (ADK tool).
    
3. Question sent to frontend.
    
4. User answers → Backend invokes `check_answer` (ADK tool).
    
5. Score updated in DB, leaderboard recalculated via `fetch_leaderboard`.
    
6. WebSocket broadcasts new leaderboard.
    
7. New question sent automatically; loop continues.

## 4. Tool Functions (Python)

```python
# my_logo_tools.py

def get_next_question(session_state) -> dict:
    # Fetch random logo, build choices, track in session state
    return {
        "question_id": 123,
        "logo_url": "https://cdn.example.com/google.png",
        "options": ["Google", "Amazon", "Netflix", "Microsoft"]
    }

def check_answer(session_state, question_id, answer) -> dict:
    # Verify answer, update score, log entry
    correct = answer == "Google"  # Example
    session_state["score"] += 10 if correct else -5
    return {"correct": correct, "new_score": session_state["score"]}

def fetch_leaderboard(session_state) -> list:
    # Query DB for top 10 users
    return [{"nickname": "Alice", "score": 120}, {"nickname": "Bob", "score": 95}]
```

Wrapped as ADK tools for `LogoQuizAgent`.

## 5. API Contracts

### REST

- `POST /join`
    
    `{ "nickname": "Deepak" }`
    
    **Response**:
    
    `{ "user_id": 1, "nickname": "Deepak", "score": 0 }`
    
- `GET /question`
    
    `{   "question_id": 12,   "logo_url": "https://cdn.example.com/apple.png",   "options": ["Apple", "Samsung", "Sony", "Intel"] }`
    
- `POST /answer`
    
    `{ "user_id": 1, "question_id": 12, "answer": "Apple" }`
    
    **Response**:
    
    `{ "correct": true, "new_score": 40 }`
    
- `GET /leaderboard`
    
    `[   { "nickname": "Alice", "score": 120 },   { "nickname": "Bob", "score": 95 } ]`
    

### WebSocket

`ws://backend/ws/leaderboard`

- Broadcast:
    
    `{   "leaderboard": [     { "nickname": "Alice", "score": 130 },     { "nickname": "Bob", "score": 105 }   ] }`

## 6. Folder Structure

```css
quiz-app/
  backend/
    app/
      main.py
      agents/
        logo_agent.py
      tools/
        my_logo_tools.py
      routes/
        users.py
        quiz.py
        leaderboard.py
      websocket.py
    Dockerfile
  frontend/
    src/
      components/
      pages/
    Dockerfile
  db/
    init.sql
  docker-compose.yml
```

## 7. Deployment Steps

1. Build Docker images:
    
    `docker-compose build`
    
2. Start the stack:
    
    `docker-compose up`
    
3. Access frontend at `http://localhost:3000` and backend API at `http://localhost:8000`.

## 8. Optional Enhancements

- Time limit per question (e.g., 10 seconds).
- Daily/weekly leaderboard resets.
- Admin dashboard for uploading logos.
- Multi-agent setup (e.g., separate `ScoreAgent`, `QuestionAgent` using ADK).
