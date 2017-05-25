package ct.store.pages;

import org.openqa.selenium.WebDriver;

public class AbstractPage {
	
	protected WebDriver driver;
	
	public AbstractPage (WebDriver driver){
		this.driver = driver;
	}
	
	public LandingPage navigateToWebApp(){
		driver.navigate().to("http://localhost/OpencartStore/");
		return new LandingPage(driver);			
	}
	
	public void closeDriver(){
		driver.close();
	}
}
