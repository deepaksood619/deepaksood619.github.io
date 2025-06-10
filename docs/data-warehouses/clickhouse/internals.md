# Internals

## Internals

[Modern SQL in 2023 - ClickHouse - YouTube](https://www.youtube.com/watch?v=zhrOYQpgvkk)

["Building for Fast" by Alexey Milovidov, Amsterdam, June 2022 - YouTube](https://www.youtube.com/watch?v=CAS2otEoerM&ab_channel=ClickHouse)

[**Why is ClickHouse so fast? | ClickHouse Docs**](https://clickhouse.com/docs/en/concepts/why-clickhouse-is-so-fast)

- [Why is ClickHouse fast? - YouTube](https://www.youtube.com/playlist?list=PL0Z2YDlm0b3h6OKKbWVtZK3Ee6695ipEv)

[Distinctive Features of ClickHouse \| ClickHouse Docs](https://clickhouse.com/docs/about-us/distinctive-features)

## Sharding vs Replication

![Sharding vs replication](../../media/Screenshot%202025-05-15%20at%207.40.59%20AM.jpg)

## Replication

[Introduction to the Mysteries of ClickHouse Replication \| ClickHouse Webinar - YouTube](https://www.youtube.com/watch?v=4DlQ6sVKQaA&t=878s&ab_channel=Altinity)

- Zookeeper for sharing metadata
- Zookeeper port - 2181
- Clickhouse native TCP/IP - 9000
- Clickhouse communication between replicated instances - 9009

![Clickhouse Replication](../../media/Screenshot%202025-05-15%20at%207.47.08%20AM.jpg)

### Clickhouse Keeper

- [Why is ClickHouse Keeper recommended over ZooKeeper? \| ClickHouse Docs](https://clickhouse.com/docs/knowledgebase/why_recommend_clickhouse_keeper_over_zookeeper)
- [ClickHouse Keeper \| ClickHouse Docs](https://clickhouse.com/docs/guides/sre/keeper/clickhouse-keeper)
