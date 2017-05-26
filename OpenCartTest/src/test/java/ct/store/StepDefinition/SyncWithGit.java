package ct.store.StepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SyncWithGit {
	@When("^ChangeInCode$")
	public void changeincode() throws Throwable {
	   JenkinAutoRunCheck autocheck = new JenkinAutoRunCheck();
	   System.out.println("Check In time:" + autocheck.getCheckinTime());
	}

	@Then("^AutoBuild should be executed$")
	public void autobuild_should_be_executed() throws Throwable {
		 System.out.println("Check auto buils triggered..");
	}


}
