# Tools

## Google Test

Google Testing and Mocking Framework

Google Test (also known as gtest for e.g. the [ROS](https://en.wikipedia.org/wiki/Robot_Operating_System) environment) is a [unit testing](https://en.wikipedia.org/wiki/Unit_testing) library for the [C++ programming language](https://en.wikipedia.org/wiki/C%2B%2B), based on the [xUnit](https://en.wikipedia.org/wiki/XUnit) architecture.The library is released under the BSD 3-clause license.It can be compiled for a variety of [POSIX](https://en.wikipedia.org/wiki/POSIX) and [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) platforms, allowing unit-testing of C sources as well as C++ with minimal source modification. The tests themselves could be run one at a time, or even be called to run all at once. This makes the debugging process very specific and caters to the need of many programmers and coders alike

https://en.wikipedia.org/wiki/Google_Test

https://github.com/google/googletest

## Other Tools

- Puppeteer - https://github.com/puppeteer/puppeteer
- https://cucumber.io
- NCover
- Magellan
- JTest
- Cobertura
- Emma
- Bazel - Build and test software of any size, quickly and reliably - https://www.bazel.build
- REST Assured (REST Test Tool)
- Mockito (Mocking)
- JUnit
- [Getting Started with FitNesse - DZone Refcardz](https://dzone.com/refcardz/getting-started-fitnesse)

### Selenium

```bash
pip install selenium
```

Two ways to run tests -

1. Using chrome_driver
2. Using RemoteWebDriver

```java
import java.net.*;
import org.openqa.selenium.firefox.*;
import org.openqa.selenium.remote.*;

public class docker_selenium {
    public static void main(String[] args) {
        try {
         FirefoxOptions options = new FirefoxOptions();
            URL url = new URL("http://localhost:4444/wd/hub");
            RemoteWebDriver driver = new RemoteWebDriver(url, options);
            driver.get("https://www.scaler.com/topics/");
            System. out.println("Title: " + driver.getTitle());
            driver.quit();
        } catch (MalformedURLException e) {
            System. out.println("Invalid Selenium URL: " + e.getMessage());
        } catch (Exception e) {
            System. out.println("An error occurred: " + e.getMessage());
        }
    }
}


// using chromedriver
service = Service(executable_path=r"..\chromedriver.exe")

driver = webdriver.Chrome(service=service)


System.setProperty("webdriver.chrome.driver", "C:\\path\\to\\chromedriver.exe");
ChromeOptions options = new ChromeOptions();

chrome_options.add_argument('--headless')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')

options.addArguments("start-maximized"); // open Browser in maximized mode
options.addArguments("disable-infobars"); // disabling infobars
options.addArguments("--disable-extensions"); // disabling extensions
options.addArguments("--disable-gpu"); // applicable to windows os only
options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
options.addArguments("--no-sandbox"); // Bypass OS security model
WebDriver driver = new ChromeDriver(options);
driver.get("https://google.com");
```

[ChromeDriver](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/chrome/ChromeDriver.html)

[How To Run Selenium Tests In Docker - Scaler Topics](https://www.scaler.com/topics/selenium-tutorial/selenium-docker/)

[How to run Selenium tests on Chrome using ChromeDriver? | BrowserStack](https://www.browserstack.com/guide/run-selenium-tests-using-selenium-chromedriver)

[How to run Selenium Tests in Docker | BrowserStack](https://www.browserstack.com/guide/run-selenium-tests-in-docker)

## REST Assured

Testing and validating REST services in Java is harder than in dynamic languages such as Ruby and Groovy. REST Assured brings the simplicity of using these languages into the Java domain.

http://rest-assured.io

https://www.toptal.com/java/unit-integration-junit-tests

https://getopentest.org

OpenTest is a free and open source functional test automation framework for web applications, mobile apps and APIs, built for scalability and extensibility, with a focus on enabling the mainstream test automation practices. OpenTest is a feature-reach tool that requires little to no coding skills and can handle virtually any type of functional test automation project.

## Katalon

[Katalon Studio](https://www.katalon.com) is a free and complete automation testing solution for Web, Mobile, and API testing with modern methodologies (Data-Driven Testing, TDD/BDD, Page Object Model, etc.) as well as advanced integration (JIRA, qTest, Slack, CI, Katalon TestOps, etc.). Learn more about [Katalon Studio features](https://www.katalon.com/features/).

## Katalon TestOps

[Katalon TestOps](https://analytics.katalon.com) is a web-based application that provides dynamic perspectives and an insightful look at your automation testing data. You can leverage your automation testing data by transforming and visualizing your data; analyzing test results; seamlessly integrating with such tools as Katalon Studio and Jira; maximizing the testing capacity with remote execution.

## Katalon Runtime Engine (KRE)

Katalon Runtime Engine (KRE)is the test execution add-on of Katalon Studio. KRE allows you to execute automation tests in CLI mode. It can be used in a variety of scenarios, such as scheduling your tests, integrating with CI/CD system, or bundling your tests to execute in virtual containers like Docker.

https://www.katalon.com

https://github.com/katalon-studio/katalon-studio

## TestLink

TestLink Open Source Test & Requirement Management System

TestLink is a web based test management and test execution system. It enables quality assurance teams to create and manage their test cases as well as to organize them into test plans. These test plans allow team members to execute test cases and track test results dynamically.

https://github.com/TestLinkOpenSourceTRMS/testlink-code

## UIPath (Robotic Process Automation - RPA)

https://www.uipath.com

Robotic Process Automation (RPA) is a software program that imitates human actions while interacting with a computer application and accomplishing automation of repetitive, rule-based processes. UiPath is reliable, fast and one of the most popular among other existing automation tools.
