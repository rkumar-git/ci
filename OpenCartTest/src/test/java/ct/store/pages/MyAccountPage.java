package ct.store.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccountPage extends AbstractPage {

	public MyAccountPage(WebDriver driver) {
		super(driver);
	}
	
	public String getPageTitle(){
		return driver.getTitle();
	}		
	
	public boolean isEMailAddressFieldDisplayed(){
		return driver.findElement(By.id("input-email")).isDisplayed();
	}
	
	public boolean isPasswordFieldDisplayed(){
		return driver.findElement(By.id("input-password")).isDisplayed();
	}
	
	


	
	
}
