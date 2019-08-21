describe('Calculator App', function () {
    let homePageUrl = 'http://juliemr.github.io/protractor-demo/';
    it('Should Have Title', function () {
        browser.get(homePageUrl);
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});