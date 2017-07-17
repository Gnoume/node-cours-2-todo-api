var os = require('os');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (os.hostname() == 'LT-0007'){
    mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');
} else {
    mongoose.connect('mongodb://gnoume:pouet@ds147872.mlab.com:47872/todoapp');
}

module.exports = { mongoose };