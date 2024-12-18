# Stashfin DevOps Overhaul

- Scaled the stack and team to increase loan disbursals from 100K USD to 60M USD per month
- Increased the resiliency and stability of the system many fold. Achieved 99.99% of infrastructure uptime
- Moved all workloads to Kubernetes along with full monitoring, alerting and logging solution around applications
- Added Jenkins CICD and fully automated integration, testing and deployment pipelines for all applications

## Screenshots

![stashfin-jenkins-screenshot](../../media/Pasted%20image%2020231201181252.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173646.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173733.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173742.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173759.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173816.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173823.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173831.jpg)

![stashfin-devops-screenshot](../../media/Pasted%20image%2020231201173837.jpg)

## Keeping all repositories consistent and follow same standards across

- Added Auto formatters and static code analysis
- [Pre-commit](https://deepaksood619.github.io/python/documentation/27-development-tools/static-code-analysis) for running all hooks before commit locally
- Black (opinionated) for Python - auto formatters
- Keeping code complexity low for slowly reducing the function and file sizes
- [Code smells](https://deepaksood619.github.io/computer-science/software-engineering/code-smell)

![autoformatter-implementation](../../media/Pasted%20image%2020231201182421.jpg)

![autoformatter-implementation](../../media/Pasted%20image%2020231201182427.jpg)

### SonarQube / snyk - Continuous Code Quality Inspector

![sonarqube-implementation](../../media/Pasted%20image%2020231201182608.jpg)
