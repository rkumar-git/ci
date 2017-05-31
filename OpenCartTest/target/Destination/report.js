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
  "duration": 7852855270,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.i_Navigate_to_OpenStore_Application()"
});
formatter.result({
  "duration": 7451347045,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.openstore_Application_Should_be_displayed()"
});
formatter.result({
  "duration": 220366425,
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
  "duration": 56740184,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Image_Should_be_displayed()"
});
formatter.result({
  "duration": 72430548,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Inputbox_should_be_displayed()"
});
formatter.result({
  "duration": 68643308,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Button_should_be_displayed()"
});
formatter.result({
  "duration": 54227759,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.myaccount_Link_should_be_displayed()"
});
formatter.result({
  "duration": 670405725,
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
  "duration": 30143065834,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_is_Active()"
});
formatter.result({
  "duration": 43799164,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.emailaddress_Field_should_be_enabled()"
});
formatter.result({
  "duration": 21669722,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_should_be_enabled()"
});
formatter.result({
  "duration": 22629361,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.login_Button_should_be_enabled()"
});
formatter.result({
  "duration": 22103783,
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
  "duration": 3673428761,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 38378312,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Usernamd_as_Empty_String()"
});
formatter.result({
  "duration": 1051598159,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Password_as_Empty_String()"
});
formatter.result({
  "duration": 1138922365,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1104324023,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 54312,
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
  "duration": 3702874386,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 45268131,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_UserName()"
});
formatter.result({
  "duration": 1121189559,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_Password()"
});
formatter.result({
  "duration": 1121805371,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1095287845,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 46186,
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
  "duration": 3715162818,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 55547478,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_UserName()"
});
formatter.result({
  "duration": 1368080353,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_Password()"
});
formatter.result({
  "duration": 1153728354,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1058239515,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_should_be_displayed()"
});
formatter.result({
  "duration": 1559700784,
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
  "duration": 14513067605,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.i_Search_for_Product()"
});
formatter.result({
  "duration": 3326908224,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.search_list_of_the_product_should_be_displayed()"
});
formatter.result({
  "duration": 1596645624,
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
  "duration": 12567130293,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.i_Search_for_Product()"
});
formatter.result({
  "duration": 3507538131,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.search_list_of_the_product_should_be_displayed()"
});
formatter.result({
  "duration": 1611540136,
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
  "duration": 323301,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.autobuild_should_be_executed()"
});
formatter.result({
  "duration": 60726,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.publichresult()"
});
formatter.result({
  "duration": 35922,
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
  "duration": 196290,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.autobuild_should_be_executed()"
});
formatter.result({
  "duration": 41909,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.publichresult()"
});
formatter.result({
  "duration": 27369,
  "status": "passed"
});
});