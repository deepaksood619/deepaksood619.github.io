# Developer Tools

## AWS CodeStar

Develop and Deploy AWS Applications

AWS CodeStar provides the tools you need to quickly develop, build, and deploy applications on AWS. With AWS CodeStar, you can use a variety of project templates to start developing applications on [Amazon EC2](https://aws.amazon.com/ec2/details/), [AWS Lambda](https://aws.amazon.com/lambda/details/), and [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/details/). AWS CodeStar projects support many popular programming languages including Java, JavaScript, PHP, Ruby, and Python. AWS CodeStar allows you to accelerate application delivery by providing a pre-configured continuous delivery toolchain for developing, building, testing, and deploying your projects on AWS. You can easily secure access for your projects through built-in security policies for various roles including owners, contributors, and viewers. The project dashboard in AWS CodeStar makes it easy to centrally monitor application activity and manage day-to-day development tasks such as recent code commits, builds, and deployments. Because AWS CodeStar integrates with Atlassian JIRA, a third-party issue tracking and project management tool, you can create and manage JIRA issues in the AWS CodeStar dashboard.

## AWS CodeCommit

Store Code in Private Git Repositories

### Pros

- IAM integration with very fine grained control

### Cons

- Send notifications on comments in a PR (Need to test this)

### Seting up multiple repositories in multiple accounts

```bash
Host example
    Hostname git-codecommit.ap-south-1.amazonaws.com
    User XXXAU2R6AAK3AIIGFXXX
    IdentityFile ~/.ssh/id_rsa

Host odf
    Hostname git-codecommit.ap-south-1.amazonaws.com
    User XXXAYNHO7HOVCVHRHXXX
    IdentityFile ~/.ssh/id_rsa

git clone ssh://odf/v1/repos/cred-workspace

git remote add origin ssh://example/v1/repos/decision-engine
```

https://forums.aws.amazon.com/thread.jspa?threadID=228206

### Git remote codecommit

https://aws.amazon.com/about-aws/whats-new/2020/03/aws-codecommit-introduces-open-source-remote-helper

https://docs.aws.amazon.com/codecommit/latest/userguide/temporary-access.html

https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-git-remote-codecommit.html

https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-unixes.html

https://aws.amazon.com/blogs/devops/using-git-with-aws-codecommit-across-multiple-aws-accounts

## AWS CodeBuild

Build and Test Code

## AWS CodeDeploy

Automate Code Deployment

## AWS CodePipeline

Release Software using Continuous Delivery

## AWS Cloud9

Write, Run, and Debug Code on a Cloud IDE

AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. Cloud9 comes prepackaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don't need to install files or configure your development machine to start new projects. Since your Cloud9 IDE is cloud-based, you can work on your projects from your office, home, or anywhere using an internet-connected machine. Cloud9 also provides a seamless experience for developing serverless applications enabling you to easily define resources, debug, and switch between local and remote execution of serverless applications. With Cloud9, you can quickly share your development environment with your team, enabling you to pair program and track each other's inputs in real time.

## AWS X-Ray

Analyze and Debug Your Applications

## AWS Command Line Interface

Unified Tool to Manage AWS Services

## CodeGuru

Amazon CodeGuru is a machine learning service for automated code reviews and application performance recommendations. It helps you find the most expensive lines of code that hurt application performance and keep you up all night troubleshooting, then gives you specific recommendations to fix or improve your code. CodeGuru is powered by machine learning, best practices, and hard-learned lessons across millions of code reviews and thousands of applications profiled on open source projects and internally at Amazon. With CodeGuru, you can find and fix code issues such as resource leaks, potential concurrency race conditions, and wasted CPU cycles. And with low, on-demand pricing, it is inexpensive enough to use for every code review and application you run. CodeGuru supports Java applications today, with support for more languages coming soon. CodeGuru helps you catch problems faster and earlier, so you can build and run better software.

https://aws.amazon.com/codeguru

## Chatbot

AWS Chatbot is an interactive agent that makes it easy to monitor and interact with your AWS resources in your [Slack](https://slack.com/) channels and [Amazon Chime](https://aws.amazon.com/chime/) chat rooms. With AWS Chatbot you can receive alerts and run commands to return diagnostic information, invoke AWS Lambda functions, and create AWS support cases so that your team can collaborate and respond to events faster.

https://aws.amazon.com/chatbot

## Amazon CodeCatalyst

Amazon CodeCatalyst is a unified software development service for development teams to quickly build, deliver and scale applications on AWS while adhering to organization-specific best practices. Developers can automate development tasks and innovate faster with generative AI capabilities, and spend less time setting up project tools, managing CI/CD pipelines, provisioning and configuring various development environments or coordinating with team members. IT Leaders can codify organizational best practices at scale via application blueprints to ensure compliance across teams with scale.

[Amazon CodeCatalyst](https://aws.amazon.com/codecatalyst/)

## Others

Life is Short, Use Dev Tools

The right dev tool can save you precious time, energy, and perhaps the weekend as well.

Here are our favourite dev tools:

### 1 - Development Environment

A good local dev environment is a force multiplier. Powerful IDEs like VSCode, IntelliJ IDEA, Notepad++, Vim, PyCharm & Jupyter Notebook can make your life easy.

### 2 - Diagramming

Showcase your ideas visually with diagramming tools like DrawIO, Excalidraw, mindmap, Mermaid, PlantUML, Microsoft Visio, and Miro

### 3 - AI Tools

AI can boost your productivity. Don’t ignore tools like ChatGPT, GitHub Copilot, Tabnine, Claude, Ollama, Midjourney, and Stable Diffusion.

### 4 - Hosting and Deployment

For hosting your applications, explore solutions like AWS, Cloudflare, GitHub, Fly, Heroku, and Digital Ocean.

### 5 - Code Quality

Quality code is a great differentiator. Leverage tools like Jest, ESLint, Selenium, SonarQube, FindBugs, and Checkstyle to ensure top-notch quality.

### 6 - Security

Don’t ignore the security aspects and use solutions like 1Password, LastPass, OWASP, Snyk, and Nmap.

### 7 - Note-taking

Your notes are a reflection of your knowledge. Streamline your note-taking with Notion, Markdown, Obsidian, Roam, Logseq, and Tiddly Wiki.

### 8 - Design

Elevate your visual game with design tools like Figma, Sketch, Adobe Illustrator, Canva, and Adobe Photoshop.
