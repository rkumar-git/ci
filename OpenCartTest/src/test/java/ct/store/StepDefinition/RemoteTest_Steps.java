package ct.store.StepDefinition;

import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RemoteTest_Steps {
	public static WebDriver remote_driver;	
	public String geckodriverpath = "D:\\eclipse-workspace\\Kepler-OpenCartPOC\\TestDrivers\\geckodriver-161\\geckodriver.exe";
	@Given("^HunAndNodeConnected$")
	public void hunandnodeconnected() throws Throwable{			
		//https://stackoverflow.com/questions/42561829/selenium-grid-v-3-1-0-test-unable-to-create-new-remote-session
		System.out.println("Opened the Browser - Remote Test Mode.");
		String Node = "http://10.117.215.60:5555/wd/hub";
		System.out.println("geckodriverpath:" + geckodriverpath);
		System.setProperty("webdriver.gecko.driver",geckodriverpath);
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability("marionette", false);
		System.out.println("after set capability");
		System.out.println("Node Url:" + Node);
		capabilities.setBrowserName("firefox");
	    capabilities.setPlatform(Platform.WINDOWS);
		remote_driver = new RemoteWebDriver(new URL(Node),capabilities);	
		System.out.println("New Remote Driver.");
		System.out.println("Windows Handle" + remote_driver.getWindowHandle());
		remote_driver.get("http://www.google.com");
		System.out.println("Opened the Browser - Remote Test Mode.");		
		System.out.println("Remote Driver - Details:" + remote_driver.getTitle());
	}	

	@When("^I access The Application$")
	public void i_access_The_Application() throws Throwable {
		System.out.println("Access Application");
		System.out.println("Driver details- URL:" + remote_driver.getCurrentUrl());
		//remote_driver.navigate().to("http://localhost/OpencartStore/");
		remote_driver.get("http://localhost/OpencartStore/");
		Thread.sleep(2000);
		System.out.println("Trigged the Application Url:" + remote_driver.getCurrentUrl());
	}

	@Then("^Application Should launch successfully$")
	public void application_Should_launch_successfully() throws Throwable {
	    
	}
}
