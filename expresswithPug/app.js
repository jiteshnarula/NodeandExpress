//intstall express and pug both


const express =require('express');
const path = require('path');
const app =express();

//loading the view
app.set('views',path.join(__dirname,"views"));
app.set('view engine','pug');


app.get('/',(req,res)=>{
    let emp=[{
        empid:1001,
        empName:'ankit',
        empDep:'IT',
        empSalary:4000
    },
    {
        empid:1005,
        empName:'ali',
        empDep:'sales',
        empSalary:4000

    }
];
    res.render('index',{
        title:"This is my index page",
        empData : emp
    })
})


app.get("/home",(req,res)=>{
    res.render('home',{
        myData:"This is my Home page"
    })
})




 var port = process.env.PORT||2000;
app.listen(port,()=>{
    console.log("server started")
})