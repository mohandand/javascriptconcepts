/* var myfunction = function () {
    console.log(this);
}

myfunction(); //This will give out as window object.

Inside Object literals, the this value will always refer to its own Object. */

/* 
var myobj = {name: "My thing"};

myobj.someMethod = function(){
    console.log(this);
}

myobj.someMethod()
 Here, our window Object didn’t invoke the function 
- our Object did, so this will refer to the Object that called it:  */

//Nice Example:

// // create an object
// var myObject = {name: "My thing" ,Age:27};
// var myObj2 = {name: "Other thing"};

// // create a method on our object
// myObject.someMethod = function () {
//   console.log(this);
// };

// // call our method
// myObject.someMethod();
// // Assign method to a variable
// var myFunc = myObject.someMethod; // Assigning a function!
// myFunc(); // Call it
// // Assign method to another object
// myObj2.aMethod = myObject.someMethod;
// myObj2.aMethod(); // call it


var myObj = {course: "CS351", slogan: "Code the web!"};
function myFunction() {
    console.log(this);
}
myFunction();
myFunction.apply(myObj);
myFunction.call(myObj);
myFunction.bind(myObj);//it wont print any result.
var newFunc = myFunction.bind(myObj);
newFunc();



// My Notes Examples.sa
//Implicit Binding
// var me = {
//     name:"Mohan",
//     age:27,
//     sayName: function(){
//         console.log(this.name);
//     }
// }

//me.sayName();// give out put as Mohan here me refered as this inside sayName Fun.

//Explicit Binding  here we take function which is outsode object

// var sayName = function() {
//     console.log(this.name);
// }

// var Mohan ={
//     name:"Mohan",
//     age:27
// }

//sayName.call(Mohan);//by using call we can  call sayName function in context of Mohan obje

//So first parameter is always indicate context of this and remaing parameters u can give as per function requires



