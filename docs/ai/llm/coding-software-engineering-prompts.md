# Coding / Software Engineering Prompts

## Code Review Prompt

**Role:** Act as a Senior Software Engineer and Security Consultant.
**Task:** Review the provided code for logic errors, security vulnerabilities, and maintainability issues.

**Instructions:**

1. **Executive Summary:** Start with a 1-sentence summary of what the code does and a "Health Score" out of 10.
2. **Critical Issues:** List any "showstoppers" (security holes, race conditions, or logic bugs that will cause crashes).
3. **Optimization & Cleanliness:** Suggest improvements for time/space complexity or readability (DRY/SOLID principles).
4. **Educational Insight:** Explain _why_ a specific change is recommended, focusing on the underlying principle.
5. **Refactored Version:** Provide a final, optimized version of the code.

**Tone:** Be concise, professional, and encouraging. Avoid pedantic style critiques unless they impact performance.

## Architecture Smell Audit Prompt

Perform a comprehensive architectural audit of this repository. Specifically, scan the codebase for 'architecture smells' including:

- **Cyclic Dependencies:** Identify any circular references between modules or layers.
- **God Components:** Find classes or modules that handle too many responsibilities.
- **Layer Violations:** Check if lower-level modules are incorrectly importing higher-level ones (e.g., domain logic importing UI components).
- **Tight Coupling:** Look for components that are excessively dependent on each other, making them hard to test or replace.
- **Scattered Functionality:** Identify features that are spread across multiple unrelated modules.
- **Duplicated code:** identical or very similar code exists in more than one location.
- **Lazy class / freeloader:** a class that does too little.
- **Large Cyclomatic complexity:** too many branches or loops; this may indicate a function needs to be broken up into smaller functions, or that it has potential for simplification.

For each smell found, provide:

1. The specific files and lines involved.
2. An explanation of why it is considered an architecture smell.
3. A prioritized recommendation for refactoring.

## Comments analyzer to reduce code size

Act as an expert Code Optimizer and AI Context Strategist. Following recent major architectural changes, our codebase has accumulated stale comments. To optimize token usage and context clarity for AI development tools (like yourself), your task is to rigorously audit all code comments, docstrings, and commented-out code.

Please follow this strict process:

### 1. Evaluation Criteria

Analyze all comments and docstrings in the repository against the following rules.

**Identify for DELETION:**

- **Commented-out Code:** Any blocks of dead code left behind from previous architectural versions.
- **Tautological/Redundant Comments:** Comments that merely repeat what the code's syntax already makes obvious to an LLM (e.g., `// loop over users`, `// return true`).
- **Stale/Outdated Comments:** Comments referencing old architectural patterns, deprecated libraries, or removed variables that contradict the current code.
- **Overly Verbose History:** Change logs, author names, or old timestamped notes that should live in Git history, not the source code.

**Identify for RETENTION (Do not delete these):**

- **The "Why":** Comments explaining _why_ a specific, non-obvious approach was taken (e.g., business logic constraints, known bugs being worked around, external API quirks).
- **Complex Logic Explanations:** Explanations for complex Regex, bitwise operations, or highly optimized mathematical algorithms.
- **Public API Contracts:** Essential docstrings required for exported public methods or library generation, but you may rewrite them to be strictly concise if they are overly wordy.

### 2. The Audit Report (PAUSE HERE)

- **DO NOT delete or modify anything yet.**
- Generate a structured Audit Report grouped by file.
- For each file, summarize the types of comments you plan to delete (e.g., "Removing 4 blocks of commented-out legacy code, 12 redundant syntax comments").
- Explicitly flag any _borderline_ comments where you are unsure if the business logic is obvious enough to stand alone without the comment.
- Wait for my explicit approval.

### 3. Safe Execution

- Once I reply with "approved", proceed to delete the identified comments.
- Ensure that the removal of comments does not leave behind awkward whitespace, broken formatting, or empty docstring blocks.
- Do not alter any actual executable code during this process.

## SDET Prompt (Test Optimization)

