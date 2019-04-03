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

        var updateCriteria = {$set:{mobileName:"Motorola"}};
        var selectionCriteria={mobID:102};

        db.collection("mobileCollection").updateMany(selectionCriteria,updateCriteria,(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("update success"+result)
            }
        })
        client.close()
       
    }
})