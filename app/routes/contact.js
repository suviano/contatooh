function verifyAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Not Authorized');
    }
}

module.exports = function (app) {
    var controller = app.controllers.contact;
    app.route('/api/contacts')
        .get(verifyAuthentication, controller.listContacts)
        .post(verifyAuthentication, controller.saveContact);
    app.route('/api/contacts/:id')
        .get(verifyAuthentication, controller.getContact)
        .delete(verifyAuthentication, controller.removeContact);
};
