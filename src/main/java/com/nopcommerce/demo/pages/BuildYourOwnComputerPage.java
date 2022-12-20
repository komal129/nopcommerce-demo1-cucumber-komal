package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputer;
    @CacheLookup
    @FindBy(name = "product_attribute_1")
    WebElement processorName;
    @CacheLookup
    @FindBy(name = "product_attribute_2")
    WebElement ram;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement HDD;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement OS;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement software;
    @CacheLookup
    @FindBy(xpath = "//span[text() = '$1,475.00']")
    WebElement price;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCart;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[5]/div[1]/p[1]")
    WebElement message;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[5]/div[1]/span[1]")
    WebElement closeBar;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Shopping cart')]")
    WebElement shoppingCart;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Go to cart')]")
    WebElement clickCart;

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }
    public String VerifytheTextBuildyourowncomputer() {
        log.info("Verify Text Build your own computer " + buildYourOwnComputer.toString());
        return getTextFromElement(buildYourOwnComputer);
    }

    public void selectProcessor(String text) {
        log.info("select processor " + text + " to select processor field " + processorName.toString());
        selectByValueFromDropDown(processorName, text);
    }

    public void selectRam(String text) {
        log.info("Select Ram" + text + " select ram field " + ram.toString());
        selectByValueFromDropDown(ram, text);
    }

    public void selectHDDRadio(String text) {
        log.info("Select HDD Radio Button" + HDD.toString());
        clickOnElement(HDD);
    }

    public void selectOSRadiVistaPremium() {
        log.info("Select OS Vista Primium" + OS.toString());
        clickOnElement(OS);
    }

    public void selectSoftware() {
        log.info("Select Software " + software.toString());
        clickOnElement(software);
    }

    public String VerifythePrice() {
        log.info("Verify Price" + price.toString());
        return getTextFromElement(price);
    }

    public void clickOnAddToCartButton() {
        log.info("Click on Addcart Button" + addToCart.toString());
        clickOnElement(addToCart);
    }

    public String VerifytheMessageOnTopGreenbar() {
        log.info("Verify message on greenbar" + message.toString());
        return getTextFromElement(message);
    }

    public void clickOnCloseBar() {
        log.info("Click on closebar" + closeBar.toString());
        clickOnElement(closeBar);
    }

    public void mouseHoverOnShoppingCart() {
        log.info("Mouse hoover on shopping cart" + shoppingCart.toString());
        mouseHoverToElement(shoppingCart);
    }

    public void clickOnShoppingCart() {
        log.info("Click on shopping cart" + clickCart.toString());
        clickOnElement(clickCart);
    }
}
