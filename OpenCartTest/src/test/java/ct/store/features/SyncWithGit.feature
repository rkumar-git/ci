Feature: SycWuthGit
	As a User
	I need to checkin new code
	
	@SmokeTest
Scenario:CheckInToGit
	When ChangeInCode
	Then AutoBuild should be executed
	And PublichResult