# BIP39

## BIP39 Wallet

Bitcoin Improvement Proposals or BIP's are design features, inputs, ideas, information, or changes for essentially how Bitcoin works (including storage i.e. wallets).

One of these features is BIP39 (short for Bitcoin Improvement Proposal: 39). BIP39 is a standard that proposed utilizing a mnemonic phrase -- a group of easy to remember words -- to serve as a back up to recover your wallet and coins in the event your wallet becomes lost or destroyed. This is also known as a seed phrase, recovery phrase, wallet back up, etc.

Your wallet will generate this phrase for you when you create a new wallet. If you have an existing phrase, you can input it into your wallet to re-generate your wallet.

When starting a new wallet, the instructions will typically advise you to write a 12-24 word phrase down to serve as a recovery method in the event your wallet breaks or stops working.

## BIP39: Mnemonic code for generating deterministic keys

**B**itcoin **I**mprovement **P**roposals (**BIP**). BIPs are documentation for features, ideas, information, changes, improvements, etc. for how Bitcoin works.

Each of these BIPs are designated by a number.

[**BIP39**](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki "bip39") or Bitcoin Improvement Proposal: 39 is one of the many design ideas that was approved by an economic majority of the Bitcoin community and became a standard for many popular wallets.

Again, BIP39 is the use of a mnemonic phrase -- a group of easy to remember words -- to serve as a back up to recover your wallet and coins in the event your wallet becomes compromised, lost, or destroyed.

The [BIP39 documentation](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki "bip39") describes the specific steps a wallet must take (i.e. algorithm) to generate this mnemonic phrase. This includes specific requirements, structure, practices, words, etc.

