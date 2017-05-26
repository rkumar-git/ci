package ct.store.StepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"json:target/Destination/cucumberReport.json"},
        features = "src/test/java/ct/store/features",
        glue={"ct.store.StepDefinition"},
        dryRun=false
        )
public class TestRunner {

}

















//http://www.seleniumframework.com/continuous-test-automation/cucumber-jenkins-plugins/
//https://github.com/jenkinsci/cucumber-reports-plugin/wiki/Detailed-Configuration
//format = {"pretty", "html:target/Destination"}, 
//format = {"pretty", "json:target/Destination/cucumber.json"},