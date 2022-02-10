function add(a,b){
    return a+b;
}

console.log(add(...[2,3]));

//if we send args as array it wwill fail but if we use spread operator
//Basically it will spread array elments as individual arguments.