# N8N

- [n8n.io - a powerful workflow automation tool](https://n8n.io/) (80K stars)
- [GitHub - n8n-io/n8n: Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services.](https://github.com/n8n-io/n8n)
- [A very quick quickstart \| n8n Docs](https://docs.n8n.io/try-it-out/quickstart/)
- [n8n Quickstart - YouTube](https://www.youtube.com/watch?v=1MwSoB0gnM4&ab_channel=n8n)
- [Learning path \| n8n Docs](https://docs.n8n.io/learning-path/)
- [AI Automation Blueprints: SDR System + Content Engine + Claude Prompt Engineering Guide](https://www.ghiless.com/p/ai-automation-blueprints-sdr-system-content-engine-claude-prompt-engineering-guide-a9ec)
- [Discover 80 Automation Workflows from the n8n's Community](https://n8n.io/workflows/categories/devops/)
- [No-Code AI Automations - YouTube](https://www.youtube.com/playlist?list=PLvQWpZ46MVviwm9XRa3UV5QaOTxWrhsBC)

```bash
https://github.com/n8n-io/self-hosted-ai-starter-kit

git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git
cd self-hosted-ai-starter-kit
cp .env.example .env # you should update secrets and passwords inside
docker compose --profile cpu up -d n8n

docker compose --profile cpu up
```

## Workflows

- [GitHub - enescingoz/awesome-n8n-templates: Supercharge your workflow automation with this curated collection of n8n templates! Instantly connect your favorite apps-like Gmail, Telegram, Google Drive, Slack, and more-with ready-to-use, AI-powered automations. Save time, boost productivity, and unlock the true potential of n8n in just a few clicks.](https://github.com/enescingoz/awesome-n8n-templates)
- [n8n-workflows/workflows at main · Zie619/n8n-workflows · GitHub](https://github.com/Zie619/n8n-workflows/tree/main/workflows)
- [🤖 **Build Your First AI Agent – Powered by Google Gemini with Memory** \| n8n workflow template](https://n8n.io/workflows/4941-build-your-first-ai-agent-powered-by-google-gemini-with-memory/)
- [Embeddings Google Gemini integrations \| Workflow automation with n8n](https://n8n.io/integrations/embeddings-google-gemini/)
- [Confluence and Google Gemini Chat Model: Automate Workflows with n8n](https://n8n.io/integrations/confluence/and/google-gemini-chat-model/)
- [**RAG Chatbot for Company Documents using Google Drive and Gemini \| n8n workflow template**](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/)
- [✨🤖Automate Multi-Platform Social Media Content Creation with AI \| n8n workflow template](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)
- [AI-Powered Social Media Content Generator & Publisher \| n8n workflow template](https://n8n.io/workflows/2950-ai-powered-social-media-content-generator-and-publisher/)
- [AI-Powered Cold Calling Automation with Vapi.ai, GPT-4o & Google Sheets \| n8n workflow template](https://n8n.io/workflows/5008-ai-powered-cold-calling-automation-with-vapiai-gpt-4o-and-google-sheets/)
- [Automate Sales Cold Calling Pipeline with Apify, GPT-4o, and WhatsApp \| n8n workflow template](https://n8n.io/workflows/5449-automate-sales-cold-calling-pipeline-with-apify-gpt-4o-and-whatsapp/)
- [200+ Ready To Deploy n8n AI Agents \| Om Nalinde \| 1,646 comments](https://www.linkedin.com/posts/that-aum_200-ready-to-deploy-n8n-ai-agents-activity-7373315297765744642-sEuN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAh8m-QBlVNXzETVf_L6BwCJR0kZzlb4FfE)

## Google Gemini Workflow

```json
{
  "name": "My workflow",
  "nodes": [
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.1,
      "position": [
        660,
        -40
      ],
      "id": "4f82bd7f-8ce8-4460-96e8-5ba3473d1e2f",
      "name": "When chat message received",
      "webhookId": "3af274c6-8b58-43ef-96b3-88c9d13f48a8"
    },
    {
      "parameters": {
        "options": {
          "systemMessage": "You are my intelligent personal assistant. Your role is to help me think critically, access structured external knowledge, and solve complex numerical problems. You have access to the following tools:\n\n1. **Think** – Use this tool to reason step-by-step before giving a final answer.\n2. **SerpAPI** – Use this to access verified external knowledge, including encyclopedic or factual data.\n3. **Calculator** – Use this to perform accurate numerical or mathematical computations.\n\nYour goals:\n- Understand my task or question deeply before responding.\n- When unsure, think step-by-step using the `Think` tool.\n- For factual knowledge or concepts, use the `SerpAPI` tool.\n- For numerical tasks or financial calculations, use the `Calculator`.\n- Always explain your steps in a concise and professional way unless instructed otherwise.\n- Keep answers short and efficient unless asked for elaboration.\n\nAlways act as a helpful, private, and reliable personal assistant."
        }
      },
      "id": "6416a26e-c736-44b3-8078-7fef75abe3ab",
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [
        1200,
        -240
      ],
      "typeVersion": 2
    },
    {
      "parameters": {},
      "id": "1f3491f8-a42f-4fd2-863e-0d9d0bb4de26",
      "name": "Think",
      "type": "@n8n/n8n-nodes-langchain.toolThink",
      "position": [
        1500,
        -40
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "23c704f4-c2f3-48e8-86c9-02307313b5e4",
      "name": "SerpAPI",
      "type": "@n8n/n8n-nodes-langchain.toolSerpApi",
      "position": [
        1920,
        -40
      ],
      "typeVersion": 1,
      "credentials": {
        "serpApi": {
          "id": "GaytWvPESf6C7ew4",
          "name": "SerpAPI account"
        }
      }
    },
    {
      "parameters": {
        "modelName": "models/gemini-2.5-flash",
        "options": {}
      },
      "id": "0000e144-2ab0-41e3-9f93-5a386d65f6a7",
      "name": "Google Gemini Chat Model",
      "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
      "position": [
        1080,
        -40
      ],
      "typeVersion": 1,
      "credentials": {
        "googlePalmApi": {
          "id": "DSRez5nluMGqdvIQ",
          "name": "Google Gemini(PaLM) Api account"
        }
      }
    },
    {
      "parameters": {},
      "id": "d1d3dbfd-c081-40d2-ba7f-260db6c11d1d",
      "name": "Calculator",
      "type": "@n8n/n8n-nodes-langchain.toolCalculator",
      "position": [
        1720,
        -40
      ],
      "typeVersion": 1
    },
    {
      "parameters": {},
      "id": "25c77336-7dd8-4f31-9097-96e185b1bbfa",
      "name": "Simple Memory",
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "position": [
        1300,
        -40
      ],
      "typeVersion": 1.3
    },
    {
      "parameters": {
        "content": "## 👆\nThis is a short term memory. It will remember the 5 previous interactions during the chat",
        "height": 180,
        "width": 150,
        "color": 7
      },
      "id": "d7123b8f-fd52-4c5f-9897-fac05a519965",
      "name": "Sticky Note17",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1260,
        100
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "## 👆\nYou can use  the free Google Gemini options.",
        "height": 180,
        "width": 170,
        "color": 7
      },
      "id": "ca0b5201-0c5f-4ec3-a93c-0e6349fb407f",
      "name": "Sticky Note18",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1040,
        100
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "## 👆\nThe Calculator is a tool that allows an agent to run mathematical calculations.",
        "height": 180,
        "width": 150,
        "color": 7
      },
      "id": "377c0265-4db2-42bc-ae85-b06d133033ab",
      "name": "Sticky Note19",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1700,
        100
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "## 👆\nThe Think is a tool Enables step-by-step reasoning before answering.",
        "height": 180,
        "width": 150,
        "color": 7
      },
      "id": "b2f18010-fe16-4ecf-998f-5b17eabc04f8",
      "name": "Sticky Note20",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1500,
        100
      ],
      "typeVersion": 1
    },
    {
      "parameters": {
        "content": "## 👆\nThe SerpAPI is a tool that allows Performs real-time Google Search using SerpAPI to retrieve factual, up-to-date information.",
        "height": 240,
        "width": 150,
        "color": 7
      },
      "id": "912891fe-ab1c-428b-a00e-0d252c130d5e",
      "name": "Sticky Note21",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1900,
        100
      ],
      "typeVersion": 1
    }
  ],
  "pinData": {},
  "connections": {
    "Think": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "SerpAPI": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Calculator": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Google Gemini Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "87ed98ea-8273-4ff3-9267-a5909af5bcb8",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "558d88703fb65b2d0e44613bc35916258b0f0bf983c5d4730c00c424b77ca36a"
  },
  "id": "hlRhH3gaFbLMbgau",
  "tags": []
}
```

## N8N vs Dify

- [\[Help\] n8n vs. Dify: Which is the ultimate choice for building Agents? : r/AI\_Agents](https://www.reddit.com/r/AI_Agents/comments/1l6yzc3/help_n8n_vs_dify_which_is_the_ultimate_choice_for/)
- [n8n vs. Dify vs. Coze: A Comprehensive Comparison of Automation and AI Platforms](https://go.lightnode.com/tech/n8n-dify-coze)

## Others

- [GitHub - langgenius/dify: Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.](https://github.com/langgenius/dify)
	- [Dify: Production-Ready AI Agent Builder](https://dify.ai/)
