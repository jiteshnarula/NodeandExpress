var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Heeeeeeeeeeeeeeeeeehe");
    res.end();
}).listen(3000);