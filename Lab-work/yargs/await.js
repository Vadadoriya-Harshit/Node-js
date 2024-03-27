function addition(n1,n2){
   return  new Promise((resolve, reject) => {
        setTimeout(() => {
            var ans = n1 + n2;
            resolve(ans)
        }, 1000);
    })

};

async function display(){
    var res =  await addition(12,32);
    console.log(res);
};

display();