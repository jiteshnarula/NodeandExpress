//using mongo client
//npm install mongodb --save

var mongodb  = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
mongoclient.connect(url,{ useNewUrlParser: true },(err,client)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection established",url);
        var db = client.db("mobile");
        var collection = db.collection('mobileCollection');

        collection.find({}).toArray((err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
     

    }
})

 