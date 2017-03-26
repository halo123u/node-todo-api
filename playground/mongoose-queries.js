const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '58d7110054a92221887619f511';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id : id 
// }).then((todos) =>{
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id : id 
// }).then((todo) =>{
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if (!todo){
//         return console.log('id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) =>{
//     console.log(e);
// })

User.findById('58d58e5cf5fb590c2c0bffed').then((user) =>{
    if(!user){
      return  console.log('No user found');
    }
    console.log('User ', user);
}, (e) =>{
    console.log(e);
})
