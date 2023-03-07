# Others

## Streaming and Sketching Algorithms

## Sketching (Compressed data structures)

Given data and a function f, compress the data into a sketch to allow computation, just given the sketch

## Streaming

Maintain sketch on the fly, as the data is updated

<https://www.sketchingbigdata.org>

<https://www.youtube.com/watch?v=xbTM3t26xLk>

## Streaming Algorithms

### Reservoir Algorithm

Reservoir sampling is a family of [randomized algorithms](https://en.wikipedia.org/wiki/Randomized_algorithm) for choosing a [simple random sample](https://en.wikipedia.org/wiki/Simple_random_sample) without replacement of *k* items from a population of unknown size *n* in a single pass over the items. The size of the population *n* is not known to the algorithm and is typically too large to fit all *n* items into [main memory](https://en.wikipedia.org/wiki/Main_memory). The population is revealed to the algorithm over time, and the algorithm cannot look back at previous items. At any point, the current state of the algorithm must permit extraction of a simple random sample without replacement of size *k* over the part of the population seen so far

On the ith iteration of our loop to pick a random element, let's assume we already picked an element uniformly from [0, i - 1]. In order to maintain the loop invariant, we would need to pick the ith element as the new random element at1 / (i + 1)chance. For the base case wherei = 0, let's say the random element is the first one. Then we know it works because

- Fori = 0, we would've picked uniformly from [0, 0].
- Fori > 0, before the loop began, any elementKin [0, i - 1]had1 / ichance of being chosen as the random element. We wantKto have1 / (i + 1)chance of being chosen after the iteration. This is the case since the chance of having being chosen already but not getting swapped with theithelement is1 / i *(1 - (1 / (i + 1)))which is1 / i* i / (i + 1)or1 / (i + 1)

```python
import random

def pick(big_stream):
random_element = None

for i, e in enumerate(big_stream):
if i == 0:
random_element = e
if random.randint(1, i + 1) == 1:
random_element = e
return random_element
```

<https://en.wikipedia.org/wiki/Reservoir_sampling>

## Evolutionary Algorithm

<https://en.wikipedia.org/wiki/Evolutionary_algorithm>

- [Artificial development](https://en.wikipedia.org/wiki/Artificial_development)
- [Cellular evolutionary algorithm](https://en.wikipedia.org/wiki/Cellular_evolutionary_algorithm)
- [Cultural algorithm](https://en.wikipedia.org/wiki/Cultural_algorithm)
- [Differential evolution](https://en.wikipedia.org/wiki/Differential_evolution)
- [Effective fitness](https://en.wikipedia.org/wiki/Effective_fitness)
- [Evolution strategy](https://en.wikipedia.org/wiki/Evolution_strategy)
- [Gaussian adaptation](https://en.wikipedia.org/wiki/Gaussian_adaptation)
- [Evolutionary multimodal optimization](https://en.wikipedia.org/wiki/Evolutionary_multimodal_optimization)
- [Grammatical evolution](https://en.wikipedia.org/wiki/Grammatical_evolution)
- Particle swarm optimization

In [computational science](https://en.wikipedia.org/wiki/Computational_science), **particle swarm optimization (PSO**) is a computational method that [optimizes](https://en.wikipedia.org/wiki/Mathematical_optimization) a problem by [iteratively](https://en.wikipedia.org/wiki/Iterative_method) trying to improve a[candidate solution](https://en.wikipedia.org/wiki/Candidate_solution) with regard to a given measure of quality. It solves a problem by having a population of candidate solutions, here dubbed [particles](https://en.wikipedia.org/wiki/Point_particle), and moving these particles around in the [search-space](https://en.wikipedia.org/wiki/Optimization_(mathematics)#Concepts_and_notation) according to simple [mathematical formulae](https://en.wikipedia.org/wiki/Formula) over the particle's[position](https://en.wikipedia.org/wiki/Position_(vector)) and [velocity](https://en.wikipedia.org/wiki/Velocity). Each particle's movement is influenced by its local best known position, but is also guided toward the best known positions in the search-space, which are updated as better positions are found by other particles. This is expected to move the swarm toward the best solutions.

<https://en.wikipedia.org/wiki/Particle_swarm_optimization>

- [Memetic algorithm](https://en.wikipedia.org/wiki/Memetic_algorithm)
- [Natural evolution strategy](https://en.wikipedia.org/wiki/Natural_evolution_strategy)
- [Promoter based genetic algorithm](https://en.wikipedia.org/wiki/Promoter_based_genetic_algorithm)
- [Spiral optimization algorithm](https://en.wikipedia.org/wiki/Spiral_optimization_algorithm)

## Genetic Algorithm

- [Chromosome](https://en.wikipedia.org/wiki/Chromosome_(genetic_algorithm))
- [Clonal selection algorithm](https://en.wikipedia.org/wiki/Clonal_selection_algorithm)
- [Crossover](https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm))
- [Mutation](https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm))
- [Genetic memory](https://en.wikipedia.org/wiki/Genetic_memory_(computer_science))
- [Genetic fuzzy systems](https://en.wikipedia.org/wiki/Genetic_fuzzy_systems)
- [Selection](https://en.wikipedia.org/wiki/Selection_(genetic_algorithm))
- [Fly algorithm](https://en.wikipedia.org/wiki/Fly_algorithm)

## Genetic Programming

- [Cartesian genetic programming](https://en.wikipedia.org/wiki/Cartesian_genetic_programming)
- [Linear genetic programming](https://en.wikipedia.org/wiki/Linear_genetic_programming)
- [Multi expression programming](https://en.wikipedia.org/wiki/Multi_expression_programming)
- [Schema](https://en.wikipedia.org/wiki/Schema_(genetic_algorithms))
- [Eurisko](https://en.wikipedia.org/wiki/Eurisko)
- [Parity benchmark](https://en.wikipedia.org/wiki/Parity_benchmark)

## Thompson's construction

It is an algorithm for transforming a regular expression into an equivalent non-deterministic finite automata (NFA). This NFA can be used to match strings against the regular expression.

## Approximate counting algorithm

Theapproximate counting algorithmallows the counting of a large number of events using a small amount of memory. Invented in 1977 by [Robert Morris (cryptographer)](https://en.wikipedia.org/wiki/Robert_Morris_(cryptographer)) of [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs), it uses [probabilistic techniques](https://en.wikipedia.org/wiki/Randomized_algorithm) to increment the [counter](https://en.wikipedia.org/wiki/Counter_(digital)). It was fully analyzed in the early 1980s by [Philippe Flajolet](https://en.wikipedia.org/wiki/Philippe_Flajolet) of [INRIA](https://en.wikipedia.org/wiki/INRIA) Rocquencourt, who coined the nameapproximate counting, and strongly contributed to its recognition among the research community. The algorithm is considered one of the precursors of streaming algorithms, and the more general problem of determining the frequency moments of a data stream has been central to the field.

<https://en.wikipedia.org/wiki/Approximate_counting_algorithm>

## Joining point cloud scans (ICP - Iterative Closest Point)

[Joining Point Cloud Scans (ICP) - Computerphile](https://youtu.be/4uWSo8v3iQA)

<https://en.wikipedia.org/wiki/Iterative_closest_point>
