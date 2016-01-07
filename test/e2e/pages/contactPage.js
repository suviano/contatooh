var contactPage = function() {
  this.visit = function() {
    browser.get('http://localhost:3000/#/contact');
  };
  this.digitName = function(name) {
    element(by.model('contact.name')).sendKeys(name);
  };
  this.digitEmail = function(email) {
    element(by.model('contact.email')).sendKeys(email);
  };
  this.save = function() {
    element(by.css('.btn-primary')).click();
  };
  this.getMessage = function() {
    return element(by.binding('message.text')).getText();
  };
  this.selectPrimaryEmergencyOfList = function() {
    element(by.css('option[value="0"]')).click();
  };
  this.getUserLogged = function(name) {
    return element(by.id('loggedUser')).getText();
  };
  this.getTotalItemInTheList = function() {
    return element.all(by.repeater('contact in contacts')).count();
  };
  this.removeFisrtItemOfList = function() {
    element(by.repeater('contact in contacts').row(0))
      .element(by.css('.btn'))
      .click();
  };
}
module.exports = contactPage;
