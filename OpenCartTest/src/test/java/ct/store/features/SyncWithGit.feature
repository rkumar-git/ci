Feature: SycWuthGit
	As a User
	I need to checkin new code
Scenario:CheckInToGit
	When ChangeInCode
	Then AutoBuild should be executed
	And PublichResult