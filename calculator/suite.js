/**
 * End-to-end test suite for testing simple Calculator app.
 */
describe('Calculator App', function () {
    let homePageUrl = 'http://juliemr.github.io/protractor-demo/';

    /**
     * Verifies page title.
     */
    it('Should Have Title', function () {
        browser.get(homePageUrl);
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    /**
     * Verifies basic addition functionality.
     */
    it('Should Sum Two Numbers', function () {
        browser.get(homePageUrl);
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(10);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).toEqual('15');
    });
});