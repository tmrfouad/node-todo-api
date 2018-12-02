const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5c03d1c88968d2703de19c2011';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos :', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo :', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by id :', todo);
//   })
//   .catch(err => console.log(err));

User.findById('5c039cc8b70f439415aefc72')
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }

    console.log('User: ', JSON.stringify(user, undefined, 2));
  })
  .catch(err => console.log(err));
