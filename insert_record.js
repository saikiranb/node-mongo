let MongoClient = require('mongodb').MongoClient

let url = 'mongodb://localhost:27017/'

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err,db){
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        let myObj = {name: 'PK', mobile:'9971950250'}
        dbo.collection('clients').insertOne(myObj, function(err, res){
            if(err){
                throw err
            }else{
                console.log('1 entry inserted')
                db.close()
            }
        })
    }
})