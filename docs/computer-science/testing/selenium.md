# Selenium

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

```bash
mvn install
mvn test
```

[ChromeDriver](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/chrome/ChromeDriver.html)

[How To Run Selenium Tests In Docker - Scaler Topics](https://www.scaler.com/topics/selenium-tutorial/selenium-docker/)

[How to run Selenium tests on Chrome using ChromeDriver? | BrowserStack](https://www.browserstack.com/guide/run-selenium-tests-using-selenium-chromedriver)

[How to run Selenium Tests in Docker | BrowserStack](https://www.browserstack.com/guide/run-selenium-tests-in-docker)

## Selenium Grid

[Selenium Grid Tutorial : Learn Basics & How to Set It Up | BrowserStack](https://www.browserstack.com/guide/selenium-grid-tutorial)

[Grid | Selenium](https://www.selenium.dev/documentation/grid/)
