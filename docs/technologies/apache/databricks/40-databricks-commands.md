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

## List all available secret scopes in the workspace
databricks secrets list-scopes --output JSON

## List the secret keys stored within a secret scope
databricks secrets list --scope my-scope --output JSON

## Put a secret into specific scope
databricks secrets put --scope abc-scope --key abc
## An editor opens, Paste your secret value above the line and save and exit the editor. Your input is stripped of the comments and stored associated with the key in the scope.
```

[Databricks CLI setup & documentation | Databricks on AWS](https://docs.databricks.com/dev-tools/cli/index.html)

[Databricks SQL CLI | Databricks on AWS](https://docs.databricks.com/dev-tools/databricks-sql-cli.html)

[GitHub - databricks/databricks-cli: Command Line Interface for Databricks](https://github.com/databricks/databricks-cli)

[Secrets | Databricks on AWS](https://docs.databricks.com/security/secrets/secrets.html)

## Notebook Shortcuts

- H - show all shortcuts
- cmd-shift-f : Format code
- cmd + / : Comment all highlighted code
