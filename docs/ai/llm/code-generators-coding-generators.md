# Code Generators / Coding Generators

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

## Others

- Tabnine
- [Amazon Q Developer](https://aws.amazon.com/q/developer/)
	- [What is CodeWhisperer? - CodeWhisperer](https://docs.aws.amazon.com/codewhisperer/latest/userguide/what-is-cwspr.html)
- [AI Code Reviews | CodeRabbit | Try for Free](https://coderabbit.ai/)
- [AI Code Generation | Google Cloud](https://cloud.google.com/use-cases/ai-code-generation?hl=en)
- [Galileo AI · Copilot for interface design](https://www.usegalileo.ai/)
- [Cursor - The AI-first Code Editor](https://www.cursor.com/)
- [Windsurf Editor](https://windsurf.com/)
- [GitHub - openai/codex: Lightweight coding agent that runs in your terminal](https://github.com/openai/codex)
- [GitHub - google-gemini/gemini-cli: An open-source AI agent that brings the power of Gemini directly into your terminal.](https://github.com/google-gemini/gemini-cli)
- [Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)
	- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [Firebase Studio](https://firebase.studio/)
- [Kilo Code - Open source AI agent VS Code extension](https://kilocode.ai/)
- [GitHub - Pythagora-io/gpt-pilot: The first real AI developer](https://github.com/Pythagora-io/gpt-pilot)

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
