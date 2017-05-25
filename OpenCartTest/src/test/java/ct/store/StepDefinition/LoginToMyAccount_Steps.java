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

public class LoginToMyAccount_Steps {
	public static WebDriver driver;
	
@Given("^OpenCart MyAccount Page is Navigated$")
public void opencart_MyAccount_Page_is_Navigated() throws Throwable {
	DesiredCapabilities capabilities = DesiredCapabilities.firefox();
	capabilities.setCapability("marionette", true);
	String geckodriverpath="D:\\eclipse-workspace\\Kepler-OpenCartPOC\\TestDrivers\\geckodriver64bit\\geckodriver.exe";
    System.setProperty("webdriver.gecko.driver",geckodriverpath);
	driver = new FirefoxDriver(capabilities);
	driver.manage().window().maximize();
	driver.navigate().to("http://localhost/OpencartStore/index.php?route=account/login");	
	Thread.sleep(3000);
	System.out.println("Trigged the My Account Url:" + driver.getCurrentUrl());
	assertTrue("Navigated to MyAccount Page", driver.findElement(By.id("input-email")).isDisplayed());
	System.out.println("MyAccount - EMail Address Field is displayed.");
}

@When("^MyAccount Page is Active$")
public void myaccount_Page_is_Active() throws Throwable {
	assertTrue("MyAccount Page is Active", driver.findElement(By.id("input-email")).isDisplayed());
	System.out.println("MyAccount Page is active - EMail Address Field is displayed.");
	}

@Then("^EMailAddress Field should be enabled$")
public void emailaddress_Field_should_be_enabled() throws Throwable {
	assertTrue("MyAccount Page EMail Address field shouled be enabled", driver.findElement(By.id("input-email")).isEnabled());
	System.out.println("MyAccount Page - EMail Address Field is enabled.");
	}

@Then("^Password Field should be enabled$")
public void password_Field_should_be_enabled() throws Throwable {
	assertTrue("MyAccount Page Password field shouled be enabled", driver.findElement(By.id("input-password")).isEnabled());
	System.out.println("MyAccount Page - Password Field is enabled.");
}

@Then("^Login Button should be enabled$")
public void login_Button_should_be_enabled() throws Throwable {
	assertTrue("MyAccount Page Login button shouled be enabled", driver.findElement(By.xpath("//*[@id='content']/div/div[2]/div/form/input")).isEnabled());
	System.out.println("MyAccount Page - Login button is enabled.");
	}
	
/**************************************************************************************************
* SECENARIO 03:Login To OpenCartApplication_MyAccount Without UserName and Password and Verify Error Message
***************************************************************************************************/
@Given("^UserName field displayed$")
public void username_field_displayed() throws Throwable {
	driver.navigate().to("http://localhost/OpencartStore/index.php?route=account/login");	
	Thread.sleep(3000);
	assertTrue("MyAccount Page EMail Address field shouled be displayed", driver.findElement(By.id("input-email")).isDisplayed());
	System.out.println("MyAccount Page - EMail Address Field is displayed.");
	}

@Given("^Password Field dispayed$")
public void password_Field_dispayed() throws Throwable {
	assertTrue("MyAccount Page Password field shouled be displayed", driver.findElement(By.id("input-password")).isDisplayed());
	System.out.println("MyAccount Page - Password Field is displayed.");
	}

@When("^Enter Usernamd as Empty String$")
public void enter_Usernamd_as_Empty_String() throws Throwable {
	driver.findElement(By.id("input-email")).sendKeys("");
	System.out.println("Empty string passed to username field.");
	Thread.sleep(1000);
	}

@When("^Enter Password as Empty String$")
public void enter_Password_as_Empty_String() throws Throwable {
	driver.findElement(By.id("input-password")).sendKeys("");
	System.out.println("Empty string passed to password field.");
	Thread.sleep(1000);
	}

@When("^Click the Submit Button$")
public void click_the_Submit_Button() throws Throwable {
	driver.findElement(By.xpath("//*[@id='content']/div/div[2]/div/form/input")).click();
	Thread.sleep(1000);
	}

@Then("^Warning Message should be displayed$")
public void warning_Message_should_be_displayed() throws Throwable {
    System.out.println("Warning Message displaued.");
	}

/**************************************************************************************************
* SECENARIO 03:Login To OpenCartApplication_MyAccount With Invalid User name and Password
***************************************************************************************************/
@When("^Enter Invalid UserName$")
public void enter_Invalid_UserName() throws Throwable {
	driver.findElement(By.id("input-email")).click();
	driver.findElement(By.id("input-email")).sendKeys("iUserName");
	Thread.sleep(1000);
	}

@When("^Enter Invalid Password$")
public void enter_Invalid_Password() throws Throwable {
	driver.findElement(By.id("input-password")).click();
	driver.findElement(By.id("input-password")).sendKeys("iPassword");
	Thread.sleep(1000);
	}

/**************************************************************************************************
* SECENARIO 05:Login To OpenCartApplication_MyAccount With Valid User name and Password
***************************************************************************************************/
@When("^Enter Valid UserName$")
public void enter_Valid_UserName() throws Throwable {
	WebElement element_inputEmail = driver.findElement(By.id("input-email"));
	element_inputEmail.click();
	element_inputEmail.sendKeys(Keys.CONTROL + "a");
	element_inputEmail.sendKeys(Keys.DELETE);
	element_inputEmail.sendKeys("rameshkumar.m@hcl.com");
	Thread.sleep(1000);
	}

@When("^Enter Valid Password$")
public void enter_Valid_Password() throws Throwable {
	WebElement element_InputPasswprd = driver.findElement(By.id("input-password"));
	element_InputPasswprd.click();
	element_InputPasswprd.sendKeys(Keys.CONTROL + "a");
	element_InputPasswprd.sendKeys(Keys.DELETE);		
	element_InputPasswprd.sendKeys("pwd1234");
	Thread.sleep(1000);
	}

@Then("^MyAccount Page should be displayed$")
public void myaccount_Page_should_be_displayed() throws Throwable {
	Thread.sleep(1000);
	System.out.println("My Account Page displayed");
	driver.quit();
	}
}

