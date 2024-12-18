# Social Media Analytics Solution

[Build and deploy a social media analytics solution - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/build-deploy-social-media-analytics-solution)

[Social media analysis with Azure Stream Analytics - Azure Stream Analytics | Microsoft Learn](https://learn.microsoft.com/en-us/azure/stream-analytics/stream-analytics-twitter-sentiment-analysis-trends)

![social media analytics solution architecture](../media/Pasted%20image%2020240227211925.jpg)

### Dataflow

1. Azure Synapse Analytics pipelines ingest external data and store that data in Azure Data Lake. One pipeline ingests data from news APIs. The other pipeline ingests data from the Twitter API.
2. Apache Spark pools in Azure Synapse Analytics are used to process and enrich the data.
3. The Spark pools use the following services:
    - Azure Cognitive Service for Language, for named entity recognition (NER), key phrase extraction, and sentiment analysis
    - Azure Cognitive Services Translator, to translate text
    - Azure Maps, to link data to geographical coordinates
4. The enriched data is stored in Data Lake.
5. A serverless SQL pool in Azure Synapse Analytics makes the enriched data available to Power BI.
6. Power BI Desktop dashboards provide insights into the data.
7. As an alternative to the previous step, Power BI dashboards that are embedded in Azure App Service web apps provide web and mobile app users with insights into the data.
8. As an alternative to steps 5 through 7, the enriched data is used to train a custom machine learning model in Azure Machine Learning.
9. The model is deployed to a Machine Learning endpoint.
10. A managed online endpoint is used for online, real-time inferencing, for instance, on a mobile app (**A**). Alternatively, a batch endpoint is used for offline model inferencing (**B**).

[Azure-Social-Media-Analytics-Solution-Accelerator/Deployment/Deployment.md at main · microsoft/Azure-Social-Media-Analytics-Solution-Accelerator · GitHub](https://github.com/microsoft/Azure-Social-Media-Analytics-Solution-Accelerator/blob/main/Deployment/Deployment.md)

[GitHub - microsoft/Azure-Social-Media-Analytics-Solution-Accelerator](https://github.com/microsoft/Azure-Social-Media-Analytics-Solution-Accelerator)
