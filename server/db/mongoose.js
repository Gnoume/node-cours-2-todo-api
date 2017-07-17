var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://gnoume:pouet@ds147872.mlab.com:47872/todoapp');

module.exports = { mongoose };