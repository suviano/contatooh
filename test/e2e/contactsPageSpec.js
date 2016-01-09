var ContactsPage = new require('./pages/contactsPage.js');

describe('Main page', function() {
    var page = new ContactsPage();
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
        page.removeFirstItemOfList();
        var totalAfter = page.getTotalItemInTheList();
        expect(totalAfter).toBeLessThan(totalBefore);
    });
});
