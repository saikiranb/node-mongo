// Creating a database named mydb

let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/mydb"

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  function(err, db){
    if(err){
        throw err
    }else{
        console.log('Database Created...')
        db.close()
    }
})

//In Mongodb, database and collection are not created untill they get content

