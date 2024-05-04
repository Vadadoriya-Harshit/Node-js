const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/apitable",{useNewUrlParser:true}).then(()=>{
    console.log("database connected ") })
    .catch((err)=>{
        console.log("error connecting database",err);
});


