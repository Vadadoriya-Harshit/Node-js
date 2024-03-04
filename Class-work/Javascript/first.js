const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello from node js");
    res.end();
}).listen(9000);


//3 main module

// 1) core module
// 2) local module
// 3) third party module
 