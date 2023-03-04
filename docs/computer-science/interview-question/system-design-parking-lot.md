# System Design - Parking Lot

[System Design Interview Question: DESIGN A PARKING LOT - asked at Google, Facebook](https://www.youtube.com/watch?v=DSGsa0pu8-k)

1. System Design

2. Algorithmic Problem Solution

3. Object Oriented Design Question
Problem Statement - Design a parking lot, Wants a system to manage thousands of cars.
1. Handling Ambiguity - recognize the breadth of the question

2. Clarify question like

   - do you want a system design

   - do you want class hierarchy

3. Systematic Approach (take a step back and don't rush)

   - How is the parking lot designed?

       - Building

       - Open space

       - Assessibility

   - How many spots

       - 10 spots

       - 1000 spots multiple buildings

   - Multiple levels?

       - depedencies

       - optimize to fill up certain areas first
   - **Multiple entrances**

       - **Concurrency issue**

       - **race condition** (When system tries to access same spot at same time)
   - Pricing strategy

       - Premium

       - Fair pricing strategy if the required size parking spot not available

       - Parking spot for disability (near to entrance)

       - Economical parking spot

       - Dynamic pricing (Higher pricing at high rush hour)

Design a system for 4 sizes -

1. Small (motorcycle)

2. Medium (car)

3. Large (Bus)

4. Extra Large (Truck)
Assumption

1. Can put small car to bigger spot
Class Hierarchy -

## Abstract Vehicle

- String licensePlate
- enum color
Implementation of vehicle (Create 4 classes that inherit from the vehicle)

- MotorCycle (S)

- Car (M)

- Bus (L)

- Truck (XL)
class ParkingLot ( zipCode:int )

placeVehicle ( vehicle:Vehicle )

return Spot
class Spot ( id:Long, size:enum )
Database for storing spots, vehicles etc.
Find free spot (can have an array of spot, but it will be a linear operation to find a free spot)

We can create a stack which have free spots.
4 stacks, each for storing free spots of each size.
placeVehicle - O(1), constant time operation + put in HashMap (Fast Lookup)
Spot : removeVehicle ( vehicle : Vehicle )

Look up Hashmap
