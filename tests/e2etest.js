var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until
    username = "kkuo42"
    accessKey = "c03f2778-8165-49a9-9274-bb27dc98e284";

var test = require('selenium-webdriver/testing');
var assert = require('assert');

// can't run end2end tests on something that isn't deployed yet
if(process.env.NODE_ENV === 'staging') {
    return;
}

const mochaTimeOut = 30000;

var driver;
var site;

test.before(function() {
    this.timeout(mochaTimeOut);
    if(process.env.NODE_ENV === 'production') {
        console.log("USING SAUCELABS");
        driver = new webdriver.Builder().
            withCapabilities({
                'browserName': 'chrome',
                'platform': 'Windows XP',
                'version': '43.0',
                'username': username,
                'accessKey': accessKey
            }).
            usingServer("http://" + username + ":" + accessKey +
                        "@ondemand.saucelabs.com:80/wd/hub").
            build();
        site = 'https://cse112-1-staging.herokuapp.com/';
    }
    else {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        site = 'http://localhost:3000/';
    }
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
        driver.get(site);
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