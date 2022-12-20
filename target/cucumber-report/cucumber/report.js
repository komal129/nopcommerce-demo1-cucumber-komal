$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computertest.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5270685900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i should able to see all products in decending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 178420600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1026725500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 882894200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToSeeAllProductsInDecendingOrder()"
});
formatter.result({
  "duration": 224909200,
  "status": "passed"
});
formatter.after({
  "duration": 698154700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "User should add product to shopping cart sucessfully",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select By position by \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should able to see the price",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should Click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should able to close clicking on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should able to mouseHover on Shopping cart and",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Shopping Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should be able to see \"Shopping cart\" text",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to update the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to update the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify the Total Price \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify Welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on As Guest Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i enter firstname \"John\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter lastname \"Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email \"smith@example.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select Country \"United Kingdom \"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select State",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter address  \"45,Oxford Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter postal code \"W4 2XZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter phone number \"025556556\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Radio Button Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continuebutton",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select Radio Button Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on continuetab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select \"Master Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter cardholder name \"John Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter card number \"5555555555554444\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter Year \"2024\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter cardcode \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on Continuebtn",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Verify Payment Method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify Shipping Method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Verify Total is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on comfirm",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Verify the text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Verify \"Welcome to our store\"",
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-sucessfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 69,
      "id": "computer-test;user-should-add-product-to-shopping-cart-sucessfully;;1"
    },
    {
      "cells": [
        "1",
        "5",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 70,
      "id": "computer-test;user-should-add-product-to-shopping-cart-sucessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2395121800,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "User should add product to shopping cart sucessfully",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select By position by \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to see Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select ram \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should able to see the price",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should Click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should able to close clicking on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should able to mouseHover on Shopping cart and",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Shopping Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should be able to see \"Shopping cart\" text",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to update the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to update the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify the Total Price \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify Welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on As Guest Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i enter firstname \"John\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter lastname \"Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email \"smith@example.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select Country \"United Kingdom \"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select State",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter address  \"45,Oxford Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter postal code \"W4 2XZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter phone number \"025556556\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Radio Button Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continuebutton",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select Radio Button Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on continuetab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select \"Master Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter cardholder name \"John Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter card number \"5555555555554444\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter Year \"2024\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter cardcode \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on Continuebtn",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Verify Payment Method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify Shipping Method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Verify Total is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on comfirm",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Verify the text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Verify \"Welcome to our store\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 527097300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 391250300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iSelectByPositionBy(String)"
});
formatter.result({
  "duration": 122560200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 5066425000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToSeeBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1071001000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 107426600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 102668400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 59707500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 66070100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 69242800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToSeeThePrice()"
});
formatter.result({
  "duration": 724434100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldClickOnAddToCartButton()"
});
formatter.result({
  "duration": 54448900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iShouldSeeMessage(String)"
});
formatter.result({
  "duration": 292560600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToCloseClickingOnCrossButton()"
});
formatter.result({
  "duration": 52596700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToMouseHoverOnShoppingCartAnd()"
});
formatter.result({
  "duration": 159269500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1332069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleToSeeText(String)"
});
formatter.result({
  "duration": 36122600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToUpdateTheQuantity()"
});
formatter.result({
  "duration": 3133508100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToUpdateTheShoppingCart()"
});
formatter.result({
  "duration": 478236200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.verifyTheTotalPrice(String)"
});
formatter.result({
  "duration": 50948700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 71965500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 589466500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.verifyWelcomeText(String)"
});
formatter.result({
  "duration": 40053800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAsGuestButton()"
});
formatter.result({
  "duration": 914245600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 97101500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 89728500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith@example.com",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 101682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom ",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 108969600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectState()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iEnterCity(String)"
});
formatter.result({
  "duration": 94602100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45,Oxford Street",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 100013300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "W4 2XZ",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iEnterPostalCode(String)"
});
formatter.result({
  "duration": 95354800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "025556556",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 89497700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 3058331200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnRadioButtonNextDayAir()"
});
formatter.result({
  "duration": 407965600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinuebutton()"
});
formatter.result({
  "duration": 57926200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "duration": 317026300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinuetab()"
});
formatter.result({
  "duration": 56683700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master Card",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelect(String)"
});
formatter.result({
  "duration": 344855600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iEnterCardholderName(String)"
});
formatter.result({
  "duration": 91145100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5555555555554444",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iEnterCardNumber(String)"
});
formatter.result({
  "duration": 83820300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 105700800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2024",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 103585200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iEnterCardcode(String)"
});
formatter.result({
  "duration": 67933700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnContinuebtn()"
});
formatter.result({
  "duration": 59884800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.verifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 350420900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.verifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 32635400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.verifyTotalIs(String)"
});
formatter.result({
  "duration": 34439100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComfirm()"
});
formatter.result({
  "duration": 60238400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 630135400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 30982000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnContinue()"
});
formatter.result({
  "duration": 389723700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 8
    }
  ],
  "location": "ComputerSteps.verify(String)"
});
formatter.result({
  "duration": 38155000,
  "status": "passed"
});
formatter.after({
  "duration": 733631000,
  "status": "passed"
});
formatter.uri("electronicstest.feature");
formatter.feature({
  "line": 2,
  "name": "Electronic Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "electronic-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2454270900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to cellphone page successfully",
  "description": "",
  "id": "electronic-test;user-should-navigate-to-cellphone-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hoover on Electronic tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hoover and click on cell phone",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify text \"Cell phones\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iMouseHooverOnElectronicTab()"
});
formatter.result({
  "duration": 155445100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iMouseHooverAndClickOnCellPhone()"
});
formatter.result({
  "duration": 791478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 13
    }
  ],
  "location": "ElectronicsPageSteps.verifyText(String)"
});
formatter.result({
  "duration": 36183800,
  "status": "passed"
});
formatter.after({
  "duration": 685533400,
  "status": "passed"
});
formatter.before({
  "duration": 2352233300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should verity that product added successfully and place order successfully",
  "description": "",
  "id": "electronic-test;user-should-verity-that-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hoover on Electronic tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hoover and click on cell phone",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on list view tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on NokiaLumia",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify title \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Change quantity",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cartbtn",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on crossbar",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "mouse hoover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to see \"Shopping cart\" text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the total price \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify Welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify  \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter firstname \"JO\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Lastname \"Sharma\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter emailid \"Jo@example.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter Password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter ConfirmPossword \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify the Message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on Continue register tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iMouseHooverOnElectronicTab()"
});
formatter.result({
  "duration": 159768500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iMouseHooverAndClickOnCellPhone()"
});
formatter.result({
  "duration": 571330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 13
    }
  ],
  "location": "ElectronicsPageSteps.verifyText(String)"
});
formatter.result({
  "duration": 38139400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 62203400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnNokiaLumia()"
});
formatter.result({
  "duration": 9282985000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 14
    }
  ],
  "location": "ElectronicsPageSteps.verifyTitle(String)"
});
formatter.result({
  "duration": 32273500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 18
    }
  ],
  "location": "ElectronicsPageSteps.verifyThePrice(String)"
});
formatter.result({
  "duration": 29665400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iChangeQuantity()"
});
formatter.result({
  "duration": 96502700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnAddToCartbtn()"
});
formatter.result({
  "duration": 72622400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "ElectronicsPageSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 286883600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnCrossbar()"
});
formatter.result({
  "duration": 53613700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.mouseHooverOnShoppingCart()"
});
formatter.result({
  "duration": 1505424800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnGoToCartButton()"
});
formatter.result({
  "duration": 505887800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleToSeeText(String)"
});
formatter.result({
  "duration": 35174900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "ElectronicsPageSteps.verifyTheQuantity(String)"
});
formatter.result({
  "duration": 35917700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 24
    }
  ],
  "location": "ElectronicsPageSteps.verifyTheTotalPrice(String)"
});
formatter.result({
  "duration": 28466700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 61410000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 567925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.verifyWelcomeText(String)"
});
formatter.result({
  "duration": 45417200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnRegisterTab()"
});
formatter.result({
  "duration": 420781100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 9
    }
  ],
  "location": "ElectronicsPageSteps.verify(String)"
});
formatter.result({
  "duration": 36874900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JO",
      "offset": 19
    }
  ],
  "location": "ElectronicsPageSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 88346500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sharma",
      "offset": 18
    }
  ],
  "location": "ElectronicsPageSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 107882800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jo@example.com",
      "offset": 17
    }
  ],
  "location": "ElectronicsPageSteps.iEnterEmailid(String)"
});
formatter.result({
  "duration": 104301100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "ElectronicsPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 83627400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "ElectronicsPageSteps.iEnterConfirmPossword(String)"
});
formatter.result({
  "duration": 82598800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsPageSteps.iClickOnRegister()"
});
formatter.result({
  "duration": 381149600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 20
    }
  ],
  "location": "ElectronicsPageSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 40117985500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c03a38c06da3689adfc5d6bca73f7675, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Komal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51496}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51496/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c03a38c06da3689adfc5d6bca73f7675\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:85)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.verifyRegistration(RegisterPage.java:92)\r\n\tat com.nopcommerce.demo.cucumber.steps.ElectronicsPageSteps.verifyTheMessage(ElectronicsPageSteps.java:137)\r\n\tat ✽.And Verify the Message \"Your registration completed\"(electronicstest.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ElectronicsPageSteps.clickOnContinueRegisterTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 949712600,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage Test",
  "description": "As user I want to login into nop commerce website",
  "id": "homepage-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2394542900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to selected manu successfully",
  "description": "",
  "id": "homepage-test;user-should-navigate-to-selected-manu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computers Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to computer page successfully",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnComputersTab()"
});
formatter.result({
  "duration": 540906600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.after({
  "duration": 680818100,
  "status": "passed"
});
});