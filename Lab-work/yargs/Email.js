const validator = require("validator");

function testForm(email)
{
    if(validator.isEmail(email))
    {
     console.log(`${email} is a valid email address`);
    }
    else{
        console.log(`${email} is NOT a valid email address`);
    }
};

testForm("abc@gmail.com")