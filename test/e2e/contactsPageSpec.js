var ContactPage = new require('./pages/contactPage.js');

describe('Main page', function() {
  var page = new ContactPage();
  beforeEach(function() {
    page.visit();
  });

  it('Should be logged', function() {
    page.getUserLogged().then(function(text) {
      expect(text.trim().length).toBeGreaterThan(0);
    });
  });

  it('Should remove the contact list', function() {
    var totalBefore = page.getTotalItemInTheList();
    page.removeFisrtItemOfList();
    var totalAfter = page.getTotalItemInTheList();
    expect(totalAfter).toBeLessThan(totalBefore);
  });
});

describe('Sign up the contacts', function() {
  beforeEach(function() {
    page.visit();
  });

  it('Should sign up contact', function() {
    var random = Math.floor((Math.random() * 10000000) + 1);
    page.digitName('teste' + random);
    page.digitEmail('teste@email' + random);
    page.selectPrimaryEmergencyOfList();
    page.save();
    expect(page.getMessage()).toContain('success');
  });
});
