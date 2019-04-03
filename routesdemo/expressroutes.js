//npm install express --save
const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("THis is root path");
})

app.get("/about",(req,res)=>{
    res.send("This is about path");
})


app.listen(5000,()=>{
    console.log("server is running on port 50000");
})