# DAO

- **DAO - Decentralized Autonomous Organization**
- Governance implemented in Ethereum smart contracts. **Code is Law**, etc
- Own token: DAO
- Crowdfunding in June 2016: $150 million
- Vulnerability in the split function: time-of-check/time-of-use vs recursive calls
    - Anyone can propose to create a child DAO
    - Contract first retrieves Ether from main DAO, then checks against proponent balance
    - Recursive call allows this to be nested/magnified
    - Mid June 2016: $60 million worth in rogue child DAO
    - Build in 48 day period before funds can be transferred out
- Heated discussion led to hard fork of the entire Ethereum Blockchain

[Decentralized autonomous organizations (DAOs) | ethereum.org](https://ethereum.org/en/dao/)
