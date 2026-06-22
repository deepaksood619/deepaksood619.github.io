---
slug: /claude-md-best-practices
title: CLAUDE.md Best Practices
description: Best practices for organizing and maintaining CLAUDE.md files in hierarchical project structures for Claude Code
created: 2026-06-22
updated: 2026-06-22
---
Guide for organizing CLAUDE.md files across project hierarchies, based on implementing a 6-file hierarchy in a large-scale documentation project.

## What is CLAUDE.md?

A project memory file that Claude Code reads at the start of every session to understand:

- Project structure and conventions
- Development workflows
- Domain-specific templates
- Content standards
- Tools and commands available

**Key characteristic:** Unlike Skills or Slash Commands, CLAUDE.md is **always loaded** and provides persistent context for every session.

For general Claude Code usage, see [Claude Code](ai/llm/code-generation/claude-code.md).

## Hierarchical CLAUDE.md Organization

### How Hierarchy Works

**Claude Code walks UP the directory tree** loading all CLAUDE.md files it finds:

```bash
# If working in /project/docs/economics/
Claude loads (in order):
1. /project/CLAUDE.md (root)
2. /project/docs/CLAUDE.md
3. /project/docs/economics/CLAUDE.md

# Merging rules:
- All three files are combined
- Inner files (closer to cwd) take precedence for conflicts
- Instructions are additive (child extends parent)
```

**Working directory matters:**

```bash
# Open Claude Code at project root
cd /project
claude

# Focus on specific domain by changing directory
cd docs/economics
# Now economics/CLAUDE.md takes precedence
```

### Example Hierarchy

Real-world example from a 2600+ note documentation repository:

```
.
├── CLAUDE.md (project infrastructure)
│   ├─ Docusaurus build configuration
│   ├─ Deployment workflow
│   ├─ npm commands warning
│   └─ Hierarchy diagram
│
└── docs/
    ├── CLAUDE.md (content infrastructure - SOURCE OF TRUTH)
    │   ├─ Obsidian CLI complete reference
    │   ├─ Markdown/MDX formatting rules
    │   └─ Link format standards
    │
    ├── economics/
    │   ├── CLAUDE.md (financial KB)
    │   │   ├─ Inherits: docs/CLAUDE.md
    │   │   ├─ LLM-maintained research templates
    │   │   ├─ Financial formatting standards
    │   │   └─ India-specific conventions
    │   │
    │   └── company-analysis/
    │       └── CLAUDE.md (company analysis)
    │           ├─ Inherits: economics/ + docs/
    │           ├─ Company analysis templates
    │           └─ Peer comparison standards
    │
    ├── education/
    │   └── CLAUDE.md (education wiki)
    │       ├─ Inherits: docs/CLAUDE.md
    │       └─ Research paper templates
    │
    └── ideas/
        └── CLAUDE.md (startup research)
            ├─ Inherits: docs/CLAUDE.md
            └─ Startup validation templates
```

## When to Create Domain CLAUDE.md Files

### ✅ Create domain-specific CLAUDE.md when:

Building **LLM-maintained knowledge bases** where Claude actively:

- Creates/updates structured content (not just edits existing notes)
- Maintains cross-references and consistency
- Follows templates and quality standards
- Performs systematic research and synthesis

**Examples:**

- `economics/CLAUDE.md` - Financial research repository
- `education/CLAUDE.md` - Education startup research wiki
- `company-analysis/CLAUDE.md` - Company fundamental analysis

### ❌ Do NOT create domain CLAUDE.md for:

**Passive note collections** where content is:

- Manually edited learning notes
- Simple reference documentation
- No templates or systematic workflows
- No cross-referencing requirements

**Examples:**

- `ai/` - Personal ML learning notes
- `databases/` - Database reference notes
- `algorithms/` - CS fundamentals notes

These folders **automatically inherit** all rules from parent CLAUDE.md files.

## Frontmatter Standards

**Use exactly 5 fields** across all files for consistency:

