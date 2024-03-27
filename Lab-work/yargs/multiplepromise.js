const multiplePromise = new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved(1);
    },1000);
})
multiplePromise.then((res)=>{
    console.log(res);
    return res *10;
})
multiplePromise.then((res)=>{
    console.log(res);
    return res *100;
})