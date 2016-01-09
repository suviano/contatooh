/* global process */
var MongoClient = require('mongodb').MongoClient;

var contacts = [
    { name: "xyz1", email: 'xyz1@email.com.br' },
    { name: "xyz2", email: 'xyz2@email.com.br' },
    { name: "xyz3", email: 'xyz3@email.com.br' },
];

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test',
    function (erro, db) {
        if (erro) throw err;
        db.dropDatabase(function (err) {
            if (erro) return console.log(err);
            console.log('Bank cleaned succesfully!');
            db.collection('contacts').insert(contacts,
                function (err, inserted) {
                    if (err) return console.log(err);
                    console.log('Bank populed with success');
                    process.exit(0);
                });
        });
    }
    );
