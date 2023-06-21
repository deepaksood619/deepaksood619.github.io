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
- [Best Crypto Wallet for Desktop & Mobile: Altcoin & Bitcoin | Exodus](https://www.exodus.com/) (Multi Coin Wallet)
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

## Technologies

[**Threshold Signatures Explained | Binance Academy**](https://academy.binance.com/en/articles/threshold-signatures-explained)

### Multisig

### Threshold Signature Scheme (TSS)

The resulting signature looks the same as one created without the threshold scheme, but it is not created with a single private key. Rather, it is created with multiple private key shares, which are distributed such that no single person controls the private key entirely.

To sign a transaction, enough [Approvers](https://qredo.zendesk.com/hc/en-us/articles/4405882993425) must participate to meet a threshold. This threshold structure is typically conceptualized as “t of n”, in which n refers to the total number of signers, and t refers to the number of Approvers who can sign a transaction on behalf of the entire group. For example, you might have a group of 7 signers (n), and require 4 of them to authenticate a transaction: t of n = 4 of 7.

[What Are Threshold Signatures?](https://www.qredo.com/blog/what-are-threshold-signatures)

[Threshold Signature Schemes. by Ahmet Ramazan Agirtas, Jorge… | by Ahmet | Nethermind.eth | Medium](https://medium.com/nethermind-eth/threshold-signature-schemes-36f40bc42aca)

### Shamir secret sharing scheme (SSSS)

The Shamir secret sharing scheme (SSSS) provides a way to store the private key in a distributed manner such that while the private key is at rest, it is stored in multiple locations.

There are two differences between SSSS and TSS:

- **Key Generation:** in SSSS, there is a single party called “the dealer” that is in charge of generating the private key secret shares. It means that at time of Key Generation, the private key is generated at a single location and then distributed by the dealer to the different locations. In TSS, there is no dealer as its role is distributed such that the full private key is never at a single location.
- **Signing:** in SSSS, the parties must reconstruct the full private key in order to sign, which again results in a single point of failure each time a signature is needed. In TSS, the signing is done in a distributed way without ever reconstructing the secret shares.

As we can see, in TSS the private key (which represents the security of the system) is never at a single location throughout its entire lifetime.
