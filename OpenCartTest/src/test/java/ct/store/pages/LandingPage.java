package ct.store.pages;
//https://www.youtube.com/watch?v=x5Ru0f8uOqw
//https://www.youtube.com/watch?v=jeyrHpsIyas
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LandingPage extends AbstractPage{

	public LandingPage(WebDriver driver) {
		super(driver);
	}
	
	public LandingPage setSearchText(String value){
		WebElement searchbox= driver.findElement(By.id("search"));
		searchbox.click();
		searchbox.sendKeys(value);
		return new LandingPage(driver);
	}
	
	public LandingPage isMyAccountMenuItemDisplayed(){
		driver.findElement(By.linkText("My Account"));
		return new LandingPage(driver);		
	}
	
	public LandingPage isSearchBoxDisplayed(){
		driver.findElement(By.id("search"));
		return new LandingPage(driver);
	}
	
	public boolean isSearchBoxDisplayedInLandingPage(){
		return driver.findElement(By.id("search")).isDisplayed();
	}
	
	public boolean verifyApplicationUrl(String url){
		boolean isCorrect = false;
		if (driver.getCurrentUrl() == url){
			isCorrect = true;
		} 
		return isCorrect;
	}
	
	public MyAccountPage navigateToLoginPage(){
		driver.findElement(By.linkText("My Account")).click();;
		driver.findElement(By.linkText("Login")).click();
		return new MyAccountPage(driver);
	}
	
	public RegisterAccountPage navigateToRegisterPage(){
		driver.findElement(By.linkText("My Account")).click();;
		driver.findElement(By.linkText("Register")).click();
		return new RegisterAccountPage(driver);
	}

}