```markdown
---
slug: /natural-language-identifier
title: Descriptive Title
description: One-line summary of purpose
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

**Field guidelines:**

- `slug`: Use natural language, NOT folder paths (e.g., `/claude-md-best-practices` not `/devops/ides/claude-md-best-practices`)
  - Prevents 404 errors when files are moved between folders
  - Makes URLs cleaner and more memorable
  - Slug becomes canonical identifier, independent of file location
- `title`: Human-readable title (not just "CLAUDE.md")
- `description`: Clear explanation of what this file covers
- `created`: When this file was first created
- `updated`: Last modification date (update when making changes)

**Example for CLAUDE.md files:**

```markdown
---
slug: /economics-CLAUDE
title: Economics & Finance Knowledge Base
description: LLM-maintained financial research repository with templates and quality standards
created: 2026-06-09
updated: 2026-06-22
---
```

**Example for regular content:**

```markdown
---
slug: /claude-md-best-practices
title: CLAUDE.md Best Practices
description: Best practices for organizing CLAUDE.md files in hierarchical structures
created: 2026-06-22
updated: 2026-06-22
---
```

## Inheritance Patterns

### Single Inheritance (Most Common)

Domain inherits from content infrastructure:

```markdown
---
slug: /economics-CLAUDE
title: Economics & Finance Knowledge Base
description: LLM-maintained financial research...
created: 2026-06-09
updated: 2026-06-22
---

**Inherits:** Obsidian CLI reference and markdown formatting rules from [docs/CLAUDE.md](../CLAUDE.md)

**LLM-maintained financial research repository**...

## Obsidian CLI Usage

**VAULT path:** `/full/path/to/vault`

**Commands:** See [docs/CLAUDE.md](../CLAUDE.md) for complete Obsidian CLI reference.

## Markdown & Formatting

**Inherits:** All markdown rules from [docs/CLAUDE.md](../CLAUDE.md)

**Additional financial content rules:**
- Financial formatting (Rs., Cr, L notation)
- MDX escaping for `<` `>` in comparisons
```

### Multi-Level Inheritance

Sub-domain inherits from domain AND content infrastructure:

```markdown
---
slug: /company-analysis-CLAUDE
title: Company Analysis Knowledge Base
description: Systematic company research and fundamental analysis
created: 2026-04-15
updated: 2026-06-22
---

**Inherits:** Financial KB standards from [economics/CLAUDE.md](../CLAUDE.md) and content infrastructure from [docs/CLAUDE.md](../../CLAUDE.md)

## Obsidian CLI Usage

**VAULT path:** `/full/path/to/vault`

**Commands:** See [docs/CLAUDE.md](../../CLAUDE.md) for complete Obsidian CLI reference.

## Markdown & Formatting

**Inherits:** All markdown rules from [docs/CLAUDE.md](../../CLAUDE.md) and [economics/CLAUDE.md](../CLAUDE.md)

**Company analysis specific formatting:**
- Tables for all metric comparisons
- Peer comparison standards
```

### Root Inheritance

Root file sets project context and points to content infrastructure:

```markdown
---
slug: /CLAUDE
title: CLAUDE.md
description: Project-level guidance for Claude Code
created: 2026-04-15
updated: 2026-06-22
---

# CLAUDE.md

## Content Editing

**For content editing, Obsidian CLI usage, and markdown formatting guidelines:**
→ See [docs/CLAUDE.md](docs/CLAUDE.md)

## CLAUDE.md Hierarchy

[Diagram showing full hierarchy]

## When to Create Domain CLAUDE.md Files

[Criteria for creating new domain files]
```

## Content Organization Principles

### 1. Single Source of Truth

**Problem:** Duplicating Obsidian CLI reference in every domain CLAUDE.md

**Solution:** Define once in `docs/CLAUDE.md`, reference from children

```markdown
# ❌ BAD - Duplication
## docs/economics/CLAUDE.md
## Obsidian CLI Commands
[200 lines of command reference copied from parent]

