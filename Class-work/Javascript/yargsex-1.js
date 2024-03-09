const yargs = require("yargs");

yargs.command({ 
    command: 'add', 
    describe: 'Adds two number', 
    builder: { 
        firstNumber: { 
            type: 'number'     
        }, 
        secondNumber: {   
            type: 'number'
        } 
    },
    handler:()=>{
        console.log(argv.firstNumber,argv.secondNumber)
    }
});

console.log(yargs.argv);