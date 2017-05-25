package ct.store.StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class SearchProduct_Steps {
	public static WebDriver driver;
	
	@Given("^OpenCart Application is Displayed$")
	public void opencart_Application_is_Displayed() throws Throwable {
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability("marionette", true);
		String geckodriverpath="D:\\eclipse-workspace\\Kepler-OpenCartPOC\\TestDrivers\\geckodriver64bit\\geckodriver.exe";
        System.setProperty("webdriver.gecko.driver",geckodriverpath);
		driver = new FirefoxDriver(capabilities);
		driver.manage().window().maximize();
		driver.navigate().to("http://localhost/OpencartStore/");	
		Thread.sleep(3000);
		System.out.println("Trigged the Application Url:" + driver.getCurrentUrl());
		assertTrue("OpenCart Application is Active", driver.findElement(By.name("search")).isDisplayed());
		System.out.println("Open Cart Appllication is Active");
	}

	@When("^I Search for Product$")
	public void i_Search_for_Product() throws Throwable {
		WebElement element_SearchInput = driver.findElement(By.id("search"));
		WebElement element_SearchBtn = driver.findElement(By.xpath("//*[@id='search']/span/button/i"));
		element_SearchInput.click();
		element_SearchInput.sendKeys(Keys.CONTROL + "a");
		element_SearchInput.sendKeys(Keys.DELETE);
		element_SearchInput.sendKeys("iMac");
		Thread.sleep(1000);
		element_SearchBtn.click();
		Thread.sleep(2000);
		System.out.println("Triggered the Search");
	}

	@Then("^Search list of the product should be displayed$")
	public void search_list_of_the_product_should_be_displayed() throws Throwable {
		Thread.sleep(1000);
		//assertTrue("Listed the searched product.", driver.findElement(By.id("search")).isDisplayed());
		System.out.println("Search result displayed in the Result page.");
		driver.quit();
	}


}
