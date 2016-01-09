var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function () {
        console.log('Mongoose! Connected in ' + uri);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose! Disconnected from ' + uri);
    });

    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! Error the connection: ' + erro);
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose! Disconnected by end of aplication');
            process.exit(0);
        });
    });
}
