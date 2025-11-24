# Lovable Prompt Portfolio Website

https://lovable.dev/invite/3GWZN70

## Frontend

Build a modern, responsive **frontend-only portfolio website*- using **React*- (or any Lovable-supported frontend framework). **No backend services*- (e.g., Supabase, Firebase, APIs) should be integrated — the site must work fully offline using **static demo data + localStorage*- with clearly documented hooks for future backend integration.

**Owner:*- _Deepak Sood_  
**LinkedIn:*- [https://www.linkedin.com/in/deepaksood619/](https://www.linkedin.com/in/deepaksood619/)

Use publicly available profile information to write placeholder content (short bio, role/title, experience bullets, achievements). Do not fetch real-time data or integrate LinkedIn APIs — write **sample content that the owner can later edit.**

## Overall Architecture

- Single-page application (SPA) with React (TS preferred).
- Public pages + an Admin dashboard (protected by mock login).
- All project/experience/achievement data stored in:
    - `src/data/*.json` as initial seeded content
    - Updated values stored and persisted in `localStorage`
- Include a `dataService` abstraction layer:
    - `getAll, add, update, delete`
    - Uses `localStorage`
    - Include TODO comments for future API integration.

No external DB or backend code — only placeholders.

## Pages & Functional Requirements

### Home / Landing
- Hero: Name, title, two CTAs:
    - Scroll to Projects
    - Scroll to Contact
- Subtle animated background (gradient, particles, SVG).
- Smooth scrolling + active nav highlighting.

### About Me
- Short intro paragraph about owner (sample text).
- Skill badges/icons.
- Button linking to LinkedIn (new tab).

### Projects
- Responsive grid of cards:
    - Title, thumbnail, short description, tech tags.
- Modal or routed detail view with:
    - Description, screenshots, live link, code link.
- Optional filters: by tech.
- Optional search input.

### Experience
- Vertical timeline or stacked cards.
- Role, company, duration, bullet points.

### Achievements
- Grid or badge cards.
- Optional modal to preview certificates/images.

### Contact (Frontend-Only)
- Fields: Name, Email, Message.
- Validates input.
- On submit:
    
    - Does not send email.
    - Displays preview + instruction box:- “To enable sending emails, replace handler with API or service (EmailJS / Nodemailer).”

## Admin Panel (Frontend-Only)

### Authentication
- Admin login page with username/password.
- Validate credentials client-side using `.env.local` values.
- No backend, no token issuance — simple simulated auth.

Demo Credentials

`USERNAME=admin PASSWORD=demo123`

### Dashboard
- Add/Edit/Delete:
    
    - Projects
    - Experience
    - Achievements
- Changes persist in localStorage and update public UI immediately.
- Include **Reset to Demo Data*- button.

### Data Persistence
- Provide `src/services/dataService.ts` with:
    
    - localStorage implementation
    - `// TODO: replace with backend API calls` comments

## Tech & UX Requirements
- React + Hooks (TS preferred).
- Responsive (mobile/tablet/desktop).
- Modern typography (Inter or Poppins).
- Light theme default + dark mode toggle.
- Smooth transitions, accessible modals, keyboard nav.
- Well-structured code:
    
    - `components/`
    - `pages/`
    - `services/`
    - `data/`
    - `styles/`

## Data Format Requirements

### Sample JSON Schemas

#### `projects.json`

```json
[
  {
    "id": "proj-1",
    "title": "Sample Project",
    "thumbnail": "/assets/project1.png",
    "description": "Short project summary.",
    "details": "Long form description…",
    "tech": ["React", "Node.js"],
    "liveUrl": "#",
    "codeUrl": "#",
    "images": ["/assets/project1.png"]
  }
]
```

#### `experience.json`

```json
[
  {
    "id": "exp-1",
    "role": "Senior AI, Data & DevOps Architect",
    "company": "OpsTree",
    "duration": "2023–Present",
    "bullets": [
      "Designed scalable AI workflows.",
      "Led cross-team architecture initiatives."
    ]
  }
]
```

#### `achievements.json`

```json
[
  {
    "id": "ach-1",
    "title": "GenAI Certification",
    "issuer": "Microsoft & LinkedIn",
    "date": "2025",
    "image": "/assets/cert1.png"
  }
]
```

## Deliverables
- Complete frontend app runnable via `npm install && npm start`.
- LocalStorage-based admin CRUD.
- Contact form with validation + preview.
- Dark mode + smooth scroll + responsive UI.
- README including:
    
    - How to run locally
    - How to modify admin credentials
    - Where to connect backend APIs later
    - How to enable email sending

## Copywriting Style
- Professional, concise, confident.  
- Write placeholder text that the owner can edit.

## Backend

I have a React + TypeScript portfolio project (Vite + shadcn/ui + React Router). I want to fully integrate Supabase for backend (database + authentication), make the admin panel functional with CRUD operations, and deploy to Vercel with proper configuration.

### Requirements:

#### Supabase Setup & Integration

- Install @supabase/supabase-js
- Create src/lib/supabaseClient.ts that reads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from environment
- Create database tables: projects, experience, achievements (with proper snake_case columns, array types, timestamps)
- Add Row Level Security (RLS) policies: public read access, authenticated write access
- Provide complete SQL script with CREATE TABLE, RLS policies, and sample data inserts

#### Data Service Layer

- Create/update src/services/dataService.ts to use Supabase instead of localStorage
- Implement full CRUD operations for: projects, experience, achievements
- Add robust type-safe mapping between TypeScript camelCase and PostgreSQL snake_case
- Handle null/undefined values, arrays (technologies, responsibilities, images), and optional fields properly
- All operations must be async with proper error handling

#### Authentication with Supabase Auth

- Update src/contexts/AuthContext.tsx to use Supabase Auth (email/password)
- Replace mock authentication with real Supabase auth methods: signIn, signUp, signOut
- Track auth state using Supabase onAuthStateChange listener
- Store user and session in context
- Handle loading states during auth checks

#### Admin UI & Forms

- Update src/pages/AdminLogin.tsx to use email/password with Supabase Auth
- Remove mock credentials, use real authentication flow
- Update src/pages/Admin.tsx to check Supabase auth state and redirect if not authenticated
- Update admin forms in src/components/admin/:
  - ProjectsAdmin.tsx - ensure all fields work (title, description, longDescription, thumbnail, technologies array, liveUrl, codeUrl, images array)
  - ExperienceAdmin.tsx - add startDate and endDate date pickers, handle responsibilities array
  - AchievementsAdmin.tsx - ensure all fields work (title, description, date, image, link)
- Add proper async handling, loading states, error handling, and user-friendly toast notifications
- Remove any references to resetToDemo or localStorage  

#### Environment & Security

- Create .env.example with:
  - VITE_SUPABASE_URL=your_supabase_project_url
  - VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
- Update .gitignore to include: .env, .env.local, .env.*.local, node_modules, dist
- Ensure no secrets are committed to Git

#### Vercel Deployment Configuration

- Create vercel.json with SPA rewrite:

```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
```

- This ensures client-side routes like /admin/login work when directly accessed
- Provide exact Vercel project settings:
  - Build Command: npm run build
  - Output Directory: dist
  - Install Command: npm install
- List environment variables to set in Vercel dashboard (Production + Preview):
  - VITE_SUPABASE_URL
  - VITE_SUPABASE_ANON_KEY

#### Supabase Dashboard Configuration

- Provide checklist for Supabase setup:
  - Create new Supabase project
  - Run SQL script in SQL Editor to create tables + RLS policies
  - Add authentication: Go to Authentication → Users → Create new user (for admin access)
  - Add deployed domain to Authentication → URL Configuration → Site URL and Redirect URLs:
    - https://your-domain.vercel.app
    - https://your-domain.vercel.app/admin
    - http://localhost:5173 (for local dev)
  - Get credentials from Settings → API: Project URL and anon public key

#### Documentation Files to Create

- Create SUPABASE_SETUP.md with:
  - Step-by-step Supabase project creation
  - Complete SQL script (tables + RLS + sample data)
  - How to create admin user in Supabase Auth
  - How to get API credentials
  - How to configure redirect URLs
- Create VERCEL_DEPLOY.md with:
  - How to connect GitHub repo to Vercel
  - Where to set environment variables
  - How to trigger redeployment
  - How to check build logs
  - Troubleshooting common issues (404 on routes, missing env vars, auth failures)
- Create TESTING_CHECKLIST.md with:
  - Local testing steps (npm run build && npm run preview)
  - Admin login test (create user, login, verify session)
  - CRUD operations test (add/edit/delete project, experience, achievement)
  - Production testing steps (verify Vercel deployment, test all features)

#### Build & Validation

- Fix any TypeScript errors, lint errors
- Run typecheck: npx tsc --noEmit
- Run build: npm run build
- Test locally: npm run preview (verify /admin/login works, test CRUD)
- Provide Windows PowerShell commands for:

  - Installing dependencies
  - Building project
  - Running preview
  - Git commands (add, commit, push)
  - Optional: Vercel CLI deployment commands

#### Output Requirements (MUST FOLLOW)

- Show full file contents for all new/modified files (use code blocks with file paths)
- Provide complete SQL script in a copyable code block
- Provide exact PowerShell commands I must run locally
- Create a final checklist document with:

  - What was changed (list all modified files)
  - Local setup steps (install, add .env, run SQL)
  - Supabase configuration steps
  - Vercel deployment steps
  - Testing verification steps
- If you need any information from me (project URLs, credentials, etc.), stop and list exactly what you need and where I should get it

#### Database Schema Requirements

- projects: id (uuid), title, description, long_description, thumbnail, technologies (text[]), live_url, code_url, images (text[]), created_at
- experience: id (uuid), role, company, duration, start_date, end_date, responsibilities (text[]), created_at
- achievements: id (uuid), title, description, date, image, link, created_at
  

#### Admin Features Required

- Email/password login via Supabase Auth
- Protected admin routes (redirect to /admin/login if not authenticated)
- Add/Edit/Delete projects with all fields (including arrays)
- Add/Edit/Delete experience with date pickers
- Add/Edit/Delete achievements
- Proper error handling and loading states
- Toast notifications for success/error

#### Deployment Requirements

- Works on Vercel with direct URL access to /admin/login
- Environment variables properly configured
- Supabase Auth redirects work correctly
- All CRUD operations work in production
- No 404 errors on client-side routes
- No authentication or database errors

After completing everything, provide a summary showing:

1. All files changed (with paths)
2. SQL script to run
3. Commands to run locally
4. Vercel setup steps
5. Supabase setup steps
6. How to create the first admin user
7. How to test everything works

Make this complete and production-ready. Another developer should be able to follow your instructions and have a fully working authenticated admin panel with Supabase backend deployed on Vercel.
