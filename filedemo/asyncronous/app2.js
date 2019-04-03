const fs = require('fs');

let student1 = [{
    name:"Jitesh",
    age:9,
    gender:"male"
},
    {name:"Jitesh",
    age:9,
    gender:"male"
    }]
fs.writeFile('students.json',JSON.stringify(student1),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("data appended into the file")
    }
})

let student = {
    name:"Jitesh",
    age:9,
    gender:"male"
}
fs.readFile('students.json',(err,data)=>{
    if(err){
        throw err;
    }else{
        let read;
        read = JSON.parse(data);
        read.push(student);
        read = JSON.stringify(read);
        fs.writeFile('students.json',read,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("data appended into the file")
            }
        })
    }
})

