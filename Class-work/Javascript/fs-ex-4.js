const fs = require('fs');


fs.open('data2.txt',"w",()=>{
    console.log("File opened....!");
})