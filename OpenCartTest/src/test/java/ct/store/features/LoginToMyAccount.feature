Feature:LoginToMyAccount
	As a User,
	I should be able to Login to My Account.
	
	@high
	@smoke_test
	@regression
	Scenario: Navigate to MyAccount
	Given OpenCart MyAccount Page is Navigated
	When MyAccount Page is Active
	Then EMailAddress Field should be enabled
	And Password Field should be enabled
	And Login Button should be enabled

	@high
	@regression
	Scenario: Login To OpenCartApplication_MyAccount Without UserName and Password and Verify Error Message
	Given UserName field displayed
		And Password Field dispayed 
	When Enter Usernamd as Empty String
		And Enter Password as Empty String
		And Click the Submit Button
	Then Warning Message should be displayed 
	
@medium
@smoke_test
@regression
Scenario: Login To OpenCartApplication_MyAccount With Invalid UserName and Password and Verify error message.
Given UserName field displayed
	And Password Field dispayed 
When Enter Invalid UserName
	And Enter Invalid Password
	And Click the Submit Button
Then Warning Message should be displayed 

@high
@smoke_test
@regression
Scenario: Login To OpenCartApplication_MyAccount With valid Username and Password and Verify landing page
	Given UserName field displayed
	And Password Field dispayed 
When Enter Valid UserName
	And Enter Valid Password
	And Click the Submit Button
Then MyAccount Page should be displayed
	
	




