Feature:LaunchOpenCartStoreApplication:
As a User,
I want to Login to OpenCart Application
So that I can purchse items online	

	
	@high
	@SmokeTest
	Scenario: OpenApplication
	Given The WebBrowser Opened
	When I Navigate to OpenStore Application
	Then OpenStore Application Should be displayed 

	@high
	@RegressionTest
	Scenario: Verify OpenCart Application Properties
	Given OpenCart Application is Active
	Then OpenCart Image Should be displayed
	  And Search Inputbox should be displayed
	  And Search Button should be displayed
	  And MyAccount Link should be displayed
