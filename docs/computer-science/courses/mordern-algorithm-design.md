# Mordern Algorithm Design

1. Randomization

2. Amortized Analysis

3. Disjoint Set

4. Suffix Tree and Suffix Array

5. Linear Programming

6. Maximum Flow Algorithms

7. Bipartite Matching and Stable Matching

8. Approximation Algorithms

9. Streaming Algorithms

   - sliding window sampling algorithms

10. External Memory Algorithm

11. Online Algorithms

12. Web Search Algorithms

13. Data Compression Algorithms

## Optimal Stopping Problem

In [mathematics](https://en.wikipedia.org/wiki/Mathematics), the theory ofoptimal stoppingorearly stoppingis concerned with the problem of choosing a time to take a particular action, in order to [maximise](https://en.wikipedia.org/wiki/Optimization_(mathematics)) an expected reward or minimise an expected cost. Optimal stopping problems can be found in areas of [statistics](https://en.wikipedia.org/wiki/Statistics), [economics](https://en.wikipedia.org/wiki/Economics), and [mathematical finance](https://en.wikipedia.org/wiki/Mathematical_finance)(related to the pricing of [American options](https://en.wikipedia.org/wiki/American_options)). A key example of an optimal stopping problem is the [secretary problem](https://en.wikipedia.org/wiki/Secretary_problem). Optimal stopping problems can often be written in the form of a [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation), and are therefore often solved using [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming).

## Apartment hunting - 37%

<https://en.wikipedia.org/wiki/Optimal_stopping>

## Secretary Problem

Thesecretary problemis a problem that demonstrates a scenario involving [optimal stopping](https://en.wikipedia.org/wiki/Optimal_stopping) theory.The problem has been studied extensively in the fields of [applied probability](https://en.wikipedia.org/wiki/Applied_probability), [statistics](https://en.wikipedia.org/wiki/Statistics), and [decision theory](https://en.wikipedia.org/wiki/Decision_theory). It is also known as themarriage problem, thesultan's dowry problem, thefussy suitor problem, the googol game, and thebest choice problem.
The basic form of the problem is the following: imagine an administrator who wants to hire the best secretary out ofnrankable applicants for a position. The applicants are interviewed one by one in random order. A decision about each particular applicant is to be made immediately after the interview. Once rejected, an applicant cannot be recalled. During the interview, the administrator can rank the applicant among all applicants interviewed so far, but is unaware of the quality of yet unseen applicants. The question is about the optimal strategy ([stopping rule](https://en.wikipedia.org/wiki/Stopping_rule)) to maximize the probability of selecting the best applicant. If the decision can be deferred to the end, this can be solved by the simple maximum [selection algorithm](https://en.wikipedia.org/wiki/Selection_algorithm) of tracking the running maximum (and who achieved it), and selecting the overall maximum at the end. The difficulty is that the decision must be made immediately.
The problem has an elegant solution, and the shortest rigorous proof known so far is provided by the [odds algorithm](https://en.wikipedia.org/wiki/Odds_algorithm)(Bruss 2000). An easy analysis implies that the optimal win probability is always at least1/e, and that the latter holds even in a much greater generality (2003). The optimal stopping rule prescribes always rejecting the first ~n/e applicants that are interviewed (where [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) is the base of the [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm)) and then stopping at the first applicant who is better than every applicant interviewed so far (or continuing to the last applicant if this never occurs). Sometimes this strategy is called the 1/estopping rule, because the probability of stopping at the best applicant with this strategy is about1/ealready for moderate values ofn. One reason why the secretary problem has received so much attention is that the optimal policy for the problem (the stopping rule) is simple and selects the single best candidate about 37% of the time, irrespective of whether there are 100 or 100 million applicants.
<https://en.wikipedia.org/wiki/Secretary_problem>
