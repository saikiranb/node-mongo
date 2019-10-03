const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, db){
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        let mySort = {name: 1}
        dbo.collection('clients').find().sort(mySort).toArray(function(err, result){
            if(err){
                throw err
            }else{
                console.log(result)
                db.close()
            }
        })
    }
})