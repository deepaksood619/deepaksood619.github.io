# Ranking

## Strategies for assigning rankings

It is not always possible to assign rankings uniquely. For example, in a race or competition two (or more) entrants might tie for a place in the ranking. When computing an [ordinal measurement](https://en.wikipedia.org/wiki/Ordinal_measurement "Ordinal measurement"), two (or more) of the quantities being ranked might measure equal. In these cases, one of the strategies shown below for assigning the rankings may be adopted. A common shorthand way to distinguish these ranking strategies is by the ranking numbers that would be produced for four items, with the first item ranked ahead of the second and third (which compare equal) which are both ranked ahead of the fourth. These names are also shown below.

### Standard competition ranking ("1224" ranking)

In competition ranking, items that compare equal receive the same ranking number, and then a gap is left in the ranking numbers. The number of ranking numbers that are left out in this gap is one less than the number of items that compared equal. Equivalently, each item's ranking number is 1 plus the number of items ranked above it. This ranking strategy is frequently adopted for competitions, as it means that if two (or more) competitors tie for a position in the ranking, the position of all those ranked below them is unaffected (i.e., a competitor only comes second if exactly one person scores better than them, third if exactly two people score better than them, fourth if exactly three people score better than them, etc.).

Thus if A ranks ahead of B and C (which compare equal) which are both ranked ahead of D, then A gets ranking number 1 ("first"), B gets ranking number 2 ("joint second"), C also gets ranking number 2 ("joint second") and D gets ranking number 4 ("fourth").

### Modified competition ranking ("1334" ranking)

Sometimes, competition ranking is done by leaving the gaps in the ranking numbers _before_ the sets of equal-ranking items (rather than after them as in standard competition ranking). The number of ranking numbers that are left out in this gap remains one less than the number of items that compared equal. Equivalently, each item's ranking number is equal to the number of items ranked equal to it or above it. This ranking ensures that a competitor only comes second if they score higher than all but one of their opponents, third if they score higher than all but two of their opponents, etc.

Thus if A ranks ahead of B and C (which compare equal) which are both ranked ahead of D, then A gets ranking number 1 ("first"), B gets ranking number 3 ("joint third"), C also gets ranking number 3 ("joint third") and D gets ranking number 4 ("fourth"). In this case, nobody would get ranking number 2 ("second") and that would be left as a gap.

### Dense ranking ("1223" ranking)

In dense ranking, items that compare equally receive the same ranking number, and the next items receive the immediately following ranking number. Equivalently, each item's ranking number is 1 plus the number of items ranked above it that are distinct with respect to the ranking order.

Thus if A ranks ahead of B and C (which compare equal) which are both ranked ahead of D, then A gets ranking number 1 ("first"), B gets ranking number 2 ("joint second"), C also gets ranking number 2 ("joint second") and D gets ranking number 3 ("Third").

### Ordinal ranking ("1234" ranking)

In ordinal ranking, all items receive distinct ordinal numbers, including items that compare equal. The assignment of distinct ordinal numbers to items that compare equal can be done at random, or arbitrarily, but it is generally preferable to use a system that is arbitrary but consistent, as this gives stable results if the ranking is done multiple times. An example of an arbitrary but consistent system would be to incorporate other attributes into the ranking order (such as alphabetical ordering of the competitor's name) to ensure that no two items exactly match.

With this strategy, if A ranks ahead of B and C (which compare equal) which are both ranked ahead of D, then A gets ranking number 1 ("first") and D gets ranking number 4 ("fourth"), and **either** B gets ranking number 2 ("second") and C gets ranking number 3 ("third") **or** C gets ranking number 2 ("second") and B gets ranking number 3 ("third").

In computer data processing, ordinal ranking is also referred to as "row numbering".

### Fractional ranking ("1 2.5 2.5 4" ranking)

Items that compare equal receive the same ranking number, which is the [mean](https://en.wikipedia.org/wiki/Mean "Mean") of what they would have under ordinal rankings; equivalently, the ranking number of 1 plus the number of items ranked above it plus half the number of items equal to it. This strategy has the property that the sum of the ranking numbers is the same as under ordinal ranking. For this reason, it is used in computing [Borda counts](https://en.wikipedia.org/wiki/Borda_count "Borda count") and in statistical tests (see below).

Thus if A ranks ahead of B and C (which compare equal) which are both ranked ahead of D, then A gets ranking number 1 ("first"), B and C each get ranking number 2.5 (average of "joint second/third") and D gets ranking number 4 ("fourth").

Here is an example: Suppose you have the data set 1.0, 1.0, 2.0, 3.0, 3.0, 4.0, 5.0, 5.0, 5.0.

The ordinal ranks are 1, 2, 3, 4, 5, 6, 7, 8, 9.

For v = 1.0, the fractional rank is the average of the ordinal ranks: (1 + 2) / 2 = 1.5. In a similar manner, for v = 5.0, the fractional rank is (7 + 8 + 9) / 3 = 8.0.

Thus the fractional ranks are: 1.5, 1.5, 3.0, 4.5, 4.5, 6.0, 8.0, 8.0, 8.0

[Ranking - Wikipedia](https://en.wikipedia.org/wiki/Ranking)
