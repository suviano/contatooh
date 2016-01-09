module.exports = function (app) {

    var sanitize = require('mongo-sanitize');
    var Contact = app.models.contact;
    var controller = {};

    controller.listContacts = function (req, res) {
        console.log('ListContacts');
        Contact.find().populate('emergency').exec()
            .then(function (contacts) {
                res.json(contacts);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            });
    };

    controller.getContact = function (req, res) {
        var _id = req.params.id;
        console.log('Get Contact ' + _id);
        Contact.findById(_id).exec()
            .then(function (contact) {
                if (!contact) throw new Error('Contact not found');
                res.json(contact);
            }, function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            });
    };

    controller.removeContact = function (req, res) {
        var _id = sanitize(req.params.id);
        console.log('Remove contact ' + _id);
        Contact.remove({
            "_id": _id
        }).exec()
            .then(function () {
                res.end();
            }, function (erro) {
                return console.error(erro);
            });
    };

    controller.saveContact = function (req, res) {
        var _id = req.body._id;

        var contact_data = {
            "name": req.body.name,
            "email": req.body.email,
            "emergency": req.body.emergency || null
        }

        if (_id) {
            Contact.findByIdAndUpdate(_id, contact_data).exec()
                .then(
                    function (contact) {
                        res.json(contact);
                    },
                    function (erro) {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                    );
        } else {
            console.log('Saving a new contact');
            var contact = new Contact(contact_data);
            contact.save(function (erro, contact) {
                if (erro) {
                    res.status(500).end();
                    console.log(erro);
                } else {
                    res.json(contact);
                }
            });
        }
    };

    return controller;
};
