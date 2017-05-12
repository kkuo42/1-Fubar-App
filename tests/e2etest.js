var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var test = require('selenium-webdriver/testing');
var assert = require('assert');

const mochaTimeOut = 30000;

var driver; 

test.before(function() {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder().forBrowser('chrome').build();
})

test.describe("Searching webdriver online", function() {
    test.it("Searches webdriver online", function() {
        this.timeout(mochaTimeOut);
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 5000);
        assert.equal(true, true);
    });
});

test.describe("Loading landing page", function() {
    test.it("Loads landing page", function() {
        this.timeout(mochaTimeOut);
        driver.get('http://localhost:3000/');
        driver.findElement(By.id('top-page'))
        assert.equal(true, true);
    });
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});