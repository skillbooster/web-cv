var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contact = new Schema({
    name: {
      type: String,
    },
    mail: {
      type: String,
    },
    offer: {
      type: String,
    },
    date: {
      type: String,
    }
});

module.exports = mongoose.model('Contact', Contact);