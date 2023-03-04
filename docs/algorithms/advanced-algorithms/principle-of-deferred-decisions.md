# Principle of Deferred Decisions

The principle of deferred decisions is the concept that we have two ways to make a random choice both of which are equivalent.

One way is that you can toss a coin yourself at the exact step when you need a random input in some algorithm. In the other way you can imagine that there is an oracle who has already tossed a coin infinitely many times and has some sequence of the formHTHTHH...HTHTHH..., and we query this oracle to tell us the next randomized outcome.

Basically we can defer the act of actually using a randomized input for as long as we have to and this won't affect the *randomness*of this input.
