let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},  function (err,db){
    if(err){
        throw err
    }else{
        var dbo = db.db('mydb')
        dbo.createCollection('clients', function(err,res){
            if(err){
                throw err
            }else{
                console.log('Collection Created')
                db.close()
            }
        })
    }
})