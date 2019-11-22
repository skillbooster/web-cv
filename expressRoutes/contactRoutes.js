var express = require('express');
var contactRoutes = express.Router();

var Contact = require('../models/Contact');

contactRoutes.route('/fetch').get(function (req, resp) {
    Contact.find(function (err, contacts) {
        if(err) {
            console.log(err);
        } else {
            resp.json(contacts);
        }
    });
});

contactRoutes.route('/add').post(function (req, resp) {
    let event = new Contact(req.body);
    event.save().then(event => {
        resp.status(200).json(req.body);
    })
    .catch(err => {
        resp.status(400).send('unable to save event in database');
    })
});

module.exports = contactRoutes;