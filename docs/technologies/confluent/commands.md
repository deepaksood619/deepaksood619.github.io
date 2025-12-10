# Commands

```bash
brew install confluentinc/tap/cli

confluent version

confluent login

confluent environment list

confluent environmnent use env-q2rmnp

confluent kafka cluster list

# cluster id = lkc-zmjxkd
confluent kafka cluster use lkc-zmjxkd

confluent api-key store --resource lkc-zmjxkd

confluent api-key use --resource lkc-zmjxkd

confluent kafka toipc consume clickstream
```

[Install the Confluent CLI \| Confluent Documentation](https://docs.confluent.io/confluent-cli/current/install.html)
