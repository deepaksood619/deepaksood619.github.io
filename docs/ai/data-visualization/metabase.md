# Metabase

Metabase is an open source business intelligence tool. It lets you ask questions about your data, and displays answers in formats that make sense, whether that's a bar graph or a detailed table.

Your questions can be saved for later, making it easy to come back to them, or you can group questions into great looking dashboards. Metabase also makes it easy to share questions and dashboards with the rest of your team.

`docker run -p 3000:3000 --name metabase metabase/metabase`

https://www.metabase.com/docs/latest/users-guide/01-what-is-metabase.html

https://www.metabase.com/docs/latest/getting-started.html

https://www.metabase.com/learn

https://github.com/metabase/metabase

[Joins in Metabase](https://www.metabase.com/learn/questions/joins-in-metabase)

## Embedding

[Embedding overview](https://www.metabase.com/docs/latest/embedding/start)

### Types

- [Full-app embedding](https://www.metabase.com/docs/latest/embedding/full-app-embedding)
- [Signed embedding](https://www.metabase.com/docs/latest/embedding/signed-embedding)
- [Parameters for signed embeds](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters)

### Demo

[Metabase | See what’s possible with embedded analytics](https://www.metabase.com/embedding-demo)

### Parameters for signed embeds

Parameters are pieces of information that are passed between Metabase and your website via the [embedding URL](https://www.metabase.com/docs/latest/embedding/signed-embedding#adding-the-embedding-url-to-your-website). You can use parameters to specify how Metabase items should look and behave inside the iframe on your website.

#### Types of parameters

Parameters can be signed or unsigned.

**Signed parameters**, such as filter names and values, must be added to your server code.

- [Editable parameters](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters#adding-a-filter-widget-to-a-signed-embed)
- [Locked parameters](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters#restricting-data-in-a-signed-embed)

**Unsigned parameters**, such as appearance settings, should be added directly to your iframe’s `src` attribute.

- [Default values for editable parameters](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters#populating-an-embedded-filter-widget-with-a-default-value)
- [Visibility settings for editable parameters](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters#hiding-filter-widgets-from-a-signed-embed)
- [Appearance settings](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters#customizing-the-appearance-of-a-signed-embed)

[Parameters for signed embeds](https://www.metabase.com/docs/latest/embedding/signed-embedding-parameters)

## Plugins / Tools

```bash
# clickhouse

export METABASE_DOCKER_VERSION=v0.47.2
export METABASE_CLICKHOUSE_DRIVER_VERSION=1.2.2

mkdir -p mb/plugins && cd mb

curl -L -o plugins/ch.jar https://github.com/ClickHouse/metabase-clickhouse-driver/releases/download/$METABASE_CLICKHOUSE_DRIVER_VERSION/clickhouse.metabase-driver.jar

docker run -d -p 3000:3000 \
  --mount type=bind,source=$PWD/plugins/ch.jar,destination=/plugins/clickhouse.jar --network="host" \
  metabase/metabase:$METABASE_DOCKER_VERSION
```

[GitHub - nobuyo/metastasis: DaC(Dashboard as Code) for Metabase.](https://github.com/nobuyo/metastasis)

## Dashboards

### Filters

[Dashboard filters](https://www.metabase.com/docs/latest/dashboards/filters)

[SQL parameters](https://www.metabase.com/docs/latest/questions/native-editor/sql-parameters)

## Links

[Embedding Metabase: Setting up customer-facing analytics - YouTube](https://www.youtube.com/watch?v=cwYXnUHA5HM)

[Metabot](https://www.metabase.com/glossary/metabot)

- No longer supported
