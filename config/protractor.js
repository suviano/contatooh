exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('login')).click();
    browser.driver.findElement(by.id('login_field')).sendKeys('testemarcos');
    browser.driver.findElement(by.id('password')).sendKeys('007Fesmerda');
    browser.driver.findElement(by.name('commit')).click();
  }
};
