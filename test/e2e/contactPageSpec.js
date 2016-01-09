var ContactPage = new require('./pages/contactPage');

describe('Register Contacts', function () {
    var page = new ContactPage();
    beforeEach(function () {
        page.visit();
    });

    it('Should register a contact', function () {
        var random = Math.floor((Math.random() * 10000000) + 1);
        page.digitName('teste' + random);
        page.digitEmail('teste@email' + random);
        page.selectPrimaryEmergencyOfList();
        page.save();
        expect(page.getMessage()).toContain('success');
    });
});
