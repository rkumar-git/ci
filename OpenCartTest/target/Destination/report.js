$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("launchOpenCartStore.feature");
formatter.feature({
  "line": 1,
  "name": "Launch OpenCart Application",
  "description": "",
  "id": "launch-opencart-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "launchOpenCartStore",
  "description": "",
  "id": "launch-opencart-application;launchopencartstore",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I triger the OpenCartStore Url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "OpenCartApplication should load",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should be enter searchtext",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "My Account Menu should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "url should be same as triggered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to Register Page by Clicking the MyAccount Register menu item",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to MyAccount by Clicking the MyAccount Login menu item",
  "keyword": "And "
});
formatter.match({
  "location": "launchOpenCartStore_Steps.i_open_the_Browser()"
});
formatter.result({
  "duration": 13556291343,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.i_triger_the_OpenCartStore_Url()"
});
formatter.result({
  "duration": 2227200105,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.opencartapplication_should_load()"
});
formatter.result({
  "duration": 33717245,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.i_should_be_enter_searchtext()"
});
formatter.result({
  "duration": 126465753,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.my_Account_Menu_should_be_displayed()"
});
formatter.result({
  "duration": 10574806,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.url_should_be_same_as_triggered()"
});
formatter.result({
  "duration": 8573000,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.i_should_be_able_to_navigate_to_Register_Page_by_Clicking_the_MyAccount_Register_menu_item()"
});
formatter.result({
  "duration": 190166046,
  "status": "passed"
});
formatter.match({
  "location": "launchOpenCartStore_Steps.i_should_be_able_to_navigate_to_MyAccount_by_Clicking_the_MyAccount_Login_menu_item()"
});
formatter.result({
  "duration": 169839650,
  "status": "passed"
});
formatter.uri("myAccount.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccountPage",
  "description": "I want to use this template for my feature file",
  "id": "myaccountpage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify MyAccount Page contain the expected fields.",
  "description": "",
  "id": "myaccountpage;verify-myaccount-page-contain-the-expected-fields.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "MyAccount Page is Loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "MyAccount Page  is Displayed",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Email Address field should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Password field should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Forget Password link should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login button should be diplayed.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Continue button is displayed.",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountPage_Steps.myaccount_Page_is_Loaded()"
});
formatter.result({
  "duration": 184315,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.myaccount_Page_is_Displayed()"
});
formatter.result({
  "duration": 70134,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.email_Address_field_should_be_displayed()"
});
formatter.result({
  "duration": 53028,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.password_field_should_be_displayed()"
});
formatter.result({
  "duration": 54739,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.forget_Password_link_should_be_displayed()"
});
formatter.result({
  "duration": 54739,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.login_button_should_be_diplayed()"
});
formatter.result({
  "duration": 54311,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPage_Steps.continue_button_is_displayed()"
});
formatter.result({
  "duration": 56449,
  "status": "passed"
});
});