// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // DESTRUCTERING

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to db');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  // db.collection('Todos').find({
  //   _id: new ObjectId("59807262d51e9d1100e9aba8")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //   console.log('unable to fetch', err);
  // });
  db.collection('Users').find({name:'Raghvendra'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
    }, (err) => {
    console.log('unable to fetch', err);
  });
  // db.close();
});
//
