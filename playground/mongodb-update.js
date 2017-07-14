//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDb server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59670a050fdb775ab33273b0')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then ((result)=> {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5967058820574420ac596fef')
    }, {
        $set: { name : 'Alex' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then ( (result)=> {
        console.log(result);
    });

    db.close();
});