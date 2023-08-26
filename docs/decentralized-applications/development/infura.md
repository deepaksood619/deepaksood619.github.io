# Infura

### Get the current block number

```bash
curl https://mainnet.infura.io/v3/YOUR-API-KEY \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}'
```

### View the Ether balance of a specified contract

```bash
curl https://mainnet.infura.io/v3/API-KEY \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1}'
```

## Links

[Getting started | INFURA](https://docs.infura.io/getting-started)

[Network endpoints | INFURA](https://docs.infura.io/network-endpoints)
