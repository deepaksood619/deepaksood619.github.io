# Intro

## Testing Vocabulary

- **units** - functions we are testing
- The pytest command-line executable is called a **test runner**. It executes (runs) the tests.
- A **test suite** is an arbitrary collection of tests. Usually, it means all tests.

## Why do we test at all?

- **Trust:** You checked at least some cases if they work. So others can have more trust in the quality of your work and you can also put more trust in it.
- **Breaking Changes:** For a bigger project, it is sometimes hard to have every part in mind. By writing tests, you make it easier to change something and see if / where things break. This does not only help you but also team members. Including once that are not there yet.
- **Code Style:** When you know that you have to write tests, you write some things slightly differently. Those slight differences usually improve the coding style. Sometimes, they are crucial. For example, if you have to thoroughly test your code you will make smaller chunks.
- **Documentation:** Some test cases show a little bit of how the code is intended to be used.

## Good Tests

It's pretty hard to write good tests and when you measure your test coverage it is tempting to quickly write a couple of bad tests.
Worst is no testing at all.

A little bit better is a test that just executes a function but does not check if the return value/the side effects are what you expect. So you simply run it to check if the code crashes.

Happy-Tests where you check the output of the tested function and a typical input is even better. I call them happy because they test what you expect to get

In contrast, an **unhappy execution path** is dealing with unwanted inputs. This is also called [**negative testing**](https://en.wikipedia.org/wiki/Negative_testing). You check if you actually throw an error. Not throwing an error and silently failing is bad as it hides bugs.

Property testing is pretty cool. There you don't test for single values, but you check if a property is still held. For example, the output of a factorization function can be multiplied and should equal the input

https://medium.com/swlh/unit-testing-in-python-basics-21a9a57418a0

## Property Based Testing

https://levelup.gitconnected.com/unit-testing-in-python-property-based-testing-892a741fc119

[Code Checking Automation - Computerphile](https://www.youtube.com/watch?v=AfaNEebCDos)

## Blameless Root Cause Analysis (RCA) / Post Incident Analysis / Post Mortem / Incident Management

Root cause analysis (RCA) is a problem-solving method which is used to pinpoint the exact cause of a problem or event.
The root cause is the actual cause of a specific problem or set of problems, and when that cause is removed, it prevents the final undesirable effect from occurring.

RCA is a reactive method, as opposed to preventive, since it will be employed only after a problem has occurred in order to find its cause and prevent it from happening again.

https://www.techopedia.com/definition/30361/root-cause-analysis-rca

https://www.freecodecamp.org/news/what-is-a-software-post-mortem

https://about.gitlab.com/handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis.html

[How Meta Uses LLMs to Improve Incident Response (and how you can too) - Parity](https://www.tryparity.com/blog/how-meta-uses-llms-to-improve-incident-response)

## Pre Production Testing

- Shadowing
- Mutation tests
- Contract tests
- Unit tests
- Functional tests
- Component tests
- Integration tests
- Fuzz tests
- Load tests
- Smoke tests
- Coverage tests
- Regression tests - https://www.toptal.com/web-qa/ui-visual-regression-testing
- Acceptance tests
- Property based tests
- Usability tests
- Benchmarking
- Stress test
- Config tests

## Testing in Production

- Canarying
- Monitoring
- Exploration
- Profiling
- Distributed tracing
- Dynamic instrumentation
- Chaos engineering
- Feature flagging
- Real user monitoring
- User engagement tests
- **A/B testing**
    - https://www.optimizely.com

## Multivariate Testing

Multivariate testing(or A/B testing)is when you make product changes that are only seen by some of your users. This gives you some people that see the A version of your product and other people that see the B version of your product. Then you can see if version A or B gives you the results you want. A debate within multivariate testing is whether or not multi-armed bandit testing is the best kind of A/B test. Bandit testing is a continuous form of A/B testing that always send people toward the best performing options. In essence, the experiment never ends. I'm not going to get into this debate here, but I wanted you to know that there is a debate.

When running A/B tests it is important to remember that sample size matters. If option A and B are only shown to a few hundred visitors then it doesn't really matter what the results say. You don't have enough participants in the test to make the statistics meaningful. Here is an anecdote to illuminate this point. If you run an A/B test for 1 day, and on that day you have 2,000 visitors, and option A gave you the results you wanted 70% of the time, then you'd think this experiment is a success. Later you find out that this was the same day that a new blog linked to your product and the traffic from this blog accounted for 90% of your traffic that day. At best, your A/B test has uncovered something about the audience of this blog, not about the users of your product as a whole.- Traffic shifting

https://copyconstruct.medium.com/testing-in-production-the-safe-way-18ca102d0ef1

[Why Good Developers Write Bad Tests](https://www.youtube.com/watch?v=oO-FMAdjY68)

https://www.toptal.com/test-automation-engineer/automated-testing-best-practices

[Investing in Unit Testing: Benefits and Approaches | Toptal](https://www.toptal.com/unit-testing/unit-testing-benefits)

## Interview Questions

- In test automation, we use both _assert_ and _verify_ commands. What is the difference between them and when are they used?
- What is the difference between verification and validation?

### Selenium

- What is Page Object Model and Page Factory in Selenium?
- How do you deal with frame elements in Selenium on a page?
- What are some differences between CSS selector and XPath based locators?
    - CSS Selector - Unidirectional way
    - XPath works in unidirectional way
    - CSS selectors are often easier to read than XPath. Most front-end developers are more likely to be familiar with CSS selectors already.
    - Support for CSS selectors is quite consistent across various modern web browsers, which is not the case with their XPath engines.
    - CSS selectors work faster than XPath.

[33 Essential QA Interview Questions and Answers \[2024\] | Toptal®](https://www.toptal.com/qa/interview-questions)

[24 Essential Selenium Interview Questions and Answers \[2024\] | Toptal®](https://www.toptal.com/selenium/interview-questions)
