# Pre-Commit Hooks Documentation

This repository uses pre-commit hooks to catch errors before they reach GitHub Actions.

## Available Hooks

### 1. Markdown Link Checker (`check-markdown-links`)

**Purpose:** Detects broken internal markdown links before commit.

**What it catches:**
- Links to non-existent markdown files
- Incorrect relative paths
- Missing files that would cause Docusaurus build failures

**Example error caught:**
```
❌ Found broken markdown links:

docs/education/competitors/readme.md:
  Line 48:3 - Broken link: technical-feasibility-ai-question-generation.md
    Resolved to: docs/education/competitors/technical-feasibility-ai-question-generation.md (not found)
```

**How it works:**
- Scans staged `.md` files only (fast, focused on your changes)
- Follows Docusaurus link resolution rules:
  - Resolves relative paths (`../file.md`)
  - Handles absolute paths from docs root (`/file.md`)
  - Supports full paths (`education/file.md`)
  - Checks for `.md` extension or `readme.md` in directories
- Reports file, line, column, and resolved path

**Files:**
- Script: `check-markdown-links.js`
- Wrapper: `check-markdown-links.sh`

### 2. Docusaurus MDX Checker (`docusaurus-mdx-checker`)

**Purpose:** Validates MDX/JSX compatibility in markdown files.

**What it catches:**
- Unescaped `<` and `>` symbols (parsed as JSX)
- Invalid MDX syntax
- React component errors

**Files:**
- Script: `docusaurus-mdx-checker.sh`

## Manual Testing

Test individual hooks:

```bash
# Test markdown link checker
pre-commit run check-markdown-links --all-files

# Test MDX checker
pre-commit run docusaurus-mdx-checker --all-files

# Run all hooks
pre-commit run --all-files
```

## Bypassing Hooks (Not Recommended)

Only in emergencies:

```bash
git commit --no-verify
```

## Link Resolution Rules

The markdown link checker follows Docusaurus conventions:

1. **Relative paths:**
   ```markdown
   [File](../folder/file.md)  → Resolves relative to current file
   ```

2. **Full paths from docs/:**
   ```markdown
   [File](education/file.md)  → Resolves to docs/education/file.md
   ```

3. **Absolute paths:**
   ```markdown
   [File](/folder/file.md)    → Resolves from docs root
   ```

4. **Directory links:**
   ```markdown
   [Folder](folder/)          → Looks for folder/readme.md
   ```

5. **Anchor-only links:**
   ```markdown
   [Section](#heading)        → Always valid (not file-checked)
   ```

## Troubleshooting

### Hook fails but links look correct

1. Check file exists: `ls docs/path/to/file.md`
2. Verify path is relative to correct base
3. Ensure `.md` extension is included
4. Check for typos in filename

### False positives

If the hook incorrectly flags a valid link:

1. Check if the target file exists
2. Verify the link follows Docusaurus resolution rules
3. Test with: `npm run build` to see if Docusaurus agrees

### Hook doesn't run

1. Ensure pre-commit is installed: `pre-commit --version`
2. Install hooks: `pre-commit install`
3. Check hook is enabled in `.pre-commit-config.yaml`

## Adding More Hooks

To add additional checks:

1. Create a script (`.sh` or `.js`)
2. Make it executable: `chmod +x script.sh`
3. Add entry to `.pre-commit-config.yaml` under `local` hooks
4. Test: `pre-commit run <hook-id> --all-files`
