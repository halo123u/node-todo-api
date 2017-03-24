const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
   text:{
    type: String,
    require:true,
    minlength:1,
    trim: true
   },
   completed: {
    type: Boolean,
    default: false
   },
   completedAt: {
    type: Number,
    default: null
   } 
});

// var otherTodo = new Todo({
//     text:'  Edit this video   '
// });
// otherTodo.save().then((doc) =>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) =>{
//     console.log(`unable to save the todo ${e}`);
// });

//user
//email property - required, trim it type string set min length 1
//

var User = mongoose.model('User', {
    email :{
        type : String,
        required : true,
        minlength : 1,
        trim: true
    }
});

var newUser = new User ({
    email: 'example@gmail.com'
});

newUser.save().then((doc) =>{
    console.log(JSON.stringify(doc, undefined, 2 ));
}, (e) =>{
    console.log('unable to save the user ', e)
});
