const MongoClient = require('mongodb')
const url = "mongodb://localhost:27017"

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err,db) => {
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        dbo.collection('clients').find({}).toArray(function(err, res){
            if(err){
                throw err
            }else{
                console.log(res)
                db.close()
            }
        })
    }
})