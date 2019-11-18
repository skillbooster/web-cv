// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    //const eventRoutes = require('./expressRoutes/eventRoutes');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(cors());

    //app.use('/events', eventRoutes);

    var port = process.env.PORT || 4000;

    var server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });