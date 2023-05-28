# Wallets

not your keys, not your crypto

## Types of Crypto wallets

Not your keys not your coins

- Hot wallets
  - These types of bitcoin wallets are connected to the internet and are typically available online or on your smartphone.
  - Custodial wallets

- Cold wallets / Hardware Wallets
  - These types of bitcoin wallets cannot be accessed through the internet. They often involve physical devices (like a USB stick), where bitcoin and other cryptocurrencies can be stored securely offline.
  - Authentication with hardware wallets like the Grid+ Lattice1, Keystone, Ledger, and Trezor.
  - [Ledger Nano S Plus | Ledger](https://shop.ledger.com/products/ledger-nano-s-plus)

- Paper Wallets - [5 Steps to Creating an ULTRA Secure Bitcoin Paper Wallet (2023 Updated)](https://99bitcoins.com/bitcoin-wallet/paper/)

[How to Store Your Bitcoin](https://www.coindesk.com/learn/how-to-store-your-bitcoin)

[Hardware Wallets And MetaMask: The Best Security Combo | ConsenSys](https://consensys.net/blog/metamask/hardware-wallets-and-metamask-the-best-security-combo/)

[How Bitcoin Wallets Work (Public & Private Key Explained) - YouTube](https://www.youtube.com/watch?v=GSTiKjnBaes)

## Crypto Wallets

- Metamask (A crypto wallet & gateway to blockchain apps)
  - [MetaMask Portfolio dApp](https://portfolio.metamask.io/)
  - [MetaMask under the hood—not just a crypto wallet - Chainstack](https://chainstack.com/metamask-behind-the-scenes-not-only-a-crypto-wallet/)
- Trustwallet (Multi Coin Wallet)
- [Leap Wallet](https://www.leapwallet.io/)
- [Cake Wallet](https://cakewallet.com/)
- [Buy Bitcoin &amp; cryptocurrency | Wallet, news, education](https://www.bitcoin.com/)

[Metamask Learn: Your guide to getting started in Web3](https://learn.metamask.io/lessons/what-is-a-crypto-wallet)

[TOP 3 DEFI WALLETS FOR 2021 - What Features Do They Support? - YouTube](https://www.youtube.com/watch?v=JCYIFtb8DwM)

## Working

### How Many Bitcoin Addresses Are There

As long as Bitcoin uses the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) hash function, there are 2^160 Bitcoin addresses.

That number is: **1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976**

Bitcoin addresses are created using public keys. The public key is first hashed with the [SHA256 algorithm](https://en.wikipedia.org/wiki/SHA-2), then that hash is taken and hashed again using the previously mentioned RipeMD160 algorithm.

[How Many Bitcoin Addresses Are There (2022 Update)](https://privacypros.io/btc-faq/how-many-btc-addresses)

### So how do wallets determine if an address belongs to you?

They simply draw them at random. This means, of course, that two different Bitcoin wallets could theoretically generate the same address, and that the two owners could then spend the same funds. Shocking? Yes, but you will be told that such an event is unlikely to happen. Let’s examine together the probability for such an event to happen.

The total number of possible Bitcoin addresses is 2^160. By performing statistical calculations, it is possible to determine the probability that two wallets will randomly generate the same address. For mathematical details, please refer to [this article](https://download.wpsoftware.net/bitcoin-birthday.pdf).

We can therefore conclude the following: the probability of having a 99.9999% chance of having an address collision, ie. your wallet randomly generating the same address as another is one in 6.35.10^24.

[What if my wallet generated an existing Bitcoin address? | Coinhouse](https://www.coinhouse.com/insights/news/what-if-my-wallet-generated-an-existing-bitcoin-address/)
