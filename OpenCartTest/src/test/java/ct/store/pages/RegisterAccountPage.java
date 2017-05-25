package ct.store.pages;

import org.openqa.selenium.WebDriver;

public class RegisterAccountPage extends AbstractPage {

	public RegisterAccountPage(WebDriver driver) {
		super(driver);
	}
	
	public String getPageTitle(){
		return driver.getTitle();
	}

}
