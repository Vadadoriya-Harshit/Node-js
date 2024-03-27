// promise chaining

const waitingmethod = new Promise((resolve,rejected)=>{
    resolve(1)
}).then((res)=>{
    console.log(res);
    return(res*10)

}).then((res)=>{
    console.log(res);
    return res* 10
}).then((res)=>{
    console.log(res);
})