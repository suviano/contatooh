/* global browser */
/* global by */
/* global element */
var contactsPage = function() {
  this.visit = function() {
    browser.get('http://localhost:3000/#/contacts');
  };
  this.getUserLogged = function(name) {
    return element(by.id('loggedUser')).getText();
  };
  this.getTotalItemInTheList = function() {
    return element.all(by.repeater('contact in contacts')).count();
  };
  this.removeFirstItemOfList = function() {
    element(by.repeater('contact in contacts').row(0))
      .element(by.css('.btn'))
      .click();
  };
}
module.exports = contactsPage;
