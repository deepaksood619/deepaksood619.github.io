# Reinforcement Learning

## Reinforcement learning

RL is an area of [machine learning](https://en.wikipedia.org/wiki/Machine_learning) concerned with how [software agents](https://en.wikipedia.org/wiki/Software_agent) ought to take [*actions*](https://en.wikipedia.org/wiki/Action_selection) in an *environment*so as to maximize some notion of cumulative *reward*

In machine learning, the environment is typically formulated as a [Markov Decision Process](https://en.wikipedia.org/wiki/Markov_Decision_Process)(MDP), as many reinforcement learning algorithms for this context utilize [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) techniques. The main difference between the classical dynamic programming methods and reinforcement learning algorithms is that the latter do not assume knowledge of an exact mathematical model of the MDP and they target large MDPs where exact methods become infeasible.

When the environment is fully observed, we call the reinforcement learning problem a**Markov decision process**. When the state does not depend on the previous actions, we call the problem a**contextual bandit problem**. When there is no state, just a set of available actions with initially unknown rewards, this problem is the classic**multi-armed bandit problem.**

## Categorizing Reinforcement Learning Agents

- **Value Based Agent,** the agent will evaluate all the states in the state space, and the policy will be kind of implicit, i.e. the value function tells the agent how good is each action in a particular state and the agent will choose the best one.
- **Policy Based Agent,** instead of representing the value function inside the agent, we explicitly represent the policy. The agent searches for the optimal action-value function which in turn will enable it to act optimally.
- **Actor-Critic Agent,** this agent is a value-based and policy-based agent. It's an agent that stores both of the policy, and how much reward it is getting from each state.
- **Model-Based Agent,** the agent tries to build a model of how the environment works, and then plan to get the best possible behavior.
- **Model-Free Agent,** here the agent doesn't try to understand the environment, i.e. it doesn't try to build the dynamics. Instead we go directly to the policy and/or value function. We just see experience and try to figure out a policy of how to behave optimally to get the most possible rewards.

## Two Types of Environments

## Deterministic environment: deterministic environment means that both state transition model and reward model are deterministic functions. If the agent while in a given state repeats a given action, it will always go the same next state and receive the same reward value

## Stochastic environment: In a stochastic environment there is uncertainity about the actions effect. When the agent repeats doing the same action in a given state, the new state and received reward may not be the same each time. For example, a robot which tries to move forward but because of the imperfection in the robot operation or other factors in the environment (e.g. slippery floor), sometimes the actionforwardwill make it move forward but in sometimes, it will move toleftorright

## References

<https://en.wikipedia.org/wiki/Reinforcement_learning>

<https://towardsdatascience.com/reinforcement-learning-demystified-36c39c11ec14>

<https://towardsdatascience.com/reinforcement-learning-demystified-markov-decision-processes-part-1-bf00dda41690>

<https://lilianweng.github.io/lil-log/2020/01/29/curriculum-for-reinforcement-learning.html>

<https://www.toptal.com/deep-learning/pytorch-reinforcement-learning-tutorial>

<https://www.freecodecamp.org/news/train-an-ai-to-play-a-snake-game-using-python>
