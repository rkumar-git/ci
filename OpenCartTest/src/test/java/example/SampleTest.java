package example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.AfterTest;

import ct.store.StepDefinition.TestRunner;


public class SampleTest {
	WebDriver driver;
  @Test
  
  public void launchOpenCart() {	  
	  driver.navigate().to("http://localhost/OpencartStore/");
	  String title = driver.getTitle();
	  String url = driver.getCurrentUrl();
	  Assert.assertTrue(url.contains("OpencartStore"));
	  Assert.assertTrue(title.contains("Store")); 	
	  }
  
  @BeforeTest
  public void beforeTest() {
	  String exePath = "D:\\eclipse-workspace\\poc-opencart\\chromedriver_win32\\chromedriver.exe";
	  System.setProperty("webdriver.chrome.driver", exePath);
	  driver = new ChromeDriver();
	  driver.manage().window().maximize();	 
  }

  @AfterTest
  public void afterTest() {
	  driver.quit();
  }

}
