package ct.store.StepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SyncWithGit {
	@When("^ChangeInCode$")
	public void changeincode() throws Throwable {
	   JenkinAutoRunCheck autocheck = new JenkinAutoRunCheck();
	   System.out.println("Check In time:" + autocheck.getCheckinTime());
	   System.out.println("Updated on 25 May 2017 - 5:30 PM");
	}

	@Then("^AutoBuild should be executed$")
	public void autobuild_should_be_executed() throws Throwable {
		 System.out.println("Check auto buils triggered..");
	}


}
