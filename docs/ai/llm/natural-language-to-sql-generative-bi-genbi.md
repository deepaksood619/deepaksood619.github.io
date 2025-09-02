# Natural Language to SQL / Generative BI / GenBI

Unified NLQ (Natural Language Query)

![WrenAI GenBI Architecture](../../media/Screenshot%202025-08-01%20at%207.46.43%20PM.jpg)

## Tools

- [**Dataherald**](https://github.com/Dataherald/dataherald) - natural language-to-SQL engine built for enterprise-level question answering over structured data. [HN launch post](https://news.ycombinator.com/item?id=37240363).
- [SQLCoder-2–7b: How to Reliably Query Data in Natural Language, on Consumer Hardware | by Sjoerd Tiemensma | Use AI | Medium](https://medium.com/use-ai/sqlcoder-2-7b-how-to-reliably-query-data-in-natural-language-on-consumer-hardware-cb352a3cf3ab)
- [GitHub - RamiKrispin/lang2sql: A tutorial for setting an SQL code generator with the OpenAI API](https://github.com/RamiKrispin/lang2sql)
- [Waii - World's most powerful SQL API built with generative AI](https://www.waii.ai/)
- SAAS - [Text to SQL & AI Query Generator \| Text2SQL.ai](https://www.text2sql.ai/)
- **Uber - QueryGPT**
	- [QueryGPT - Natural Language to SQL using Generative AI \| Uber Blog](https://www.uber.com/en-IN/blog/query-gpt/)
	- [Uber’s AI SQL Generator for Data Insights — QueryGPT \| by codevil \| Feb, 2025 \| Medium](https://medium.com/@bilosantonela1996/ubers-ai-sql-generator-for-data-insights-querygpt-090a82bd42a7)
	- [QueryGPT](https://querygpt.xyz/)
- [Wren AI \| GenBI (Generative BI) & Embedded Analytics for Smarter Decisions](https://getwren.ai/)
	- [GitHub - Canner/WrenAI: ⚡️Wren AI is your GenBI Agent, that you can query any database with natural language, get accurate SQL(Text-to-SQL), charts(Text-to-Charts) & AI-generated insights in seconds.](https://github.com/Canner/WrenAI) - 9.7K
	- [GitHub - Canner/wren-engine: 🤖 The Semantic Engine for Model Context Protocol(MCP) Clients and AI Agents 🔥](https://github.com/Canner/wren-engine)
	- [Wrenai Cloud Api Demo - a Hugging Face Space by getWrenAI](https://huggingface.co/spaces/getWrenAI/wrenai-cloud-api-demo)
	- [Wren AI](https://docs.getwren.ai/oss/overview/cloud_vs_self_host)
	- [The Wren AI Blog - Wren AI vs. Vanna: The Enterprise Guide to Choosing a Text-to-SQL Solution](https://getwren.ai/post/wren-ai-vs-vanna-the-enterprise-guide-to-choosing-a-text-to-sql-solution)
	- [Query & Answering](https://wrenai.readme.io/reference/sql-generation)
	- [How to setup Wren AI using your Custom LLM or Embedder \| Wren AI](https://docs.getwren.ai/oss/ai_service/guide/custom_llm)
- [GitHub - vanna-ai/vanna: 🤖 Chat with your SQL database 📊. Accurate Text-to-SQL Generation via LLMs using RAG 🔄.](https://github.com/vanna-ai/vanna) - 19.8K
	- [Vanna AI in 100 Seconds - YouTube](https://www.youtube.com/watch?v=MR8t1egprjs&ab_channel=VannaAI)
	- [Vanna.AI - Personalized AI SQL Agent](https://vanna.ai/)
	- [Quickstart With Sample Data - Vanna.AI Documentation](https://vanna.ai/docs/app/)
	- [vannaAI/demo.ipynb at main · anasmalik081/vannaAI · GitHub](https://github.com/anasmalik081/vannaAI/blob/main/demo.ipynb)
- [GitHub - weaviate/elysia: Python package and backend for the Elysia platform app.](https://github.com/weaviate/elysia)
	- [Elysia - Demo](https://elysia.weaviate.io/)
	- [Elysia: Building an end-to-end agentic RAG app \| Weaviate](https://weaviate.io/blog/elysia-agentic-rag)

## Code

```python
from langchain import OpenAI, SQLDatabase, SQLDatabaseChain
```

[SQLDatabaseChain](https://h3manth.com/notes/SQLDatabaseChain/)

## Generative BI in Telecom

- [Practical use cases of Generative AI in Telecom](https://www.linkedin.com/pulse/practical-use-cases-generative-ai-telecom-n-ix-6s2gf/)
- [pages.awscloud.com/rs/112-TZM-766/images/Altman Solon\_AWS\_Telecoms Generative AI Study.pdf](https://pages.awscloud.com/rs/112-TZM-766/images/Altman%20Solon_AWS_Telecoms%20Generative%20AI%20Study.pdf)
- [Generative AI in Telecom: 5 Use Cases & Future Outlook](https://binmile.com/blog/generative-ai-in-telecom-industry/)

## Test Prompts

What are the rental patterns and lifetime value segments of customers, including their geographic clustering and seasonal preferences? answer the above question using the database

[Customer Rental Pattern Analysis - Claude](https://claude.ai/share/49ca4d91-4aa7-4614-a528-29555cdc93b6)

## Links

- [Natural Language to SQL | LangChain, SQL Database & OpenAI LLMs - YouTube](https://www.youtube.com/watch?v=w-eTS8YlbZ4)
- [Generative AI use case: Unified Natural Language Query (LLM to SQL) - YouTube](https://www.youtube.com/playlist?list=PL-pTHQz4RcBbJbifxCcJp6pJocNj1Dmfp)
    - [Ep. 3 - This is the "Killer App" of Enterprise AI - YouTube](https://www.youtube.com/watch?v=zuLxXDdEVEE)
- [Chat with SQL and Tabular Databases using LLM Agents (DON'T USE RAG!) - YouTube](https://www.youtube.com/watch?v=ZtltjSjFPDg)
- [Natural Language to SQL using Google's Gemini Pro Model | SQL Database | Python - YouTube](https://www.youtube.com/watch?v=NUbYDCqojew)
- [End To End Text To SQL LLM App Along With Querying SQL Database Using Google Gemini Pro - YouTube](https://www.youtube.com/watch?v=wFdFLWc-W4k)
- [Pinterest's Text to SQL system through LLMs!](https://mlops.substack.com/p/pinterests-text-to-sql-system-through)
- [**Amazon Q generative SQL in Amazon Redshift** Query Editor Public Preview Demo | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=4N9IplToB-w)
- [The Future of Tableau-Centric Roles: What’s Next for Data Professionals in the Next Five Years (per Deep Research)? \| by Adam Mico \| Bootcamp \| Medium](https://medium.com/design-bootcamp/the-future-of-tableau-centric-roles-whats-next-for-data-professionals-in-the-next-five-years-per-e48295af2eaf)
- **[Has Self-Serve BI Finally Arrived Thanks to AI? \| ssp.sh](https://www.ssp.sh/blog/self-service-bi-ai/)**
- [SQL-GPT: The Dawn of a New SQL Era](https://fractal.ai/article/the-dawn-of-a-new-sql-era)
- [GitHub - sinaptik-ai/pandas-ai: Chat with your database or your datalake (SQL, CSV, parquet). PandasAI makes data analysis conversational using LLMs and RAG.](https://github.com/sinaptik-ai/pandas-ai)
	- [PandasAI - Dev Tools for AI Builders](https://pandas-ai.com/)
- [The Future of Business Intelligence: The Generative BI (GenBI) \| by Howard Chi \| Wren AI \| Medium](https://medium.com/wrenai/the-future-of-business-intelligence-the-generative-bi-genbi-d5c18371a45f)
