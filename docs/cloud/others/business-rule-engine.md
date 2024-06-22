# Business Rules Engine (BRE) / Decision Rule Engine

https://martinfowler.com/bliki/RulesEngine.html - Avoid building rule engine

https://martinfowler.com/dslCatalog/productionRule.html

A business rules engine is a [software system](https://en.wikipedia.org/wiki/Software_system) that executes one or more [business rules](https://en.wikipedia.org/wiki/Business_rules) in a runtime production environment. The rules might come from legal [regulation](https://en.wikipedia.org/wiki/Regulation)("An employee can be fired for any reason or no reason but not for an illegal reason"), company policy ("All customers that spend more than $100 at one time will receive a 10% discount"), or other sources. A business rule system enables these company policies and other operational decisions to be defined, tested, executed and maintained separately from [application code](https://en.wikipedia.org/wiki/Application_code).

Rule engines typically support rules, facts, priority (score), mutual exclusion, preconditions, and other functions.

Rule engine software is commonly provided as a component of a [business rule management system](https://en.wikipedia.org/wiki/Business_rule_management_system) which, among other functions, provides the ability to: register, define, classify, and manage all the rules, verify consistency of rules definitions ("Gold-level customers are eligible for free shipping when order quantity > 10" and "maximum order quantity for Silver-level customers = 15" ), define the relationships between different rules, and relate some of these rules to [IT](https://en.wikipedia.org/wiki/Information_Technology) applications that are affected or need to enforce one or more of the rules.

## Design Strategies

Many organizations' rules efforts combine aspects of what is generally considered [workflow](https://en.wikipedia.org/wiki/Workflow) design with traditional rule design. This failure to separate the two approaches can lead to problems with the ability to re-use and control both business rules and workflows. Design approaches that avoid this quandary separate the role of business rules and workflows as follows:

- **Business rules produce knowledge;**
- **Workflows perform business work.**

Concretely, that means that a business rule may do things like detect that a business situation has occurred and raise a business event (typically carried via a messaging infrastructure) or create higher level business knowledge (e.g., evaluating the series of organizational, product, and regulatory-based rules concerning whether or not a loan meets underwriting criteria). On the other hand, a workflow would respond to an event that indicated something such as the overloading of a routing point by initiating a series of activities.

## Types of Rule Engines

1. Most rules engines used by businesses are [forward chaining](https://en.wikipedia.org/wiki/Forward_chaining), which can be further divided into two classes:
    - The first class processes so-called **production/[inference](https://en.wikipedia.org/wiki/Inference) rules**. These types of rules are used to represent behaviors of the type IF condition THEN action. For example, such a rule could answer the question: "Should this customer be allowed a mortgage?" by executing rules of the form "IF some-condition THEN allow-customer-a-mortgage".
    - The other type of rule engine processes so-called **reaction/[Event condition action](https://en.wikipedia.org/wiki/Event_condition_action) rules**. The reactive rule engines detect and react to incoming events and process event patterns. For example, a reactive rule engine could be used to alert a manager when certain items are out of stock.

The biggest difference between these types is that production rule engines execute when a user or application invokes them, usually in a stateless manner. A reactive rule engine reacts automatically when events occur, usually in a stateful manner. Many (and indeed most) popular commercial rule engines have both production and reaction rule capabilities, although they might emphasize one class over another. For example, most business rules engines are primarily production rules engines, whereas [complex event processing](https://en.wikipedia.org/wiki/Complex_event_processing) rules engines emphasize reaction rules.

2. In addition, some rules engines support [backward chaining](https://en.wikipedia.org/wiki/Backward_chaining). In this case a rules engine seeks to resolve the facts to fit a particular goal. It is often referred to as beinggoal drivenbecause it tries to determine if something exists based on existing information.

3. Another kind of rule engine automatically switches between back- and forward-chaining several times during a reasoning run, e.g. the Internet Business Logic system, which can be found by searching the web.

4. A fourth class of rules engine might be called a deterministic engine. These rules engines may forgo both forward chaining and backward chaining, and instead utilize [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language) approaches to better describe policy. This approach is often easier to implement and maintain, and provides performance advantages over forward or backward chaining systems.

There are some circumstance where [Fuzzy Logic](https://en.wikipedia.org/wiki/Fuzzy_Logic) based inference may be more appropriate, where heuristics are used in rule processing, rather than Boolean rules. Examples might include customer classification, missing data inference, customer value calculations, etc. The DARL languageand the associated inference engine and editors is an example of this approach.

https://en.wikipedia.org/wiki/Business_rules_engine

https://www.youtube.com/watch?v=V4nl_v85sNA

## Tools

- Blaze
- Pega
- Kissflow

https://exceptionnotfound.net/designing-a-workflow-engine-database-part-1-introduction-and-purpose

- BRM - Business Rules Management
- BRF - Business Rules Framework
- BPM - Business Process Management

## Drools

Droolsis a**[business rule management system](https://en.wikipedia.org/wiki/Business_rule_management_system)(BRMS)** with a [forward](https://en.wikipedia.org/wiki/Forward_chaining) and [backward chaining](https://en.wikipedia.org/wiki/Backward_chaining) inference based [rules engine](https://en.wikipedia.org/wiki/Rules_engine), more correctly known as a [production rule system](https://en.wikipedia.org/wiki/Production_system_(computer_science)), using an enhanced implementation of the [Rete algorithm](https://en.wikipedia.org/wiki/Rete_algorithm).

KIE (Knowledge Is Everything) is the new umbrella name to drools, [optaPlanner](https://en.wikipedia.org/wiki/OptaPlanner), [jBPM](https://en.wikipedia.org/wiki/JBPM), Guvnor, uberFire and related technologies.

Drools supports the Java Rules Engine API (Java Specification Request 94) standard for its [business rule](https://en.wikipedia.org/wiki/Business_rule) engine and enterprise framework for the construction, maintenance, and enforcement of business policies in an organization, application, or service.

Drools is a**Business Logic integration Platform (BLiP)**. It is written in Java. It is an open source project that is backed by JBoss and Red Hat, Inc. It extends and implements the Rete Pattern matching algorithm.

In layman's terms, Drools is a collection of tools that allow us to separate and reason over logic and data found within business processes. The two important keywords we need to notice areLogicandData.

Drools is split into two main parts:AuthoringandRuntime.

- Authoring− Authoring process involves the creation of Rules files (.DRL files).
- Runtime− It involves the creation of working memory and handling the activation.

DMN - Decision Model and Notation

The Decision Model and Notation (DMN™) is a Standard by OMG providing a common and visual notation readily understandable by all users and personas. With DMN, business analysts can define the initial decision requirements and then formalize more detailed decision models; technical developers can automate the decisions in any process with a portable execution semantic, while business stakeholders can manage and monitor those decisions.

https://www.drools.org/learn/dmn.html

https://learn-dmn-in-15-minutes.com

https://www.drools.org

https://en.wikipedia.org/wiki/Drools

https://www.tutorialspoint.com/drools/drools_introduction.htm

[**https://www.toptal.com/java/rules-engines-power-to-the-smeople**](https://www.toptal.com/java/rules-engines-power-to-the-smeople)

## Workflow

Aworkflowconsists of an orchestrated and repeatable [pattern](https://en.wikipedia.org/wiki/Pattern) of activity, enabled by the [systematic](https://en.wikipedia.org/wiki/System) organization of [resources](https://en.wikipedia.org/wiki/Resource) into [processes](https://en.wikipedia.org/wiki/Process) that transform materials, provide services, or process information.It can be depicted as a sequence of operations, the work of a person or group, the work of an organization of staff, or one or more simple or complex mechanisms.

From a more abstract or higher-level perspective, workflow may be considered a view or representation of real work.The flow being described may refer to a [document](https://en.wikipedia.org/wiki/Document), service, or [product](https://en.wikipedia.org/wiki/Product_(business)) that is being transferred from one step to another.

Workflows may be viewed as one fundamental building block to be combined with other parts of an organization's structure such as information technology, [teams](https://en.wikipedia.org/wiki/Team), [projects](https://en.wikipedia.org/wiki/Project) and [hierarchies](https://en.wikipedia.org/wiki/Hierarchical_organization).

https://en.wikipedia.org/wiki/Workflow

## Forward Chaining

Forward chaining(orforward reasoning) is one of the two main methods of [reasoning](https://en.wikipedia.org/wiki/Automated_reasoning) when using an [inference engine](https://en.wikipedia.org/wiki/Inference_engine) and can be described [logically](https://en.wikipedia.org/wiki/Logically) as repeated application of [modus ponens](https://en.wikipedia.org/wiki/Modus_ponens). Forward chaining is a popular implementation strategy for [expert systems](https://en.wikipedia.org/wiki/Expert_system), [business](https://en.wikipedia.org/wiki/Business_rules_engine) and [production rule systems](https://en.wikipedia.org/wiki/Production_system_(computer_science)). The opposite of forward chaining is [backward chaining](https://en.wikipedia.org/wiki/Backward_chaining).

Forward chaining starts with the available [data](https://en.wikipedia.org/wiki/Data) and uses [inference rules](https://en.wikipedia.org/wiki/Inference_rule) to extract more data (from an end user, for example) until a [goal](https://en.wikipedia.org/wiki/Goal) is reached. An [inference engine](https://en.wikipedia.org/wiki/Inference_engine) using forward chaining searches the inference rules until it finds one where the [antecedent](https://en.wikipedia.org/wiki/Antecedent_(logic))(**Ifclause**) is known to be true. When such a rule is found, the engine can conclude, or infer, the [consequent](https://en.wikipedia.org/wiki/Consequent)(**Thenclause**), resulting in the addition of new [information](https://en.wikipedia.org/wiki/Information) to its data.

Inference engines will [iterate](https://en.wikipedia.org/wiki/Iteration#Computing) through this process until a goal is reached.

https://en.wikipedia.org/wiki/Forward_chaining

## Backward Chaining

Backward chaining(orbackward reasoning) is an [inference](https://en.wikipedia.org/wiki/Inference) method described colloquially as working backward from the goal. It is used in [automated theorem provers](https://en.wikipedia.org/wiki/Automated_theorem_prover), [inference engines](https://en.wikipedia.org/wiki/Inference_engine), [proof assistants](https://en.wikipedia.org/wiki/Proof_assistant), and other [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) applications.

In [game theory](https://en.wikipedia.org/wiki/Game_theory), researchers apply it to (simpler)[subgames](https://en.wikipedia.org/wiki/Subgame) to find a solution to the game, in a process called [backward induction](https://en.wikipedia.org/wiki/Backward_induction). In chess, it is called [retrograde analysis](https://en.wikipedia.org/wiki/Retrograde_analysis), and it is used to generate table bases for [chess endgames](https://en.wikipedia.org/wiki/Chess_endgame) for [computer chess](https://en.wikipedia.org/wiki/Computer_chess).

Backward chaining is implemented in [logic programming](https://en.wikipedia.org/wiki/Logic_programming) by [SLD resolution](https://en.wikipedia.org/wiki/SLD_resolution). Both rules are based on the [modus ponens](https://en.wikipedia.org/wiki/Modus_ponens) inference rule. It is one of the two most commonly used methods of [reasoning](https://en.wikipedia.org/wiki/Reasoning) with [inference rules](https://en.wikipedia.org/wiki/Inference_rule) and [logical implications](https://en.wikipedia.org/wiki/Logical_consequence)-- the other is [forward chaining](https://en.wikipedia.org/wiki/Forward_chaining). Backward chaining systems usually employ a [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) strategy, e.g.[Prolog](https://en.wikipedia.org/wiki/Prolog).

https://en.wikipedia.org/wiki/Backward_chaining

## Rules Engine

### Rule

A rule is a business policy. Within the technical domain of the rules engine, it is a collection of a set of triggers, conditions, and effects that are applied by the rules engine.

### Trigger

The trigger is the thing that determines whether the engine should attempt to run through a rule or not. In most cases, it is contextual.

In simple systems, it could be a simple string check or even hard-coded, such as a string on a Rule with the valueon_createandPaymentAccountto indicate that the rule should only be executed when a record of typePaymentAccountis created.

In more complex systems, it could be a full context check that looks at things like whether the user is logged in or the kind of record being worked on.

### Condition

The Condition determines if the Rule should be applied in that particular circumstance and on that particular record.

It has some minor overlap conceptually with a trigger, but also enough differences to warrant a separate discussion.

A trigger is more of a generalized determination of whether a rule's conditions should even be checked, whereas condition is more of an instance-specific check. Smaller systems can potentially fold the trigger in to a a condition, but more complex systems will likely benefit from separating the two.

The Condition itself will likely have some sort of reference to actual code that performs the check itself, with some parameters to pass in to the function.

For example, you could store a Condition record in the database that stores the name of the condition class as well as some accompanying parameters. The code could then dynamically initialize the condition class it identifies, passing in the parameters and the record to check against.

## Effect

The Effect is what happens once a Rule is triggered and its Conditions pass. It is typically a function or execution of a function. It may be something as simple as setting a field or something as complex as kicking off an entire workflow.

Like the Condition, it will likely have some sort of reference to actual code that applies the Effect itself.

### Engine

Finally, you have the engine itself. This is the thing that will actually perform the bulk of the work. It'll accept records, load a list of rules, check whether those rules should be applied based on specific triggers and conditions, and then apply the effects of the rules.

https://medium.com/swlh/how-to-design-software-rules-engines-adbb098b2d73

https://github.com/venmo/business-rules

## Libraries

- [Rule Engine Documentation — Rule Engine 4.5.1 documentation](https://zerosteiner.github.io/rule-engine/)
- [7 Best Python Rule Engines for Your Projects | Nected Blogs](https://www.nected.ai/blog/python-rule-engines-automate-and-enforce-with-python)
- [business-rule-engine · PyPI](https://pypi.org/project/business-rule-engine/)
- [Python Rule Engine: Logic Automation & Examples | by Django Stars | Medium](https://medium.com/@djangostars/python-rule-engine-logic-automation-examples-887d3210643e)