In addition to [its specific structure](https://www.blockplate.com/blogs/blockplate/how-a-seed-phrase-is-created "how a bip39 seed phrase is created"), it must utilize a specific list of words when generating your mnemonic phrase. That is known as the [BIP39 wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt "bip 39 word list").

## BIP39 Word List

The words in your mnemonic phrase aren't just any random words. They are pulled from a specific list of 2048 words known as the [BIP39 wordlist](https://www.blockplate.com/pages/bip-39-wordlist "bip39 word list"). Upon start up, wallets that utilize the BIP39 standard will provide you a 12-24 word phrase randomly chosen from the standard [BIP39 wordlist.](https://www.blockplate.com/pages/bip-39-wordlist "bip39 wordlist")

In this list, the first 4 letters are **unique** to each word.

To clarify "unique", we mean literally the first 4 letters (**not** the first 4 different letters). For example the word "apple", "appl" does not come up anywhere else in the [BIP39 wordlist](https://www.blockplate.com/pages/bip-39-wordlist "Bip39 wordlist").

For words that only have 3 letters, there is no 4th letter. For example with the word "add", there are no more letters afterwards and thus must be the word "add". The word "addict" is in the [BIP39 wordlist](https://www.blockplate.com/pages/bip-39-wordlist "Bip39 wordlist") but you would have used "addi" for "addict".

In other words, there are **no two words** in this list with the same first 4 characters.

That means if you have the first 4 letters, you know the rest of the word by looking for those first 4 letters in the [BIP39 wordlist](https://www.blockplate.com/pages/bip-39-wordlist "bip39 wordlist"). Some wallets will even fill in the rest of the word once the first 4 letters are entered.

- https://www.blockplate.com/pages/bip-39-wordlist

## BIP39 Wallet Recovery

Remember, your coins [**are not stored**](https://www.blockplate.com/blogs/blockplate/does-my-wallet-store-my-coins "wallet does not store coins") on your wallet device. They're stored on the blockchain (i.e. a universal network) and can be accessed by utilizing your seed phrase. Your wallet stores the "access" to those coins, not the coins themselves.

If you are recovering an existing wallet, the wallet's software will ask you if you have an existing phrase or have the option to import one. You'll enter in your existing mnemonic seed phrase and voilà, your coins are recovered...right?

Well actually, it's not that simple (but it should be!). Let's go into background as to why that is.

- https://bitcoin.stackexchange.com/questions/105825/btc-wallet-recovery-i-have-a-17-word-backup-what-do-i-do
- https://www.reddit.com/r/Bitcoin/comments/l65my4/17_word_pass_phrase/?rdt=42700
- [Blockchain.info wallet recovery phrase - 17 words, not 12](https://bitcointalk.org/index.php?topic=2491439.0)
- https://www.cryptorecovery.io/
- https://www.cryptorecovery.io/post/recover-blockchain-com-wallet
- [Recover blockchain seed 15 to 21 mnemonic | Medium](https://keychainx.medium.com/how-to-recover-blockchain-info-15-17-19-21-mnemonic-seed-8691cb59425)
- [bitcoin core - BTC wallet recovery: I have a 17 word backup, what do I do? - Bitcoin Stack Exchange](https://bitcoin.stackexchange.com/questions/105825/btc-wallet-recovery-i-have-a-17-word-backup-what-do-i-do)
- [17 Word Pass Phrase : r/Bitcoin](https://www.reddit.com/r/Bitcoin/comments/l65my4/17_word_pass_phrase/?rdt=42700)

## BIP39 is Not Enough to Recover Your Coins

Unfortunately, a wallet that supports BIP39 mnemonic phrases does not mean it can recover your coins. It is only one part of the requirement.

BIP39 is like the ability to "read" and understand the seed phrase. But, your wallet also needs to understand how to "find" your coins using that 12-24 word phrase and "know" the coin your trying to find.

You must know about a compatible wallet when importing an existing seed phrase:

- If it supports the structure in which the seed phrase was originally created (i.e. seed format, e.g. BIP39)
- The derivation paths it supports (i.e. the ability to find your coins)
- The coins it supports (e.g. bitcoin, ethereum, etc.)

To understand what we mean by this, let’s first dive into what a "wallet" actually is.

### Hierarchical Deterministic Wallets (HD Wallets)

Your wallet is essentially a whole bunch of numbers (that can "store" coins) linked together starting from a single random number.

That random number can be transformed (with math) into another number. That number can be transformed into multiple other numbers (and so on and so forth)

Eventually you get to a set of numbers at end of those transformations. These number can be associated with coins (by sending coins to these numbers). That's right, these numbers are your addresses.

You can think of a wallet as a tree (like an actual one in ground)

Your seed phrase is the secret recipe to create very specific seed for very specific tree.

BIP 39 is the "language" that recipe is in (so it can be read).

Coming from the seed, there's a trunk. From that trunk, there are branches. Each branch has a name (branch 1, branch 2, branch 3, etc).

Those branches also have branches (branch 1-1, branch 1-2, etc.) and those branch's branches also have branches (and so on).

And at the very end of all those branches, there are leaves. Your coins can be "stored" on those leaves (your addresses).

It can get pretty confusing right? Right.

### Derivation Paths

You need some sort of "map" on to traverse through the branches and find those leaves (and thus, your coins). This "map" is known as a **_derivation path_**.

_Derivation paths_ tell your wallet how to find your coins guiding it through the tree and are described in Bitcoin Improvement Proposals (BIP).

The most common _derivation paths_ are described in [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki "bip44"), [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki "bip49"), and [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki "bip84").

A _derivation path_ has a specific notation where each level is designated by a "/" beginning with **m**:

m / Purpose' / Coin Type' / Account' / Change / Address

Purpose, coin type, account, change, and address are represented by numbers and are explained [here](https://www.blockplate.com/blogs/blockplate/what-is-a-derivation-path "derivation path").

Your wallet must support the same derivation path that you've been using (i.e. "have the map") to store your coins.

Whether a wallet supports a certain derivation path should be well documented or referenced on their website.

If another wallet does not support a derivation path that your original wallet supported, that doesn't mean your coins are lost. It simply means you're unable to access them (because it doesn't know how to find them!).

[What is a Derivation Path](https://www.blockplate.com/blogs/blockplate/what-is-a-derivation-path "what is a derivation path")

### Coin Support

You might have noticed that not all wallets support all coins.

Your wallet must not only know how to find your coins but also support the coin you're trying to find.

Coin types are the cryptocurrencies (e.g. bitcoin, ethereum, etc.)

Coin support should be well documented or referenced on the wallet developer's website. Again, if a wallet does support a specific coin, it doesn't mean they are lost. You'll need to find another wallet that does in order to access them again.

### Additional Standards

There are other standards such as:

- Lighting Network Daemon (AEZeed): If you're using the Lightning Network Daemon wallet, it uses a different seed scheme known as [AEZeed](https://github.com/lightningnetwork/lnd/tree/master/aezeed "lightning network lnd aezeed").
- Electrum: If you're using the [Electrum Wallet](https://electrum.org/#home "electrum"), it also uses a [unique seed scheme](https://electrum.readthedocs.io/en/latest/seedphrase.html "electrum seed").
- Satoshi Labs Improvement Proposal (SLIP 39): If you're using [Trezor's](https://trezor.io/) parent company, [Satoshi Labs](https://satoshilabs.com/), unique seed standard of Shamir Secret Shares, [SLIP 39](https://github.com/satoshilabs/slips/blob/master/slip-0039 "SLIP 39").

For these unique standards, they can only be recovered on wallets that support that standard. If your wallet does not "understand" how your seed phrase created, it will not understand how to recover it either.

Using an extended public key, you can generate billions of fresh receiving addresses ( 4,294,967,296 to be exact). This maintains your privacy, security and sanity (as there's only ever going to be one private key that can access the funds connected to those addresses.)

## Extended Keys

Keys that can derive new keys

An extended key is a private key or public key that can be used derive new keys in an HD wallet.

Therefore, you can have a single extended private key, and use it as the source for all the child private keys and public keys in your wallet.

Furthermore, an extended private key can have a corresponding extended public key, which can be used generate the same child public keys only.

[Extended Keys | Keys that can Derive new Keys](https://learnmeabitcoin.com/technical/keys/hd-wallets/extended-keys/)

[HD Wallets and Derivation Paths: Explained | by MyEtherWallet | MEW Publications | Medium](https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2)

## Links

- [BIP39 Wallet List - Mnemonic Seed Phrase (Updated 2023)](https://www.blockplate.com/blogs/blockplate/list-of-bip39-wallets-mnemonic-seed)
- [How To Get Your Trust Wallet Private Key (And Export) - IsItCrypto](https://isitcrypto.com/get-trust-wallet-private-key/)
- [GitHub - iancoleman/bip39: A web tool for converting BIP39 mnemonic codes](https://github.com/iancoleman/bip39)
- [All bitcoin private keys](https://lbc.cryptoguru.org/dio/1)
- [User Guide: Secret Recovery Phrase, password, and private keys - MetaMask](https://support.metamask.io/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys)
