                                                                                                                                                                                                                                                                                                                                                                                                                                                const http = require('http');
console.log("server is running on port 5000")
//using if and else

const server  = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":1000});
    if(req.url ==="/"){
        res.write("Hello from root  url");
    }else if(req.url === "/api/courses"){
        res.write("Hello from api/courses");
    } 
    res.end()

}).listen(2000);
console.log("Server is running on port 2000")



// //using switch case

// var server = http.createServer(200,(req,res)=>{
//     var path = req.url;

//     switch(path){
//         case "/":
//         res.write('this is home page');
//         res.end
//         case "/about":
//         res.write("This is about page");
//         res.end
//     }

// }).listen(5000);

