// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // DESTRUCTERING

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to db');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
  // db.close();
});
