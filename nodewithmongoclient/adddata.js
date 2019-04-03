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

        var mobOne = {mobID:102,mobileName:"Apple",mobileCost:100000};
        var mobTwo = {mobID:103,mobileName:"MI",mobileCost:1000};

        collection.insertMany([mobOne,mobTwo],(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Inserted Successfully")
            }
        })
    }
})


// var mongodb  = require('mongodb');
// var mongoclient = mongodb.MongoClient;
// var url = "mongodb://localhost:27017/";
// mongoclient.connect(url,(err,client)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Connection established "+url);
        
//         var db = client.db('mobilepractice');
//         var collection  = db.collection("mobile");
//         var mobOne = {id:1001,mobName:"Nokia"};
//         var mobTwo = {id:1002,mobName:"Samsung"};
//         collection.insertMany([mobOne,mobTwo],(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
//         })
        
//     }
// })