# ✅ GOOD - Reference
## docs/economics/CLAUDE.md
**Commands:** See [docs/CLAUDE.md](../CLAUDE.md) for complete Obsidian CLI reference.
```

### 2. Progressive Specificity

**General → Specific** as you move down the hierarchy:

- **Root:** Project infrastructure (build, deploy, git)
- **Content layer:** Tools and formatting (Obsidian, markdown, links)
- **Domain:** Templates and workflows (financial analysis, research)
- **Sub-domain:** Specialized formats (company analysis, peer comparison)

### 3. Explicit Inheritance

**Always document what a file inherits from:**

```markdown
**Inherits:** Obsidian CLI reference and markdown formatting rules from [docs/CLAUDE.md](../CLAUDE.md)
```

This makes hierarchy visible when reading any single file.

### 4. Domain-Specific Extensions Only

Child files should ONLY contain:

- Templates specific to this domain
- Formatting rules unique to this domain
- Workflows not applicable elsewhere
- Cross-references to parent for general rules

**Example:**

```markdown
## Markdown & Formatting

**Inherits:** All markdown rules from [docs/CLAUDE.md](../CLAUDE.md)

**Financial content specific rules:**
- Currency: Use Rs. (Indian Rupee)
- Large numbers: Cr (Crore = 10M), L (Lakh = 100K)
- Escape `<` and `>` with backticks: PE `<20`, ROE `>15%`
```

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: Duplicating Parent Content

**Bad:**

```markdown
# docs/economics/CLAUDE.md

## Obsidian CLI Commands

[Full 200-line Obsidian CLI reference copy-pasted from docs/CLAUDE.md]
```

**Good:**

```markdown
# docs/economics/CLAUDE.md

**Commands:** See [docs/CLAUDE.md](../CLAUDE.md) for complete Obsidian CLI reference.
```

### ❌ Anti-Pattern 2: Vague Inheritance

**Bad:**

```markdown
See parent for Obsidian commands.
```

**Good:**

```markdown
**Inherits:** Obsidian CLI reference and markdown formatting rules from [docs/CLAUDE.md](../CLAUDE.md)
```

### ❌ Anti-Pattern 3: Missing Frontmatter

**Bad:**

```markdown
# CLAUDE.md

Content starts here...
```

**Good:**

```markdown
---
slug: /economics-CLAUDE
title: Economics & Finance Knowledge Base
description: LLM-maintained financial research repository
created: 2026-06-09
updated: 2026-06-22
---

Economics & Finance Knowledge Base content starts here...
```

### ❌ Anti-Pattern 4: Creating Unnecessary Domain Files

**Bad:**

```markdown
# docs/ai/CLAUDE.md
# Just personal ML notes, no templates or workflows
```

**Good:**

Don't create it! Personal notes automatically inherit from `docs/CLAUDE.md`.

### ❌ Anti-Pattern 5: Inconsistent Frontmatter

**Bad:**

```markdown
# File 1
---
slug: /economics/CLAUDE
title: Economics KB
created: 2026-06-09
updated: 2026-06-22
domain: economics
type: llm-kb
---

# File 2
---
slug: /education/CLAUDE
title: Education Wiki
description: Education research
date: 2026-04-15
---
```

**Good:** Use same 5 fields across all files.

## Best Practices Summary

### ✅ DO:

1. **Document hierarchy** in root CLAUDE.md with visual diagram
2. **Use 5-field frontmatter** consistently across all files
3. **Use natural language slugs** (e.g., `/claude-md-best-practices` not `/devops/ides/claude-md-best-practices`)
4. **Declare inheritance** explicitly at top of each file
5. **Reference parent** for general rules (don't duplicate)
6. **Create domain files** only for LLM-maintained knowledge bases
7. **Update the `updated` date** when making changes
8. **Open Claude Code at root** for full project access

### ❌ DON'T:

1. **Duplicate content** from parent files
2. **Create domain files** for passive note collections
3. **Use inconsistent frontmatter** fields
4. **Use folder-based slugs** (use natural language slugs instead)
5. **Forget to update** the `updated` date
6. **Mix field names** (e.g., `date` vs `created` vs `updated`)
7. **Add H1 heading** when you have `title` in frontmatter
8. **Reference non-existent parent** files in inheritance notes
9. **Put environment-specific** details in shared CLAUDE.md

## Working Directory Best Practices

### Recommended: Open at Root

**Why:**

```bash
cd /project
claude

