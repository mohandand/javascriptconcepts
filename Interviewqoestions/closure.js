/* In the above program we didn't pass the x to function logx. But still we will get  
x value as hundred if we call the logx function .So that happens because of Closure. */

var x=100;

function logx(){
    function inner(){
        x++;
        console.log(x);
        var x=200;

    }
   inner();
}
logx();