Act as an expert Software Development Engineer in Test (SDET) and Senior Code Reviewer. Your task is to perform a rigorous audit of the test suite in this repository, identify irrelevant or low-value test cases, and safely remove them.

Please follow this strict, systematic process using best practices for code auditing:

### 1. Discovery & Definition

Scan the repository to map out the test files and the source code they cover. Identify test cases that are "irrelevant" based strictly on the following criteria:

- **Orphaned Tests:** Tests covering functions, classes, components, or endpoints that have been deleted, renamed, or officially deprecated.
- **Tautological/Trivial Tests:** Tests that assert absolute truths (e.g., `expect(true).toBe(true)`), lack any actual assertions, or merely test the testing framework/standard library instead of our business logic.
- **Redundant Duplicates:** Tests that exercise the exact same code paths and logical conditions as other existing tests without adding new edge-case coverage.
- **Dead Code Tests:** Tests written for unreachable code or mocked environments that no longer align with the actual implementation.

### 2. Verification & Context Gathering

- Trace the imports and function calls of suspected irrelevant tests back to the `src`/main application directories.
- Run the test suite using the project's standard testing command (e.g., `npm test`, `pytest`, `go test`) to establish a passing baseline.
- Check code coverage (if a script is available in the project) to ensure that the active source code is actually covered by other tests.

### 3. The Audit Report (PAUSE HERE)

- **DO NOT delete anything yet.** * Generate a clear, structured Audit Report listing every test proposed for deletion.
- For each proposed deletion, include:
    1. The file path and test name.
    2. The specific reason for deletion (referencing the criteria above).
- Wait for my explicit approval before modifying any files.

### 4. Safe Deletion & Refactoring

- Once I say "approved", delete the targeted test cases.
- Clean up the surrounding code: remove any unused imports, orphaned mock files, or stale setup/teardown logic (e.g., `beforeEach` blocks) that were exclusively used by the deleted tests.
- Re-run the entire test suite to guarantee that no syntax errors were introduced and that all remaining tests still pass successfully.

## Audit Prompt

Ultrathink

1. **Executive Summary** - High-level assessment of this Project strengths and critical risks.
2. **Scope & Methodology**
	- Define what components are included
	- Describe your audit methods (code review, functional testing, data validation, security assessment, performance profiling, compliance check).
3. **Detailed Findings** by Area
	1. **Architecture & Environment** - Deployment, modularity
	2. **Code Quality & Maintainability** - Style, structure, dead code, tests
	3. **Data Integrity & Functional Accuracy**
	4. **Security Assessment** - Encryption, authentication, dependency vulnerabilities
	5. **Performance & Reliability**
	6. **Compliance & Audit Trails** - Regulatory considerations (ASIC), logging, KYC/AML readiness...
4. **Recommendations & Remediation Plan**
	1. Prioritized table of fixes (High/Medium/Low) for each area.
5. **Conclusion**
	1. Overall production-readiness verdict and any final high-level notes.

**Deliverable:** A clear, actionable audit report identifying gaps, logic errors, inconsistencies, and security or compliance deficiencies, with prioritized remediation steps.

[Claude Code- Ultra Efficient Audit Prompt](https://www.reddit.com/r/ClaudeAI/comments/1kz2dry/claude_code_ultra_efficient_audit_prompt/)

## Links

- **[Ultimate Prompts for Every Developer \| by Onix React \| Medium](https://medium.com/@onix_react/ultimate-prompts-for-every-developer-031a6d26a569)**
- [Reddit - Please wait for verification](https://www.reddit.com/r/ClaudeAI/comments/1km9hhp/latest_rules_for_claude_code/)
- [GitHub - PickleBoxer/dev-chatgpt-prompts: 📚 Personal collection of ChatGPT prompts for developers! · GitHub](https://github.com/PickleBoxer/dev-chatgpt-prompts)
- [A collection of 200 Claude AI prompts for coding, research, and automation workflows.](https://mindwiredai.com/2026/04/07/best-claude-prompts-library/)
