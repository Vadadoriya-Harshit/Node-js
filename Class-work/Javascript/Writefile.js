const fs = require('fs');

// fs.writeFile('data.txt',"Hello new filr",(err)=>{
// console.log("data added successfully...!");

// });
fs.appendFile('data.txt',"my inbuilt module",(err)=>{
    console.log("data added successfully...!");
    
    });