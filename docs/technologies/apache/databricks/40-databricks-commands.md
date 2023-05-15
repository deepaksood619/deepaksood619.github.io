# Databricks-commands

## Databricks CLI

```bash
pip install --upgrade databricks-cli

databricks configure

# Test connection
databricks fs ls dbfs:/

# secrets cli
## create a secret scope
databricks secrets create-scope --scope my-scope

## delete a secret
databricks secrets delete --scope my-scope --key my-key

## List the secret keys stored within a secret scope
databricks secrets list --scope my-scope --output JSON

## List all available secret scopes in the workspace
databricks secrets list-scopes --output JSON
```

[Databricks CLI setup & documentation | Databricks on AWS](https://docs.databricks.com/dev-tools/cli/index.html)

[Databricks SQL CLI | Databricks on AWS](https://docs.databricks.com/dev-tools/databricks-sql-cli.html)

[GitHub - databricks/databricks-cli: Command Line Interface for Databricks](https://github.com/databricks/databricks-cli)
