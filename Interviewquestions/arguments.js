// let a = () =>{return arguments} //arguments dont bind very well with arrow function.

let a = function(){
    return arguments;
}

console.log(a('hi','howru'));

let b = (...n) =>{return n} 

console.log(b('hello'));