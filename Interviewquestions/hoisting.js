foo();

function foo(){
    console.log('hai');
}

/* In the above program we invoked the function before it defined. 
But it still works. The reason behind this is hoisting. */

foo();

var foo = function(){
    console.log('hai');
}

/* We got the above error because in the 
javascript hoisting process only declaration will happen or hoisted and assignments don't get hoisted. 
and so var foo is declared as variable but not as function.
So we got an error.But where as in the first example we didn't declare a variable instead we directly
 called it so it worked.  as let and const dont hoisted we will get errors if we use them we get error
 as function didnt intialized please check below for that*/

 foo();

 var foo = function(){
     console.log('hai');
 }