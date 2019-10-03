const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=>{
    if(err){
        throw err
    }else{
        let dbo = db.db('mydb')
        let myQuery = {mobile: '123456789'}
        let new_data = { $set : {name: 'saki', mobile: '9490470450'}}

        dbo.collection('clients').findOneAndUpdate(myQuery, new_data, (err, result)=>{
            if(err){
                throw err
            }else{
                console.log('New values updated')
                db.close()
            }
        })
    }
})