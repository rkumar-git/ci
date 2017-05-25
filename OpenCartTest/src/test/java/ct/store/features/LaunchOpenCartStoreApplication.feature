Feature:LaunchOpenCartStoreApplication:
As a User,
I want to Login to OpenCart Application
So that I can purchse items online	

	
	@tag1
	Scenario: OpenApplication
	Given The WebBrowser Opened
	When I Navigate to OpenStore Application
	Then OpenStore Application Should be displayed 

	@tag2
	Scenario: Verify OpenCart Application Properties
	Given OpenCart Application is Active
	Then OpenCart Image Should be displayed
	  And Search Inputbox should be displayed
	  And Search Button should be displayed
	  And MyAccount Link should be displayed
