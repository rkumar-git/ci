$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaunchOpenCartStoreApplication.feature");
formatter.feature({
  "line": 1,
  "name": "LaunchOpenCartStoreApplication:",
  "description": "As a User,\r\nI want to Login to OpenCart Application\r\nSo that I can purchse items online",
  "id": "launchopencartstoreapplication:",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
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
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The WebBrowser Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Navigate to OpenStore Application",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "OpenStore Application Should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.the_WebBrowser_Opened()"
});
formatter.result({
  "duration": 21833999254,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.i_Navigate_to_OpenStore_Application()"
});
formatter.result({
  "duration": 30834651845,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.openstore_Application_Should_be_displayed()"
});
formatter.result({
  "duration": 393198849,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify OpenCart Application Properties",
  "description": "",
  "id": "launchopencartstoreapplication:;verify-opencart-application-properties",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@high"
    },
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "OpenCart Application is Active",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "OpenCart Image Should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Search Inputbox should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Search Button should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "MyAccount Link should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Application_is_Active()"
});
formatter.result({
  "duration": 59925529,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Image_Should_be_displayed()"
});
formatter.result({
  "duration": 68043581,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Inputbox_should_be_displayed()"
});
formatter.result({
  "duration": 51896001,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Button_should_be_displayed()"
});
formatter.result({
  "duration": 76630763,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.myaccount_Link_should_be_displayed()"
});
formatter.result({
  "duration": 1526883909,
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
  "line": 7,
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
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "OpenCart MyAccount Page is Navigated",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "MyAccount Page is Active",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "EMailAddress Field should be enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Password Field should be enabled",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login Button should be enabled",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.opencart_MyAccount_Page_is_Navigated()"
});
formatter.result({
  "duration": 25540877851,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_is_Active()"
});
formatter.result({
  "duration": 42863210,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.emailaddress_Field_should_be_enabled()"
});
formatter.result({
  "duration": 23164864,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_should_be_enabled()"
});
formatter.result({
  "duration": 19862135,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.login_Button_should_be_enabled()"
});
formatter.result({
  "duration": 33536623,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login To OpenCartApplication_MyAccount Without UserName and Password and Verify Error Message",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-without-username-and-password-and-verify-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@high"
    },
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Usernamd as Empty String",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enter Password as Empty String",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Warning Message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 3798855527,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 39709729,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Usernamd_as_Empty_String()"
});
formatter.result({
  "duration": 1127610740,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Password_as_Empty_String()"
});
formatter.result({
  "duration": 1092255328,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1235693340,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 68423,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login To OpenCartApplication_MyAccount With Invalid UserName and Password and Verify error message.",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-with-invalid-username-and-password-and-verify-error-message.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@medium"
    },
    {
      "line": 25,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter Invalid UserName",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Enter Invalid Password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Warning Message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 3719542553,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 55463445,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_UserName()"
});
formatter.result({
  "duration": 1211084734,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_Password()"
});
formatter.result({
  "duration": 1129913201,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1094395281,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 96649,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login To OpenCartApplication_MyAccount With valid Username and Password and Verify landing page",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-with-valid-username-and-password-and-verify-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@high"
    },
    {
      "line": 35,
      "name": "@SmokeTest"
    },
    {
      "line": 35,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter Valid UserName",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Enter Valid Password",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "MyAccount Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 3703598534,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 38875815,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_UserName()"
});
formatter.result({
  "duration": 1281087374,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_Password()"
});
formatter.result({
  "duration": 1137542877,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1079738912,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_should_be_displayed()"
});
formatter.result({
  "duration": 1675343797,
  "status": "passed"
});
formatter.uri("SearchProduct-iMac.feature");
formatter.feature({
  "line": 1,
  "name": "SearchProduct-iMac",
  "description": "As a User,\r\nI want to search for products in Open Cart store",
  "id": "searchproduct-imac",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for iMac",
  "description": "",
  "id": "searchproduct-imac;search-for-imac",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "OpenCart Application is Displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Search for Product",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Search list of the product should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct_Steps.opencart_Application_is_Displayed()"
});
formatter.result({
  "duration": 11143259682,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.i_Search_for_Product()"
});
formatter.result({
  "duration": 3517293036,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.search_list_of_the_product_should_be_displayed()"
});
formatter.result({
  "duration": 1733263655,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for product",
  "description": "",
  "id": "searchproduct-imac;search-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "OpenCart Application is Displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I Search for Product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Search list of the product should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct_Steps.opencart_Application_is_Displayed()"
});
formatter.result({
  "duration": 26746199595,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.i_Search_for_Product()"
});
formatter.result({
  "duration": 3188887212,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.search_list_of_the_product_should_be_displayed()"
});
formatter.result({
  "duration": 2736438517,
  "status": "passed"
});
formatter.uri("SyncWithGit.feature");
formatter.feature({
  "line": 1,
  "name": "SycWuthGit",
  "description": "As a User\r\nI need to checkin new code",
  "id": "sycwuthgit",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "CheckInToGit",
  "description": "",
  "id": "sycwuthgit;checkintogit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "ChangeInCode",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "AutoBuild should be executed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "PublichResult",
  "keyword": "And "
});
formatter.match({
  "location": "SyncWithGit.changeincode()"
});
formatter.result({
  "duration": 398141,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.autobuild_should_be_executed()"
});
formatter.result({
  "duration": 115465,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.publichresult()"
});
formatter.result({
  "duration": 57305,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "CheckInToGitForRegression",
  "description": "",
  "id": "sycwuthgit;checkintogitforregression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "ChangeInCode",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "AutoBuild should be executed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "PublichResult",
  "keyword": "And "
});
formatter.match({
  "location": "SyncWithGit.changeincode()"
});
formatter.result({
  "duration": 238200,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.autobuild_should_be_executed()"
});
formatter.result({
  "duration": 106485,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.publichresult()"
});
formatter.result({
  "duration": 50890,
  "status": "passed"
});
});