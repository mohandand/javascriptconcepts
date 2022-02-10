function addnums(...args){
    let sum=0;
    for(let num of args){
        sum =sum +num;
    }
    return sum
}

console.log(addnums(1,2,3));