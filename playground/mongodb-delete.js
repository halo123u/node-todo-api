const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to connect to the mongodb server.');
    }
    console.log('Connected to mongdb server');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then((results) =>{
    //     console.log(results);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('58d32579f2570d31804b7891')}).then((results) =>{
        console.log(results);
    });
   
    //  db.close();
});