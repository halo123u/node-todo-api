const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to connect to the mongodb server.');
    }
    console.log('Connected to mongdb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58d46cb54fb9499a423bcf52')},
    //     {
    //         $set: {
    //             completed:true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result)=>{
    //     console.log(result);
    // });

        db.collection('Users').findOneAndUpdate({
            _id : new ObjectID('58d329870beb4425188b87a6')
        },{
            $set: {
                name: 'jessica'
            },
            $inc: {
                age: 1
            }
        },{
            returnOriginal: false
        }).then((results) =>{
            console.log(results);
        })
    
    //  db.close();
});