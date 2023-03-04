# 12. Dependency Injection

*Dependency injection* is a way to supply a new instance of a class with the fully-formed dependencies it requires. Most dependencies are services. Angular uses dependency injection to provide new components with the services they need.

Angular can tell which services a component needs by looking at the types of its constructor parameters.

When Angular creates a component, it first asks aninjectorfor the services that the component requires.

An injector maintains a container of service instances that it has previously created. If a requested service instance is not in the container, the injector makes one and adds it to the container before returning the service to Angular. When all requested services have been resolved and returned, Angular can call the component's constructor with those services as arguments. This is *dependency injection*.

Registering at a component level means you get a new instance of the service with each new instance of that component.

Points to remember about dependency injection:

- Dependency injection is wired into the Angular framework and used everywhere.
- The *injector* is the main mechanism.
  - An injector maintains a *container* of service instances that it created.
  - An injector can create a new service instance from a *provider*.
- A *provider* is a recipe for creating a service.
- Register *providers* with injectors.
