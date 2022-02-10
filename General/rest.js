// In below the function can take any number of arguments using rest operator
// it convert single values into a array


function addnums(...args){
    console.log(args)
    let sum=0;
    for(let num of args){
        sum =sum +num;
    }
    return sum
}

console.log(addnums(1,2,3));


/* if you want to get product of first values and sum 
of rest all values then we can write below code */

function addmul(a,b,...args){
    let mul = a*b;
    let sum=0;
    for(let num of args){
        sum =sum +num;
    }
    return [mul,sum]

}

console.log(addmul(2,2,1,1,1));