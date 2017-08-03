const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = "598229b12dd2cf493ceb1854";
//
// if (!ObjectID.isValid(id)) {
//   console.log('not valid ID:', id);
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// });

var id = "5981b5a48a95f52459d86cc8";

User.findById(id).then((res) => {
  if (!res) {
    return console.log('user not found');
  }
  console.log('User:-', res);
}).catch((e) => console.log(e));
