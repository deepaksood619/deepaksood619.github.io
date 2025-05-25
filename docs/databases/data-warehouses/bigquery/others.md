# Others

## Public Datasets

- [ERA5](https://console.cloud.google.com/marketplace/product/bigquery-public-data/arco-era5): Datasets from the European Centre for Medium-Range Weather Forecasts (ECMWF) that provide worldwide, hourly estimates of numerous climate variables. Data available from 1940 to May 2023.
- [Sentinel-2](https://console.cloud.google.com/marketplace/product/esa-public-data/sentinel2): A satellite image dataset from the European Space Agency (ESA) that includes multispectral images of the Earth's land surface, with a resolution of 10–60 meters per pixel, from 2015 through the present.
- [NEXRAD level 2](https://console.cloud.google.com/marketplace/product/noaa-public/nexrad-l2) and [NEXRAD level 3](https://console.cloud.google.com/marketplace/product/noaa-public/nexrad-l3): A weather radar dataset collected from a network of 160 high-resolution Doppler weather radars operated by the NOAA National Weather Service (NWS), the Federal Aviation Administration (FAA), and the U.S. Air Force (USAF).
- [Landsat Collection 1 data](https://console.cloud.google.com/marketplace/product/usgs-public-data/landast): A satellite image dataset from the United States Geological Survey (USGS) and NASA.
	- [Earth Engine \| Google Cloud](https://cloud.google.com/earth-engine)

[Cloud Storage public datasets  \|  Google Cloud](https://cloud.google.com/storage/docs/public-datasets)

## Geospatial

- Estimate when a package is likely to arrive.
- Determine which customers should receive a mailer for a particular store location.
- Combine your data with percent tree cover from satellite imagery to decide if delivery by aerial drone is feasible.

[Introduction to geospatial analytics  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/geospatial-intro)

## BigQuery Canvas

BigQuery Studio data canvas, which is a [Gemini in BigQuery](https://cloud.google.com/gemini/docs/bigquery/overview) feature, lets you find, transform, query, and visualize data by using natural language prompts and a graphic interface for analysis workflows.

For analysis workflows, BigQuery data canvas uses a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG), which provides a graphical view of your workflow. In BigQuery data canvas, you can iterate on query results and work with multiple branches of inquiry in a single place.

BigQuery data canvas is designed to accelerate analytics tasks and help data professionals such as data analysts, data engineers, and others with their data-to-insights journey. It doesn't require that you have technical knowledge of specific tools, only basic familiarity with reading and writing SQL. BigQuery data canvas works with [Dataplex](https://cloud.google.com/dataplex/docs/introduction) metadata to identify appropriate tables based on natural language.

BigQuery data canvas isn't intended for direct use by business users.

BigQuery data canvas uses Gemini in BigQuery to find your data, create SQL, generate charts, and create data summaries.

[Analyze with BigQuery data canvas  \|  Google Cloud](https://cloud.google.com/bigquery/docs/data-canvas)

## DataPlex

Dataplex is an intelligent data fabric that unifies distributed data and automates data management and governance. Through Dataplex, you can use AI to ease data queries, quality assurance, and business insights.

Dataplex performs governance at scale. Take, for example, a global retail company generating large amounts of sales, inventory, and customer data stored in Cloud Storage, Spanner, and Pub/Sub. With data distributed across systems, managing governance, ensuring quality, and maintaining compliance is complex and time-consuming. Dataplex simplifies this process by providing a central view to discover, profile, validate, track the lineage of, and control access to organizational data assets.

- [What is Dataplex? - YouTube](https://www.youtube.com/watch?v=bbFeAt7cw1g&ab_channel=GoogleCloudTech)
- [Govern your data at scale with Dataplex - YouTube](https://www.youtube.com/watch?v=9OtbeRWBsLE&ab_channel=GoogleCloudTech)
- [Manage and govern distributed data with Dataplex - YouTube](https://www.youtube.com/watch?v=a6QVNAlAAl0&ab_channel=GoogleCloudEvents)
- [Dataplex: data governance \| Google Cloud](https://cloud.google.com/dataplex)
- [Dataplex overview  \|  Google Cloud](https://cloud.google.com/dataplex/docs/introduction)

## Others

- [Write data from Kafka to BigQuery with Dataflow  \|  Google Cloud](https://cloud.google.com/dataflow/docs/kafka-dataflow)
