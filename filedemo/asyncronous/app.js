const fs  = require('fs');
fs.writeFile('input.txt',"This is the data I am writting using asyncronous",(err)=>{
    if(err){
        console.log("There is problem in writing"+err);
    }else{
        console.log("There is a problem in write")
    }
})