Feature:SearchProduct-iMac
	As a User,
	I want to search for products in Open Cart store
	
	@tag1
	Scenario: Search for iMac
	Given OpenCart Application is Displayed
	When I Search for Product
	Then Search list of the product should be displayed