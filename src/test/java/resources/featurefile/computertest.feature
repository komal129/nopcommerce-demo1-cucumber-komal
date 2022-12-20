@regression
Feature: Computer Test
  As user I want to explore Computer page of nop commerce website

  @smoke
  Scenario: User Should Navigate To Computer Page Successfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktop
    Then i should able to see all products in decending order

  @sanity
  Scenario Outline: User should add product to shopping cart sucessfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktop
    And I select By position by "Name: A to Z"
    And I click on add to cart
    And I should be able to see Build your own computer
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I should able to see the price
    And I should Click on Add to cart button
    And I should see message "The product has been added to your shopping cart"
    And I should able to close clicking on cross button
    And I should able to mouseHover on Shopping cart and
    And I click on Shopping Cart button
    And I should be able to see "Shopping cart" text
    And I should be able to update the quantity
    And I should be able to update the shopping cart
    And Verify the Total Price "$2,950.00"
    And I click on CheckBox
    And I click on Checkout Button
    And Verify Welcome text "Welcome, Please Sign In!"
    And I click on As Guest Button
    And i enter firstname "John"
    And I enter lastname "Smith"
    And I enter email "smith@example.com"
    And I select Country "United Kingdom "
    And I select State
    And I enter city "London"
    And I enter address  "45,Oxford Street"
    And I enter postal code "W4 2XZ"
    And I enter phone number "025556556"
    And I click on continue
    And I click on Radio Button Next Day Air
    And I click on continuebutton
    And I select Radio Button Credit Card
    And I click on continuetab
    And I select "Master Card"
    And I enter cardholder name "John Smith"
    And I enter card number "5555555555554444"
    And I enter month "May"
    And I enter Year "2024"
    And I enter cardcode "123"
    And I click on Continuebtn
    And Verify Payment Method is "Credit Card"
    And Verify Shipping Method is "Next Day Air"
    And Verify Total is "$2,950.00"
    And I click on comfirm
    And Verify the text "Thank you"
    And Verify the message "Your order has been successfully processed!"
    And Click on continue
    And Verify "Welcome to our store"
    Examples:
      | processor | ram | hdd                | os                            |software                  |
      | 1         | 5   | 400 GB [+$100.00]  | Vista Premium [+$60.00]       |Total Commander [+$5.00]  |
