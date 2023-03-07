# Trade offs

## Tradeoffs

- Speed vs. memory
- battery life vs. accuracy
- fairness vs. accuracy
- precision vs. recall
- ease of implementation vs. maintainability
- explore vs exploit

## Questions

Cost

- Operational complexity
- How easy is it to scale if the TSDB storage is low?
- How easy is it to scale the performance with increased data?
- Are there any operations tasks that regularly need to be carried out?
Capabilities
- Does the TSDB support metrics and events?
- Can metadata be associated with an event?
- What is the precision i.e. the smallest increment of time between events?
- What is the consistency model?
- Can the data have a Time To Live?
Performance
- How many events per second can be written in, for a given scale of the system?
- How many events per second can be read out, for a given scale of the system?
- Bytes per point after any compression that occurs? (What volume of space is required?)
Query capabilities
- How is the data queried? DSL? API?
- How easy is the query mechanism to use?
- Can the query mechanism aggregate data? Can it do it by date?
- Can we de-dupe data? e.g., if we ingested the same event twice? A uniqueness constraint.
Ingestion
- How is the data sent to the TSDB? API? Log scraping? Multi language clients?
Export
- How could the entire TSDB be exported for use elsewhere or in another TSDB?
Maturity
- How mature is the TSDB and its ecosystem? Is it likely to die soon? Does it have good support?
Community
- How large and active is the community using the TSDB? If I have a problem will I be able to find someone to help me solve it?
Support
- Is there any paid support for the TSDB and if so how much?
Security
- What are the mechanisms for authentication and authorisation?
- What other security implications are there?
Integration
- How easy is it to integrate with other services? Is there anything specific that helps?
Visualisation
- How can the data from the TSDB be visualised?
- Are there any dashboards / high level visualisations?
- Are the dashboards internal to the TSDB or can they be shared on a website?
<https://medium.com/kudos-engineering/choosing-the-elastic-stack-as-a-time-series-database-9fac202c53ba>

## TSDB

<https://outlyer.com/blog/top10-open-source-time-series-databases>
