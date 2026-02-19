# Code Generators / Coding Generators

## Gemini Code Assist (GCA) / Gemini CLI

- `/mcp`
- `/tools`

- CodeMod - 6-7 Million Lines of Code as context
- [GitHub - pauldatta/build-adk-agent: Use Gemini CLI or Code Assist Agent Mode to generate working ADK Agents](https://github.com/pauldatta/build-adk-agent)
- Modernization - [GitHub - codemod-com/codemod: The command line tool for building, sharing, and running codemods. From quick cleanups to complex migrations. AI-friendly, and language-agnostic.](https://github.com/codemod-com/codemod)
	- 6-7 Million Lines of Code as context

## Github Copilot

### Commands

- `@workspace`
- `/doc`
- `/explain`
- `/fix`
- `/generate`
- `/optimize`
- `/tests`
- Start chatting with copilot - `Opt + Cmd + I (chat with copilot)`

### Help

You can ask me general programming questions, or chat with the following participants which have specialized expertise and can perform actions:

- @workspace - Ask about your workspace
    - /explain - Explain how the code in your active editor works
    - /tests - Generate unit tests for the selected code
    - /fix - Propose a fix for the problems in the selected code
    - /new - Scaffold code for a new file or project in a workspace
    - /newNotebook - Create a new Jupyter Notebook
    - /fixTestFailure - Propose a fix for the failing test
    - /setupTests - Set up tests in your project (Experimental)
- @vscode - Ask questions about VS Code
    - /search - Generate query parameters for workspace search
    - /startDebugging - Generate launch config and start debugging in VS Code (Experimental)
- @terminal - Ask how to do something in the terminal
    - /explain - Explain something in the terminal
- @github - Get answers grounded in web search, code search, and your enterprise's knowledge bases

You can also help me understand your question by using the following variables to give me extra context:

- `#editor` - The visible source code in the active editor
- `#selection` - The current selection in the active editor
- `#terminalLastCommand` - The active terminal's last run command
- `#terminalSelection` - The active terminal's selection
- `#file` - Choose a file in the workspace

To have a great conversation, ask me questions as if I was a real programmer:

- **Show me the code** you want to talk about by having the files open and selecting the most important lines.
- **Make refinements** by asking me follow-up questions, adding clarifications, providing errors, etc.
- **Review my suggested code** and tell me about issues or improvements, so I can iterate on it.

You can also ask me questions about your editor selection by starting an inline chat session (⌘I).

### Free tier

- 2,000 intelligent code completions a month: Get context-aware code suggestions that draw context from your GitHub projects and VS Code workspace.
- 50 Copilot Chat messages a month: Ask Copilot for help understanding code, refactoring something, or debugging an issue.
- Choose your AI model: Pick between Claude 3.5 Sonnet or OpenAI GPT-4o.
- Make changes to multiple files with Copilot Edits: Tackle changes across multiple files with Copilot Edits.
- Support for the Copilot Extensions ecosystem: Access third-party agents designed for tasks such as querying Stack Overflow or searching the web with Perplexity.
- Choose where you build: Enjoy support in VS Code and across GitHub.

### Links

- [Get to know GitHub Copilot in VS Code and be productive IMMEDIATELY - YouTube](https://www.youtube.com/watch?v=jXp5D5ZnxGM&ab_channel=VisualStudioCode)
- [Essential AI prompts for developers - YouTube](https://www.youtube.com/watch?v=H3M95i4iS5c&ab_channel=VisualStudioCode)
- [Copilot Best Practices (What Not To Do) - YouTube](https://www.youtube.com/watch?v=2q0BoioYSxQ&ab_channel=VisualStudioCode)
	- Ghost Text
	- Inline Chat
	- Chat Panel
	- Comments
- [Tips & Tricks for GitHub Copilot Chat in Visual Studio - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context)

## Editors

- [Cursor - The AI-first Code Editor](https://www.cursor.com/)
- [Google Antigravity](https://antigravity.google/)
- [Windsurf Editor](https://windsurf.com/)
- [Zed - Code at the speed of thought](https://zed.dev/) - [GitHub - zed-industries/zed: Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.](https://github.com/zed-industries/zed) - 66.3K Stars

## Comparisons

- **Claude Opus 4.5:** First model to break 80% on SWE-bench. 67% cheaper than before. Best for backend development and complex refactoring. 9.5/10.
- **Gemini 3:** 1 million token context window, 1501 Elo score. Better at frontend and creative work than Opus. Accessible across the Gemini Products. 8.5/10.
- **Nano Banana Pro:** Google’s image generator that finally works. 4K output, handles 5 people consistently, integrates everywhere. 8/10.
- **Antigravity:** Google’s new IDE. Buggy, crashes often, not ready. 6.5/10. Stick with Cursor or Windsurf / Claude Code or Faactory.ai for now.
- **What I actually use:** Gemini 3 for frontend, Opus 4.5 for backend, [Factory.ai](https://substack.com/redirect/fbb2b1c1-c8c7-4a4b-8e95-c9c8c058e735?j=eyJ1IjoiMjNveGkifQ.i9aFcICYm1GqpkppBiooaZpsFJWd6rQR64Wt5K5qc7c) or Claude Code for serious coding work.

[Claude Opus 4.5 vs Gemini 3, Nano Banana Pro and Google Antigravity IDE: Nov 2025 Mega Review](https://www.thetoolnerd.com/p/claude-opus-45-vs-gemini-3-nano-banana-anti-gravity)

## Others

- Tabnine
- [Amazon Q Developer](https://aws.amazon.com/q/developer/)
	- [What is CodeWhisperer? - CodeWhisperer](https://docs.aws.amazon.com/codewhisperer/latest/userguide/what-is-cwspr.html)
- [AI Code Reviews | CodeRabbit | Try for Free](https://coderabbit.ai/)
- [AI Code Generation | Google Cloud](https://cloud.google.com/use-cases/ai-code-generation?hl=en)
	- [Jules - An Asynchronous Coding Agent](https://jules.google/)
	- [Google AI Studio](https://aistudio.google.com/)
	- [Firebase Studio](https://firebase.studio/) - Firebase AI Studio
	- [GitHub - google-gemini/gemini-cli: An open-source AI agent that brings the power of Gemini directly into your terminal.](https://github.com/google-gemini/gemini-cli)
		- npx https://github.com/google-gemini/gemini-cli
		- **npm install -g @google/gemini-cli**
			- gemini
	- Old - [Introducing Duet AI for Google Cloud – an AI-powered collaborator \| Google Cloud Blog](https://cloud.google.com/blog/products/application-modernization/introducing-duet-ai-for-google-cloud)
- [Galileo AI · Copilot for interface design](https://www.usegalileo.ai/)
- [GitHub - openai/codex: Lightweight coding agent that runs in your terminal](https://github.com/openai/codex)
- [GitHub - google-gemini/gemini-cli: An open-source AI agent that brings the power of Gemini directly into your terminal.](https://github.com/google-gemini/gemini-cli)
- [Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)
	- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
	- [GitHub - thedotmack/claude-mem: A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.](https://github.com/thedotmack/claude-mem)
	- [ccusage](https://ccusage.com/)
	- [I Spent 2000 Hours Coding With LLMs in 2025. Here are my Favorite Claude Code Usage Patterns : r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1q3t579/comment/nxndpgn/)
		- [Advanced Claude Code Patterns That Move the Needle - Google Docs](https://docs.google.com/document/d/1agzmSskXcdMgJz_cf1KlWdy1kfY3n_XEhHrLU_ESTRk/edit?usp=sharing)
- [Warp: The Agentic Development Environment](https://www.warp.dev/)
- [Kilo Code - Open source AI agent VS Code extension](https://kilocode.ai/)
- [GitHub - Pythagora-io/gpt-pilot: The first real AI developer](https://github.com/Pythagora-io/gpt-pilot)
- [Kiro: The AI IDE for prototype to production](https://kiro.dev/)
	- [Kiro - The New Agentic AI IDE from AWS - DEV Community](https://dev.to/aws-builders/kiro-the-new-agentic-ai-ide-from-aws-5311)
	- [Kiro Documentation](https://aws.amazon.com/documentation-overview/kiro/)
	- [GitHub - kirodotdev/Kiro: Kiro is an agentic IDE that works alongside you from prototype to production.](https://github.com/kirodotdev/Kiro)
	- [👻 Kiro Agentic AI IDE: Beyond a Coding Assistant - Full Stack Software Development with Spec Driven AI \| AWS re:Post](https://repost.aws/articles/AROjWKtr5RTjy6T2HbFJD_Mw/%F0%9F%91%BB-kiro-agentic-ai-ide-beyond-a-coding-assistant-full-stack-software-development-with-spec-driven-ai)
- [Codex \| OpenAI](https://openai.com/codex/)
- [GitHub - QwenLM/Qwen3-Coder: Qwen3-Coder is the code version of Qwen3, the large language model series developed by Qwen team, Alibaba Cloud.](https://github.com/QwenLM/Qwen3-Coder)
- [unsloth/Qwen3-Coder-480B-A35B-Instruct-GGUF · Hugging Face](https://huggingface.co/unsloth/Qwen3-Coder-480B-A35B-Instruct-GGUF)
	- Qwen releases Qwen3-Coder, a SOTA coding model that rivals Claude Sonnet-4, GPT-4.1 & Kimi K2.
	- Run the 480B model with Unsloth AI Dynamic 2-bit GGUFs - now just 182GB (down from 512GB). 1M context length GGUFs are also available.
	- Achieve `>6 tokens/s` on 190GB unified memory or 158GB RAM + 24GB VRAM.
	- [Compare Qwen 3 Coder vs. Sonnet 4 for Code Generation](https://blog.dailydoseofds.com/p/compare-qwen-3-coder-vs-sonnet-4)
- [GitHub Spark: AI Tool That Builds & Deploys Full-Stack Apps in Minutes - YouTube](https://youtube.com/shorts/Ohi30MUcqsQ?si=EMWFPG02lpuTJ2Bo)
- [Introducing Strands Agents, an Open Source AI Agents SDK \| AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/)
- Modernization - [GitHub - codemod-com/codemod: The command line tool for building, sharing, and running codemods. From quick cleanups to complex migrations. AI-friendly, and language-agnostic.](https://github.com/codemod-com/codemod)
	- [GitHub - codemod-com/codemod: The command line tool for building, sharing, and running codemods. From quick cleanups to complex migrations. AI-friendly, and language-agnostic.](https://github.com/codemod-com/codemod)
- [Vibecode - AI Mobile App Builder](https://www.vibecodeapp.com/)
- [GitHub - HKUDS/DeepCode: "DeepCode: Open Agentic Coding (Paper2Code & Text2Web & Text2Backend)"](https://github.com/HKUDS/DeepCode)
- [Genspark AI - The All-in-One Super Agent AI Workspace That Does Everything](https://www.genspark.im/)
	- [Genspark - Your All-in-One AI Workspace](https://www.genspark.ai/)

## SAAS

- [Factory](https://www.factory.ai/)

## Links

- [low-code-no-code-lcnc](cloud/others/low-code-no-code-lcnc.md)
- [15 Best AI Coding Assistant Tools in 2024 | CodiumAI](https://www.codium.ai/blog/best-ai-coding-assistant-tools/)
- [Aider LLM Leaderboards | aider](https://aider.chat/docs/leaderboards/)
- [BigCodeBench: The Next Generation of HumanEval](https://huggingface.co/blog/leaderboard-bigcodebench)
- [BigCodeBench Leaderboard](https://bigcode-bench.github.io/)
- [GitHub Copilot: The agent awakens - The GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/)
- [What I learned trying seven coding agents](https://www.understandingai.org/p/what-i-learned-trying-seven-coding)
- [Era of Virtual Employees : Running Background Agents with Claude Code - Terragon, Conductor.build, Cursor](https://www.thetoolnerd.com/p/era-of-virtual-employees-running)
- [ai-engineering-hub/sonnet4-vs-qwen3-coder at main · patchy631/ai-engineering-hub · GitHub](https://github.com/patchy631/ai-engineering-hub/tree/main/sonnet4-vs-qwen3-coder)
- [The Roadmap for Mastering AI-Assisted Coding in 2025 - MachineLearningMastery.com](https://machinelearningmastery.com/the-roadmap-for-mastering-ai-assisted-coding-in-2025/)
- [Replit vs Bolt vs Lovable (2025) — Hands‑On Review: What I’d Renew, What I’d Pause](https://www.thetoolnerd.com/p/replit-vs-bolt-vs-lovable-2025-handson-review-thetoolnerd)
