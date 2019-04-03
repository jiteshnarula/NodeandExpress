//npm install express --save

const express = require('express');
var app = express();
app.use(express.json());

const courses= [
    {id:1,name:"Jitesh"},
    {id:parseFloat,name:"Paras"}
];

app.get("/",(req,res)=>{
    res.send("This is the root path")
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get("/getUers/:id",(req,res)=>{
    var id = req.params.id;
    for(let i =0;i<courses.length;i++){
        if(parseInt(courses[i].id)== id){
            res.send(courses[i]);
        }
    }
})

app.post('/addCourses',(req,res)=>{
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be length 4 char or more");
        return
    }else{
        const c ={
            id: courses.length+1,
            name:req.body.name
        };
        courses.push(c)
        res.send(courses)
    }
})


app.delete("/deleteUers/:id",(req,res)=>{
    let id  = req.params.id;
    for(let i = 0;i<courses.length;i++){
        if(parseInt(courses[i].id) === id){
            courses.splice(i,1);
            res.send(courses);
        }
    }
})


app.put("/updateUsers/:id",(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    }
    const course={
        id: courses.length,
        name: req.body.name
        };
        for(let i=0;i<courses.length;i++){
                     if(courses[i].id==req.params.id){
                         courses[i] = course
                         res.send(courses);
                     }
                    }  
    });

    var port  = process.env.PORT||3500;
app.listen(port,()=>{
    console.log("Server is running on port numner"+port);
})