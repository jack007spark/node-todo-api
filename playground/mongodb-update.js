// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // DESTRUCTERING

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to db');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("5980bd76f7a4c3e0912b9c93")
  }, {
    $set: {name: 'raghu'}
    }, {
    $inc: {age: 5}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
