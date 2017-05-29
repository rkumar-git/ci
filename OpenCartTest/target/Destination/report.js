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
      "name": "@hign"
    },
    {
      "line": 8,
      "name": "@smoke_test"
    },
    {
      "line": 9,
      "name": "@regression"
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
  "duration": 17944571835,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.i_Navigate_to_OpenStore_Application()"
});
formatter.result({
  "duration": 5795500556,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.openstore_Application_Should_be_displayed()"
});
formatter.result({
  "duration": 533906408,
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
      "name": "@smoke_test"
    },
    {
      "line": 17,
      "name": "@regression"
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
  "duration": 54371877,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.opencart_Image_Should_be_displayed()"
});
formatter.result({
  "duration": 106356201,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Inputbox_should_be_displayed()"
});
formatter.result({
  "duration": 80129046,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.search_Button_should_be_displayed()"
});
formatter.result({
  "duration": 172437476,
  "status": "passed"
});
formatter.match({
  "location": "LaunchOpenCartStoreApplication_Steps.myaccount_Link_should_be_displayed()"
});
formatter.result({
  "duration": 1522654164,
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
      "name": "@smoke_test"
    },
    {
      "line": 7,
      "name": "@regression"
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
  "duration": 10698633412,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_is_Active()"
});
formatter.result({
  "duration": 43749556,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.emailaddress_Field_should_be_enabled()"
});
formatter.result({
  "duration": 29490955,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_should_be_enabled()"
});
formatter.result({
  "duration": 20783637,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.login_Button_should_be_enabled()"
});
formatter.result({
  "duration": 18920380,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login To OpenCartApplication_MyAccount Without UserName and Password and Verify Error Message",
  "description": "",
  "id": "logintomyaccount;login-to-opencartapplication-myaccount-without-username-and-password-and-verify-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@high"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "UserName field displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Password Field dispayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Usernamd as Empty String",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Enter Password as Empty String",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Warning Message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToMyAccount_Steps.username_field_displayed()"
});
formatter.result({
  "duration": 4139909373,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 41145186,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Usernamd_as_Empty_String()"
});
formatter.result({
  "duration": 1098765896,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Password_as_Empty_String()"
});
formatter.result({
  "duration": 1067887655,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1169320358,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 152242,
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
      "name": "@smoke_test"
    },
    {
      "line": 27,
      "name": "@regression"
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
  "duration": 3700575356,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 40210351,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_UserName()"
});
formatter.result({
  "duration": 1201110769,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Invalid_Password()"
});
formatter.result({
  "duration": 1141347977,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1091144802,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.warning_Message_should_be_displayed()"
});
formatter.result({
  "duration": 169348,
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
      "name": "@smoke_test"
    },
    {
      "line": 38,
      "name": "@regression"
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
  "duration": 3713962841,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.password_Field_dispayed()"
});
formatter.result({
  "duration": 42386218,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_UserName()"
});
formatter.result({
  "duration": 1331399799,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.enter_Valid_Password()"
});
formatter.result({
  "duration": 1155726747,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1064052946,
  "status": "passed"
});
formatter.match({
  "location": "LoginToMyAccount_Steps.myaccount_Page_should_be_displayed()"
});
formatter.result({
  "duration": 1743358430,
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
      "name": "@smoke_test"
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
  "duration": 12080990328,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.i_Search_for_Product()"
});
formatter.result({
  "duration": 3494576582,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.search_list_of_the_product_should_be_displayed()"
});
formatter.result({
  "duration": 1621292194,
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
  "line": 4,
  "name": "CheckInToGit",
  "description": "",
  "id": "sycwuthgit;checkintogit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "ChangeInCode",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "AutoBuild should be executed",
  "keyword": "Then "
});
formatter.match({
  "location": "SyncWithGit.changeincode()"
});
formatter.result({
  "duration": 44258456,
  "status": "passed"
});
formatter.match({
  "location": "SyncWithGit.autobuild_should_be_executed()"
});
formatter.result({
  "duration": 118030,
  "status": "passed"
});
});