const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "Task3"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)

    
        // db.collection('users').insertOne({
        //     name : 'ahmed',
        //     age : 26
        // },(error , data) => {
        //     if(error){
        //         console.log('Unable to insert Data')
        //     }
            
        // })

        
        // db.collection('users').insertOne({
        //     name : 'islam',
        //     age : 26
        // },(error , data) => {
        //     if(error){
        //         console.log('Unable to insert Data')
        //     }
           
        // })


        //   db.collection ('users').insertMany(
        //    [ {
        //         name: 'islam',
        //         age: 20
        //     },
        //     {
        //         name: 'Ali',
        //         age: 27
        //     },
        //     {
        //         name: 'adel',
        //         age: 30
        //     },
        //     {
        //         name: 'reem',
        //         age: 27
        //     },
        //     {
        //         name: 'tasneem',
        //         age: 27
        //     },
        //     {
        //         name: 'zaki',
        //         age: 24
        //     },
        //     {
        //         name: 'shika',
        //         age: 27
        //     },
        //     {
        //         name: 'mahmoud',
        //         age: 24
        //     },
        //     {
        //         name: 'esraa',
        //         age: 27
        //     },
        //     {
        //         name: 'aya',
        //         age: 25
        //     }] , (error,data)=>{
        //         if(error){
        //             console.log('Unable to insert data')
        //         }
        //          console.log(data.insertedCount)
        //     } 
        // )

    //        db.collection('users').find({age:27}).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    //   })

    //     db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    //     if (error) {
    //         return console.log('error has occured')
    //     }
    //     console.log(users)
    //   })

    //   db.collection("users").updateOne({_id:mongodb.ObjectId("6755d874f2be2ee99656d6f2")},{
    //     $set:{name: "Osama" },
    //     $inc: {age: 20}
    //  }).
    //      then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})


    //  db.collection("users").updateOne({_id:mongodb.ObjectId("6755d874f2be2ee99656d6f3")},{
    //     $set:{name: "aasl" },
    //     $inc: {age: 20}
    //  }).
    //      then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})



    //  db.collection("users").updateOne({_id:mongodb.ObjectId("6755d96df07fe9fe6e9d8269")},{
    //     $set:{name: "jjjj" },
    //     $inc: {age: 20}
    //  }).
    //      then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})

   
    //  db.collection("users").updateOne({_id:mongodb.ObjectId("6755d96df07fe9fe6e9d826a")},{
    //     $set:{name: "jjjj" },
    //     $inc: {age: 20}
    //  }).
    //      then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})


    //  db.collection("users").updateOne({_id:mongodb.ObjectId("6755d874f2be2ee99656d6f2")},{
       
    //     $inc: {age: 5}
    //  }).
    //  then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})


    //   db.collection('users').updateMany({},{
    //     $inc: {age: 10}
    // }).
    // then((data1)=>{console.log(data1.modifiedCount)})
    // .catch((error)=> {console.log(error)})

        db.collection('users').deleteMany({age:37})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})
     
})    