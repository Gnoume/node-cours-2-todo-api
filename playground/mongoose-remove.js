const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then ((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '596c461e47a64b5bf72f0631'}).then((todo) => {
})

Todo.findByIdAndRemove('596c461e47a64b5bf72f0631').then((todo) => {
    console.log(todo);
})