---
slug: /ai/move-37/open-ai-gym
title: Open AI Gym
description: Explore Open AI Gym's environments like FronzenLake-v0 and BipedalWalker-v2, where agents navigate challenges for rewards and optimal performance.
created: 2023-03-05
last_update: 2023-12-05
---
## FronzenLake-v0

The agent controls the movement of a character in a grid world. Some tiles of the grid are walkable, and others lead to the agent falling into the water. Additionally, the movement direction of the agent is uncertain and only partially depends on the chosen direction. The agent is rewarded for finding a walkable path to a goal tile.

## BipedalWalker-v2

Reward is given for moving forward, total 300+ points up to the far end. If the robot falls, it gets -100. Applying motor torque costs a small amount of points, more optimal agent will get better score. State consists of hull angle speed, angular velocity, horizontal speed, vertical speed, position of joints and joints angular speed, legs contact with ground, and 10 lidar rangefinder measurements. There's no coordinates in the state vector.

## References

http://kvfrans.com/simple-algoritms-for-solving-cartpole

https://github.com/kvfrans/openai-cartpole

https://gym.openai.com/envs/FrozenLake-v0

https://gym.openai.com/envs/BipedalWalker-v2