# ✅ Benefits:
# - Full access to npm commands, git operations, build files
# - CLAUDE.md hierarchy loads automatically when you cd
# - Use `cd docs/economics` to focus context when needed
```

**When working in subdomains:**

```bash
# Start at root
cd /project
claude

# Focus context for financial work
cd docs/economics
# Now economics/CLAUDE.md takes precedence
```

### When to Open at Subdirectory

**Only if:**

- Never touch build config or npm commands
- Purely editing markdown content
- Want reduced file tree context

**Note:** Root is almost always better because:

- Git operations cleaner from root
- Pre-commit hooks run from root
- Occasional `npm start` preview needs root

## Real-World Example: Documentation Repository

### Project Structure

```
deepaksood619.github.io/
├── CLAUDE.md (project infrastructure)
├── docusaurus.config.js
├── package.json
└── docs/
    ├── CLAUDE.md (content infrastructure)
    ├── economics/ (LLM-maintained financial KB)
    │   ├── CLAUDE.md
    │   └── company-analysis/
    │       └── CLAUDE.md
    ├── education/ (LLM-maintained education wiki)
    │   └── CLAUDE.md
    ├── ideas/ (LLM-maintained startup research)
    │   └── CLAUDE.md
    ├── ai/ (passive notes - no CLAUDE.md)
    ├── databases/ (passive notes - no CLAUDE.md)
    └── algorithms/ (passive notes - no CLAUDE.md)
```

### Why This Works

**Root CLAUDE.md:**

- Docusaurus project specifics
- npm command warnings (Google Drive sync)
- Deployment workflow
- Points to docs/CLAUDE.md for content editing

**docs/CLAUDE.md:**

- Single source of truth for Obsidian CLI
- Markdown/MDX formatting rules
- Link format requirements
- Inherited by ALL subdirectories

**Domain CLAUDEs:**

- economics/ - Financial research templates
- education/ - Research paper templates
- ideas/ - Startup validation templates
- All inherit from docs/CLAUDE.md

**No CLAUDE.md:**

- ai/, databases/, algorithms/ - Passive notes
- Automatically inherit docs/CLAUDE.md rules

## Migrating to Hierarchical CLAUDE.md

### Step 1: Audit Current State

```bash
# Find all existing CLAUDE.md files
find . -name "CLAUDE.md" -type f

# Check for duplication
grep -r "Obsidian CLI" */CLAUDE.md
```

### Step 2: Identify Hierarchy Levels

```
Root (project) → Content (docs/) → Domain (economics/) → Sub-domain (company-analysis/)
```

### Step 3: Create Source of Truth

Move all Obsidian CLI, markdown formatting to `docs/CLAUDE.md`.

### Step 4: Add Inheritance Notes

```markdown
**Inherits:** [List what is inherited and from where]
```

### Step 5: Remove Duplication

Delete duplicated content, replace with references:

```markdown
**Commands:** See [docs/CLAUDE.md](../CLAUDE.md) for complete reference.
```

### Step 6: Standardize Frontmatter

Ensure all files use same 5 fields.

### Step 7: Document Hierarchy

Add diagram to root CLAUDE.md showing full structure.

## Maintenance Checklist

When updating CLAUDE.md files:

- [ ] Update `updated` date in frontmatter
- [ ] Check if changes apply to parent/child files
- [ ] Verify inheritance notes are accurate
- [ ] Test that Claude Code loads hierarchy correctly
- [ ] Update hierarchy diagram if structure changed
- [ ] Remove any duplicated content
- [ ] Ensure 5-field frontmatter is consistent

## Related Documentation

- [Claude Code](ai/llm/code-generation/claude-code.md) - General Claude Code features and usage
- [Obsidian](devops/ides/obsidian.md) - Obsidian vault management (similar hierarchical config)
- [Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)

## Additional Resources

- [Andrej Karpathy's CLAUDE.md](https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md) - Single-file approach with 4 core principles
- [Claude Code Documentation](https://code.claude.com/docs) - Official Claude Code docs
- [CLAUDE.md vs Skills vs Slash Commands](https://www.reddit.com/r/ClaudeAI/comments/1ped515/understanding_claudemd_vs_skills_vs_slash/) - Understanding the differences
