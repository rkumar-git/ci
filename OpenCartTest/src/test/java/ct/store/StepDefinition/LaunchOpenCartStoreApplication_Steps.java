package ct.store.StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;

public class LaunchOpenCartStoreApplication_Steps {
	public static WebDriver driver;	
	/*****************************************************************************************
	* SECENARIO 01: OpenApplication
	*******************************************************************************************/
	@Given("^The WebBrowser Opened$")
	public void the_WebBrowser_Opened() throws Throwable {
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability("marionette", true);
		String geckodriverpath="D:\\eclipse-workspace\\Kepler-OpenCartPOC\\TestDrivers\\geckodriver64bit\\geckodriver.exe";
        System.setProperty("webdriver.gecko.driver",geckodriverpath);
		driver = new FirefoxDriver(capabilities);
		driver.manage().window().maximize();
		System.out.println("Oened the Browser.");
	}

	@When("^I Navigate to OpenStore Application$")
	public void i_Navigate_to_OpenStore_Application() throws Throwable {
		driver.navigate().to("http://localhost/OpencartStore/");	
		Thread.sleep(2000);
		System.out.println("Trigged the Application Url:" + driver.getCurrentUrl());
	}

	@Then("^OpenStore Application Should be displayed$")
	public void openstore_Application_Should_be_displayed() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement element_searchbox = wait.until(ExpectedConditions.elementToBeClickable(By.name("search")));
		assertTrue("OpenCart Application Launched successfully.", element_searchbox.isDisplayed());
		System.out.println("Application title: " + driver.getTitle());
		System.out.println("Application URL:" + driver.getCurrentUrl());
	}

	/*****************************************************************************************
	* SECENARIO 02: Verify OpenCart Application Properties
	*******************************************************************************************/
	@Given("^OpenCart Application is Active$")
	public void opencart_Application_is_Active() throws Throwable {
		assertTrue("OpenCart Application is Active", driver.findElement(By.name("search")).isDisplayed());
		System.out.println("Open Cart Appllication is Active");
	}

	@Then("^OpenCart Image Should be displayed$")
	public void opencart_Image_Should_be_displayed() throws Throwable {
	    assertTrue("Open Cart Logo Should be Displayed", driver.findElement(By.id("logo")).isDisplayed());
	    System.out.println("Open Cart Logo Should be displayed.");
	}

	@Then("^Search Inputbox should be displayed$")
	public void search_Inputbox_should_be_displayed() throws Throwable {
		assertTrue("Search Input box Should be Displayed", driver.findElement(By.id("search")).isDisplayed());
	    System.out.println("Search Input box Should be displayed.");
	}

	@Then("^Search Button should be displayed$")
	public void search_Button_should_be_displayed() throws Throwable {
		assertTrue("Search button Should be Displayed", driver.findElement(By.xpath("//*[@id='search']/span/button")).isDisplayed());
	    System.out.println("Search button Should be displayed.");
	}

	@Then("^MyAccount Link should be displayed$")
	public void myaccount_Link_should_be_displayed() throws Throwable {
		assertTrue("My Account menu displayed.",driver.findElement(By.linkText("My Account")).isDisplayed());
		System.out.println("My Account Link should displayed");
		driver.quit();
	}
}
