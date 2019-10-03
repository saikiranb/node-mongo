const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=> {
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        let myDelete = {mobile: '9971950250'}
        dbo.collection('clients').findOneAndDelete(myDelete, (err, result)=>{
            if(err){
                throw err
            }else{
                console.log('1 record deleted')
                db.close()
            }
        })
    }
})