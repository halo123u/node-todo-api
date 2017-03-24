const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to connect to the mongodb server.');
    }
    console.log('Connected to mongdb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('58d323342b95fd234c1aba92')
    // }).toArray().then((docs) =>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // });

        //  db.collection('Todos').find().count().then((count) =>{
        //     console.log(`todos count: ${count}`);
            

        // }, (err) => {
        //     console.log('Unable to fetch todos');
        // });

        db.collection('Users').find({name: 'mike'}).toArray().then((docs)=>{
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        });


    //  db.close();
});