package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {

    @When("^I click on Computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnMenuTab("Computers");
    }


    @And("^I click on Desktop$")
    public void iClickOnDesktop() {
        new HomePage().clickOnDeskTop();
    }

    //    @And("^I select By position \"([^\"]*)\"$")
//    public void iSelectByPosition(String SortByName)  {
//        new DeskTopPage().selectSortByName(SortByName);
//
//    }
    @And("^I select By position by \"([^\"]*)\"$")
    public void iSelectByPositionBy(String sortByName) {
        new DeskTopPage().selectSortByName(sortByName);

    }

    @Then("^i should able to see all products in decending order$")
    public void iShouldAbleToSeeAllProductsInDecendingOrder() {
        new DeskTopPage().arrangeProductInDescendingOrder();
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() throws InterruptedException {
        Thread.sleep(5000);
        new DeskTopPage().clickOnAddToCart();
    }

    @And("^I should be able to see Build your own computer$")
    public void iShouldBeAbleToSeeBuildYourOwnComputer() {
        Assert.assertEquals("Text is not display", "Build your own computer", new BuildYourOwnComputerPage().VerifytheTextBuildyourowncomputer());
    }

//    @And("^I select processor$")
//    public void iSelectProcessor() {
//        new BuildYourOwnComputerPage().selectProcessor("1");
//    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor){
        new BuildYourOwnComputerPage().selectProcessor(processor);

    }

    @And("^I select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram){
        new BuildYourOwnComputerPage().selectRam(ram);

    }

    @And("^I select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd){
        new BuildYourOwnComputerPage().selectHDDRadio(hdd);

    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os){
        new BuildYourOwnComputerPage().selectOSRadiVistaPremium();

    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software){
        new BuildYourOwnComputerPage().selectSoftware();
    }

    @And("^I should able to see the price$")
    public void iShouldAbleToSeeThePrice() {
        Assert.assertEquals("Price is not verified","$1,475.00", new BuildYourOwnComputerPage().VerifythePrice() );
    }

    @And("^I should able to see message$")
    public void iShouldAbleToSeeMessage() {
        Assert.assertEquals(new BuildYourOwnComputerPage().VerifytheMessageOnTopGreenbar(), "The product has been added to your shopping cart", "Message doesnot match");
    }

    @And("^I should Click on Add to cart button$")
    public void iShouldClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @And("^I should able to mouseHover on Shopping cart and$")
    public void iShouldAbleToMouseHoverOnShoppingCartAnd() {
        new BuildYourOwnComputerPage().mouseHoverOnShoppingCart();
    }

    @And("^I click on Shopping Cart button$")
    public void iClickOnShoppingCartButton() {
        new BuildYourOwnComputerPage().clickOnShoppingCart();
    }

    @And("^I should able to close clicking on cross button$")
    public void iShouldAbleToCloseClickingOnCrossButton() {
        new BuildYourOwnComputerPage().clickOnCloseBar();
    }

    @And("^I should see message \"([^\"]*)\"$")
    public void iShouldSeeMessage(String expectedMessage){
        Assert.assertEquals("Invalid data",expectedMessage,new BuildYourOwnComputerPage().VerifytheMessageOnTopGreenbar());
    }

    @And("^I should be able to see \"([^\"]*)\" text$")
    public void iShouldBeAbleToSeeText(String expectedMessage)  {
       Assert.assertEquals("Invalid data",expectedMessage, new ShoppingCartPage().verifyTheShoppingCartText());
    }

    @And("^I should be able to update the quantity$")
    public void iShouldBeAbleToUpdateTheQuantity() throws InterruptedException {
        new ShoppingCartPage().updateQuantity();
    }

    @And("^I should be able to update the shopping cart$")
    public void iShouldBeAbleToUpdateTheShoppingCart() {
        new ShoppingCartPage().updateShoppingCart();
    }

    @And("^Verify the Total Price \"([^\"]*)\"$")
    public void verifyTheTotalPrice(String expectedMessage)  {
        Assert.assertEquals("Invalid data",expectedMessage, new ShoppingCartPage().verifyTheTotalPrice());
    }


    @And("^I click on CheckBox$")
    public void iClickOnCheckBox() {
        new ShoppingCartPage().clickOnCheckBox();
    }

    @And("^I click on Checkout Button$")
    public void iClickOnCheckoutButton() {
        new ShoppingCartPage().clickOnCheckOutButton();
    }

    @And("^Verify Welcome text \"([^\"]*)\"$")
    public void verifyWelcomeText(String expectedMessage) {
        Assert.assertEquals("Invalid data",expectedMessage, new CheckOutAsGuest().VerifytheWelComeText());
    }

    @And("^I click on As Guest Button$")
    public void iClickOnAsGuestButton() {
        new CheckOutAsGuest().clickOnAsGuestButton();
    }

    @And("^i enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstName) {
        new BillingCheckOutPage().enterBillingFirstName(firstName);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastName) {
        new BillingCheckOutPage().enterBillingLastName(lastName);

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new BillingCheckOutPage().enterBillingEmailAddress(email);

    }


    @And("^I select Country \"([^\"]*)\"$")
    public void iSelectCountry(String country) {
        new BillingCheckOutPage().selectCountryFromDropDown("233");

    }

    @And("^I select State$")
    public void iSelectState() {
    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String city) {
        new BillingCheckOutPage().enterBillingCity(city);

    }

    @And("^I enter postal code \"([^\"]*)\"$")
    public void iEnterPostalCode(String postCode) {
        new BillingCheckOutPage().enterBillingZipcode(postCode);

    }

    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String phonenumber) {
        new BillingCheckOutPage().enterBillingPhoneNumber(phonenumber);

    }

    @And("^I enter address  \"([^\"]*)\"$")
    public void iEnterAddress(String address) {
        new BillingCheckOutPage().enterBillingAddress(address);
    }

    @And("^I click on continue$")
    public void iClickOnContinue() throws InterruptedException {
        Thread.sleep(3000);
        new BillingCheckOutPage().clickOnCheckOutButton();
    }

    @And("^I click on Radio Button Next Day Air$")
    public void iClickOnRadioButtonNextDayAir() {
        new ShippingMethodCheckoutPage().clickOnRedioButtonBextDayAir();
    }

    @And("^I click on continuebutton$")
    public void iClickOnContinuebutton() {
        new ShippingMethodCheckoutPage().clickOnContinue();
    }

    @And("^I select Radio Button Credit Card$")
    public void iSelectRadioButtonCreditCard() {
        new PaymentMethodCheckOut().clickOnCreditCard();
    }

    @And("^I click on continuetab$")
    public void iClickOnContinuetab() {
        new PaymentMethodCheckOut().clickOnContinue();
    }

    @And("^I select \"([^\"]*)\"$")
    public void iSelect(String cardtype) {
        new PaymentCheckOut().selectCardTypeFromDropDown("MasterCard");

    }

    @And("^I enter cardholder name \"([^\"]*)\"$")
    public void iEnterCardholderName(String cardHolderName) {
        new PaymentCheckOut().enterCardHolderName(cardHolderName);

    }

    @And("^I enter card number \"([^\"]*)\"$")
    public void iEnterCardNumber(String cardNumber) {
        new PaymentCheckOut().enterCardNumber(cardNumber);

    }

    @And("^I enter month \"([^\"]*)\"$")
    public void iEnterMonth(String month) {
        new PaymentCheckOut().selectExpiryMonthFromDropDown("5");
    }

    @And("^I enter Year \"([^\"]*)\"$")
    public void iEnterYear(String year) {
        new PaymentCheckOut().selectExpiryYearFromDropDown("2024");

    }

    @And("^I enter cardcode \"([^\"]*)\"$")
    public void iEnterCardcode(String cardCode) {
        new PaymentCheckOut().enterCardCode(cardCode);
    }

    @And("^I click on Continuebtn$")
    public void iClickOnContinuebtn() {
        new PaymentCheckOut().clickOnContinueButton();
    }

    @And("^Verify Payment Method is \"([^\"]*)\"$")
    public void verifyPaymentMethodIs(String expectedMethod) {
        Assert.assertEquals("method is not display", expectedMethod, new ConfirmOrderPage().VerifyCreditCardPaymentMethod());

    }

    @And("^Verify Shipping Method is \"([^\"]*)\"$")
    public void verifyShippingMethodIs(String expectedCard) {
        Assert.assertEquals("method is not display", expectedCard, new ConfirmOrderPage().verifyShippingMethod());

    }

    @And("^Verify Total is \"([^\"]*)\"$")
    public void verifyTotalIs(String expectedTotal) {
        Assert.assertEquals("method is not display", expectedTotal, new ConfirmOrderPage().verifytheTotalPrice());


    }

    @And("^I click on comfirm$")
    public void iClickOnComfirm() {
        new ConfirmOrderPage().clickOnConFirm();
    }

    @And("^Verify the text \"([^\"]*)\"$")
    public void verifyTheText(String expectedText) {
        Assert.assertEquals("Text is not display", expectedText, new CompletedCheckoutPage().verifyThankYouText());

    }

    @And("^Verify the message \"([^\"]*)\"$")
    public void verifyTheMessage(String expectedMessage) {
        Assert.assertEquals("Text is not display", expectedMessage, new CompletedCheckoutPage().verifySucessOrderText());

    }

    @And("^Click on continue$")
    public void clickOnContinue() {
        new CompletedCheckoutPage().clickOnContinue();
    }


    @And("^Verify \"([^\"]*)\"$")
    public void verify(String expectedText) {
        Assert.assertEquals("welcome msg is not display", expectedText, new HomePage().verifyWelComeText());
    }
}
