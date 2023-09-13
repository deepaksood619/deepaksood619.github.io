# Turing vs Non Turing Machine

## History

Ethereum is Turing Complete and Bitcoin is Turing incomplete. Now before we think it as weakness of Bitcoin we have know that Bitcoin is turing incomplete because of choice and not because of anyone’s inability.

Before we understand what does Turing Complete Blockchain and Turing Incomplete Blockchain mean, We have to go to a time where most of the machines were turing incomplete. Most of Machine were built to solve a single problem/calculation. If new type of problem had to be solved, the machine had to be rewired to solve that problem. For example, Enigma Machines could only be used for encryption and pretty much nothing else.

In 1936, Turing proposed (in collaboration with his doctoral supervisor Alonzo Church) a hypothetical machine that could be used to simulate any algorithmic computation. This was groundbreaking in the sense that it was the first proposal for a machine with multiple functions determined by a program held within a memory store, rather than by physically altering the machine's wiring or structure. The Z3 (computer) from Konrad Zuse in year 1941 was the first working Turing-complete machine.

Most of the modern computer programming language are Turing Complete [ignoring the limitation on Memory], it does not now look difficult to achieve turing completeness . We have got so much used to the concept of turing complete machine and programming language that it has become difficult to imagine turing incomplete programming language.

For a language to be turing complete it has to only fulfill the below requirement.

[Colin Barrett's answer to What does it mean to say that a programming language is Turing Complete?](https://www.quora.com/What-does-it-mean-to-say-that-a-programming-language-is-Turing-Complete/answer/Colin-Barrett "www.quora.com")

What this means, practically, is that the language must support:

- Some form of reading and writing memory (reading to/writing from the tape)
- Some form of branching (moving the machine to the forward along the tape, skipping over unwanted symbols)
- Some form of infinite looping capability, either through recursion or explicit loops (moving the machine back along the tape and restarting execution there)

Now coming back to blockchain technologies ….

Bitcoin developers decided to remove the feature of looping in bitcoin script to avoid any spam or network overload, hence making it turing incomplete. The answer to the question is as simple as that. Ethereum try to overcome the problem of infinite looping using a concept called "Gas".

The reason gas is important is that it helps to ensure an appropriate fee is being paid by transactions submitted to the network. By requiring that a transaction pay for each operation it performs (or causes a contract to perform), we ensure that network doesn't become bogged down with performing a lot of intensive work that isn't valuable to anyone.

As stated by [Vladislav Zorov's answer to To better understand "Turing-complete blockchains", what is an example and a non-example of Turing-complete Blockchains? If a non-example does not exist, why mention it at all?](https://www.quora.com/To-better-understand-Turing-complete-blockchains-what-is-an-example-and-a-non-example-of-Turing-complete-Blockchains-If-a-non-example-does-not-exist-why-mention-it-at-all/answer/Vladislav-Zorov "www.quora.com")

**All Ethereum testnets so far have been DoS’ed**

We could also ask why Bitcoin developers did not take ethereum approach, but we have to understand, bitcoin was intended for few purposes whereas ethereum tries to do much more.

Below is a standard Pay-To-Public-Key-Hash (P2PKH) transaction in Bitcoin. This is the example transaction where Alice makes a bitcoin payment to Bob’s bitcoin address, that is broadcasted on the network for individual and mining node to verify the transaction.

![image](https://qph.cf2.quoracdn.net/main-qimg-5caf2183b70edf8a5a9dd0d333cd7557-pjlq)

The script to verify the transaction and other things is embedded in the message itself. See the locking script and unlocking script part of the message.

**Bitcoin uses a simple, "stack-based", programming language called Script to implement the locking and unlocking scripts. Using a programming language, even a limited one, to code the locking script, means that it is possible to impose an infinite variety of conditions (or encumbrance) on the UTXO.**

We also need to understand that bitcoin clients only execute what is ordered in the script part of a transaction and not more. If some non-standard bitcoin client decides to execute something that is not part of the script, it does so on its own peril.

Now imagine if I could send a message containing Infinite loop as a part of script for execution on individual nodes and mining node. The nodes will be stuck in the infinite loop forever and reject any other transaction. Now it’s totally possible to send opcodes that are not part of bitcoin script, but this will be rejected by the standard bitcoin client.

[To better understand 'Turing-complete blockchains', what is an example and a non-example of Turing-complete Blockchains? If a non-example does not exist, why mention it at all? - Quora](https://www.quora.com/To-better-understand-Turing-complete-blockchains-what-is-an-example-and-a-non-example-of-Turing-complete-Blockchains-If-a-non-example-does-not-exist-why-mention-it-at-all)

## Turning vs Non-Turing complete Chains

The Bitcoin blockchain is (purposefully) non-Turing-complete - the scripting language inside transactions is powerful enough to express some smart contracts, like multi-signature wallets or even add-ons like Lightning Network, but it cannot express any program whatsoever (like a Turing-complete language could). For example you can’t loop and read/write to arbitrary memory locations - you’re limited to a simple stack machine.

The advantage of the above are termination guarantees - programs (transactions) always end, and their runtime will be roughly proportional to their length. While in Ethereum (a Turing-complete blockchain) there can be transactions that fail to terminate, and also it’s not possible to determine in advance whether a certain transaction will terminate (a result known as the "Halting Problem" in computer science).

So in Ethereum you pay per computational step, while in Bitcoin you pay per byte. If a transaction goes in an endless loop on Ethereum, it will eventually drain all the gas attached to it and be force-terminated. Of course, this won’t stop people that want to mess with miners if gas is free - all Ethereum testnets so far have been DoS’ed (just spam the network with endlessly-looping transactions; you don’t need much resource to send those, but it takes lots of resource to process them), except one where you had to join a channel to beg for test Ether and they’d only give you an amount proportional to your Ethereum-related GitHub contributions. If you ran out, you’d have to go back to the channel and explain why you ran out.

[What is Meant By Turing-Complete in Ethereum? - GeeksforGeeks](https://www.geeksforgeeks.org/what-is-meant-by-turing-complete-in-ethereum/)

[The Boundary of Computation - YouTube](https://www.youtube.com/watch?v=kmAc1nDizu0)

[Turing Machine Alternative (Counter Machines) - Computerphile - YouTube](https://www.youtube.com/watch?v=PXN7jTNGQIw)
