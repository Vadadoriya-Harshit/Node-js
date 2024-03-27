const yargs = require('yargs');
const fs = require('fs');

const Data ="Data.json";

if(!fs.existsSync(Data))
{
    fs.writeFileSync(Data,"[]");
}

//fetch data
const loadData = ()=>{
    const todos = fs.readFileSync(Data);
    return JSON.parse(todos);
};

//save todo

const saveTodos = (todo)=>{
    const newData = JSON.stringify(todo)
    fs.writeFileSync(Data,newData);
};

yargs.command({
    command:"add",
    describe:"Add a new todo",
    builder:{
        title:{
            type:"string"
        }
    },handler:(argv)=>{
        const todos = loadData();
        todos.push({title:argv.title});
        saveTodos(todos);
        console.log("data added successfully...!");
    }
}).command({
    command:"List",
    describe:"view all todos",
    handler: function () {
        const todos = loadData();
        console.log("Your Todos:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo.title}`);
        });
    }
})

// // yargs.parse();
// yargs.argv;
// function loadingData(callback)
// {
//     setTimeout(() => {
//         callback();
//     }, 2000);
  
// };
// function process()
// {
// console.log("Loading Data...");
// };
// loadingData(process);
// ---------------------------without promise
// let num1 = 10;
// let num2 = 20;


// let  num3 =0;
// setTimeout(() => {
//     num3 =num1+num2;
//     console.log("answer is :-",num3);
// }, 2000);

// console.log(num3+100);
// --------------------------------with promise
// let num1 = 10;
// let num2 = 20;

// let waitingData = new Promise((resolve,rejected)=>
// {
// setTimeout(() => {
//    let num3 =num1+num2;
//     console.log("answer is :-",num3);
//     resolve(num3);
// }, 2000);
// })
// waitingData.then((num3)=>{
// console.log(num3+100);
// })


