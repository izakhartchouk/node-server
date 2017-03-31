var mongoose = require('mongoose');
var dbUrl = 'mongodb://heroku_04p5kvr2:welcome_2u@ds147480.mlab.com:47480/heroku_04p5kvr2';

mongoose.connect(dbUrl);

// Close the Mongoose connection on Control+C
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected');
        process.exit(0);
    });
});

require('../models/employee');
require('../models/team');