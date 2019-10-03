const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true}, function(err, db){
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        let query = { mobile: '8639444412'}
        dbo.collection('clients').find(query).toArray(function (err,result){
            if(err){
                throw err
            }else{
                console.log(result)
                db.close()
            }
        })
    }
})