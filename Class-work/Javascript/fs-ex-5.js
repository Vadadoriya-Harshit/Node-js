const fs = require('fs');

fs.unlink('data',()=>{
    console.log("data deleted ..!");
});
// fs.rename('data.txt',"Renamed.txt",()=>{
//     console.log("data renamed ..!");
// })