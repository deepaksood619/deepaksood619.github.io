# Onboarding

### IDE - VSCode

- GitLens
- GitGraph
- php cs fixer
- PHP intellisense
- Sonarlint
- Docker for local development
- Git flow tutorial onboarding document
- Cleanup your branches
- Maintain a todo list
- Fill standups
- If you can't do something say so, but don't say that you will do it and don't do it
- Productive
- Leave and WFH policy and how to apply
- 1st and 2nd day shadow all tech standups

#### Processes

- How to merge and move to live

#### Start

- Email
- Add to tech.team groups
- Laptop
- Leaves/WFH with agenda in Leaves/WFH -Tech calendar along with Agenda in description
- Meet with team (Introduce them to team)
- **Take them to Lunch**
- **Help them get accomodation**
- Slack
- Daily standups using dixiapp
- Code quality and writing test cases
- Share Tech Documents folder Google Drive
- Credentials
    - Keycloak
    - Databases
    - AWS
    - VPN

#### 2nd Week Start

- Follow up and syncup personally
- Onboarding buddy
- Mentor - Mentee

### Python

- You don't have to comment out all the logs.. You can leave `logging.debug` uncommented, it will not be printed in production and will be printed in local. And you can use `logging.info` for printing in production for general use case. use `logging.error` for logging known exception and send alerts too. and `logging.exception` for logging unexpected exception which will send alerts along with `Traceback`.
- And don't overlog using `logging.info` because it will be printed for each exception. But think in terms of if there is an error will logging here makes easier to debug. if yes then log otherwise not.
- Zero Toleration with Code Quality
- Flask - Tutorial + Test
- Django - Tutorial + Test

Notes - Kubernetes EKS Infra

### Important Points - Management

- Complete and deliver the task on or before deadlines (take ownership of tasks and dependencies)
- Create all sheets/docs everything in Tech Documents Folder
- We will not followup on tasks, that you have said you will do, and then don't do it.

### Coding (Test / Monitor / Alert / Logs (debugging))

- How will you test it
- How will you monitor it
- How will you get alerted on error

### Coding Standards

- snake_case vs CamelCase
- abc-xyz vs abc_xyz
- Object Oriented Programming Tutorial
- [coding-guidelines-code-reviews-clean-code](computer-science/software-engineering/coding-guidelines-code-reviews-clean-code.md)

### Android

- Firebase crashlytics
- Firebase analytics
- REST Standards

## Deboarding

1. Remove credentials

    - Email
    - Keycloak
    - VPN
    - AWS
    - Databases

2. KT

    - Module owner transfer
    - Crons transfer

3. Exit Interview

    - Feedback

### Onboarding Tips

- Discuss roles and responsibilities of both the new hire and yourself as the Manager
- discuss team ways of working
- provide an overview of the team/project and where it sits in the organization
- match the new hire with a peer buddy and mentor
- help the new hire build a social network - provide list of recommended people to meet with
- ask new hire what he/she prefers for welcome celebration (happy hour, lunch, donuts, etc)

## Todos

- Let me know 1 day before joining, so I can scope of tasks
- Shadow with me
- access requests completed
- set up development environment (step by step with links/screenshots)
- application network architecture tech stack diagram and visuals
- release process documentation (technical steps, who and how to communicate changes)
- misc developer tools - CI/CD, testing, project management tool, chatops, source control / preferred branching / forking / etc technique, license for IDE

## Questions to ask to new hires

- What's the best way to communicate with you?
- What's your working style?
- What management style works best for you?
- What's the best process for you to learn a new skill?

## [How To Win The First 90 Days At A New Job](https://www.linkedin.com/posts/abelcak_how-to-win-the-first-90-days-at-a-new-job-activity-7057701490240450560-wlgm/)

1. The new person card
2. Make your vip list
3. Send one request per day
4. The 3 magic questions
1. What are you and your team working on?
2. If you could wave a magic wand and have our team do one thing to make your life easier, what would it be?
3. What's your best piece of advice for someone new here?
5. Document their answers
6. Identify "Double Dip" Wins
7. Take action & report back
8. Growth acceleration time
