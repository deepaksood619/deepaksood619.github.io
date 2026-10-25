---
slug: /kafka-connect-smts
title: Kafka Connect Single Message Transforms (SMTs)
description: Built-in Kafka Connect Single Message Transforms, including HoistField, with configuration examples
created: 2026-10-22
updated: 2026-10-22
---

Single Message Transforms (SMTs) are lightweight per-record transformations applied inside Kafka Connect, either before a source connector writes to Kafka or before a sink connector writes to the external system. They are best for lightweight record changes, not complex joins, filtering, or business logic.

## Key Points

- Use the `$Key` suffix to transform the record key and `$Value` to transform the record value (e.g. `ReplaceField$Value`).
- Multiple SMTs can be chained via `transforms=a,b,c`; they run in the listed order.
- Each transform is configured as `transforms.<name>.type` plus its own properties.

## Built-in SMTs

| SMT | Purpose |
| --- | --- |
| InsertField | Add a static, topic, partition, offset, or timestamp field |
| ReplaceField | Include, exclude, or rename fields |
| MaskField | Replace sensitive fields with default values |
| ExtractField | Extract one field from a structured record |
| ValueToKey | Copy value fields into the record key |
| HoistField | Wrap the entire key/value inside one field |
| Flatten | Flatten nested structures |
| Cast | Convert field data types |
| TimestampConverter | Convert timestamp formats or types |
| SetSchemaMetadata | Set or change schema name/version |
| RegexRouter | Rename topics using a regular expression |
| TimestampRouter | Route records to time-based topic names |
| InsertHeader | Add a header to the Kafka record |
| HeaderFrom | Copy fields to or from record headers |

## HoistField

HoistField wraps the entire record key or value inside a named field. Use it when a connector or downstream system requires the record value to be a structured object. It wraps the whole value; it does not add a field to an existing object.

Input value:

```text
"hello"
```

Configuration:

```properties
transforms=Hoist
transforms.Hoist.type=org.apache.kafka.connect.transforms.HoistField$Value
transforms.Hoist.field=payload
```

Output value:

```json
{
  "payload": "hello"
}
```

To wrap the key instead, use `org.apache.kafka.connect.transforms.HoistField$Key`.

## Example: ReplaceField

Rename and remove fields:

```properties
transforms=Replace
transforms.Replace.type=org.apache.kafka.connect.transforms.ReplaceField$Value
transforms.Replace.renames=old_name:new_name
transforms.Replace.exclude=internal_field
```

## Links

- [Kafka Connect](technologies/kafka/ecosystem/kafka-connect.md)
- [Kafka Connect Transforms (Confluent docs)](https://docs.confluent.io/current/connect/concepts.html#connect-transforms)
