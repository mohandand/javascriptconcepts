// const age=100;
// if(age>12){
//         let years = age*2;
//         console.log(`years : ${years}`);
// }

function run(){
    var a=100;
    if(a>10){
        console.log(a);
        var c =20;
        let b = 10;
    }
    console.log(c)
    //console.log(b) //errror as b is type let and which will have only block level scope
}
run();
//console.log(a);  //console.log(b) //error as a is type var and which will have only function level scope