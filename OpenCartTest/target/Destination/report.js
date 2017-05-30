$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaunchOpenCartStoreApplication.feature");
formatter.feature({
  "line": 1,
  "name": "LaunchOpenCartStoreApplication:",
  "description": "As a User,\r\nI want to Login to OpenCart Application\r\nSo that I can purchse items online",
  "id": "launchopencartstoreapplication:",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "OpenApplication",
  "description": "",
  "id": "launchopencartstoreapplication:;openapplication",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@high"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    },
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The WebBrowser Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Navigate to OpenStore Application",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "OpenStore Application Should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.the_WebBrowser_Opened()"
});
formatter.result({
  "duration": 13172948514,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.i_Navigate_to_OpenStore_Application()"
});
formatter.result({
  "duration": 4261246899,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.openstore_Application_Should_be_displayed()"
});
formatter.result({
  "duration": 546442449,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify OpenCart Application Properties",
  "description": "",
  "id": "launchopencartstoreapplication:;verify-opencart-application-properties",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@high"
    },
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 17,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "OpenCart Application is Active",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "OpenCart Image Should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Search Inputbox should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Search Button should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "MyAccount Link should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Application_is_Active()"
});
formatter.result({
  "duration": 88846201,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Image_Should_be_displayed()"
});
formatter.result({
  "duration": 73273012,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Inputbox_should_be_displayed()"
});
formatter.result({
  "duration": 44352111,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Button_should_be_displayed()"
});
formatter.result({
  "duration": 51584902,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.myaccount_Link_should_be_displayed()"
});
formatter.result({
  "duration": 765531065,
  "status": "passed"
});
formatter.uri("LoginToMyAccount.feature");
formatter.feature({
  "line": 1,
  "name": "LoginToMyAccount",
  "description": "As a User,\r\nI should be able to Login to My Account.",
  "id": "logintomyaccount",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Navigate to MyAccount",
  "description": "",
  "id": "logintomyaccount;navigate-to-myaccount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@high"
    },
    {
      "line": 6,
      "name": "@SmokeTest"
    },
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "OpenCart MyAccount Page is Navigated",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "MyAccount Page is Active",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "EMailAddress Field should be enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Password Field should be enabled",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Login Button should be enabled",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.opencart_MyAccount_Page_is_Navigated()"
});
formatter.result({
  "duration": 23325780520,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_is_Active()"
});
formatter.result({
  "duration": 58739861,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.emailaddress_Field_should_be_enabled()"
});
formatter.result({
  "duration": 25037013,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_should_be_enabled()"
});
formatter.result({
  "duration": 27909517,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.login_Button_should_be_enabled()"
});
formatter.result({
  "duration": 35709368,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login To OpenCartApplication_MyAccount With Invalid UserName and Password and Verify error message.",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-with-invalid-username-and-password-and-verify-error-message.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@medium"
    },
    {
      "line": 26,
      "name": "@SmokeTest"
    },
    {
      "line": 27,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter Invalid UserName",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter Invalid Password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Warning Message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 3822349509,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 47992669,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_UserName()"
});
formatter.result({
  "duration": 1207588765,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_Password()"
});
formatter.result({
  "duration": 1133256471,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1067885944,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 64147,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Login To OpenCartApplication_MyAccount With valid Username and Password and Verify landing page",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-with-valid-username-and-password-and-verify-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@high"
    },
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 38,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Enter Valid UserName",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Enter Valid Password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "MyAccount Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 3930656207,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 59620386,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_UserName()"
});
formatter.result({
  "duration": 1240602675,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_Password()"
});
formatter.result({
  "duration": 1149461721,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1060166492,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_should_be_displayed()"
});
formatter.result({
  "duration": 1898999220,
  "status": "passed"
});
});