function getNumber(cb){
    setTimeout(() => {
        cb(10);
    },1000)
}

getNumber((n)=>{console.log(n)});