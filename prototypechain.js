var myObjA = {stuff: "Think about stuff", number: 42};
var myObjB = {course: "CS3520", students: 34};
var myObjC = {music: "Metal Baroque", guitarist: "JS Bach"};
myObjB.__proto__ = myObjA;
myObjC.__proto__ = myObjB;
// console.log(myObjC); // Doesn't look different 
// console.log(myObjC.number); // How?
// console.log(myObjC)
// console.log(myObjC.__proto__)
// console.log(myObjC.__proto__.__proto__)

for (var prop in myObjC) {
    console.log(`${prop} has value ${myObjC[prop]}`);
}
console.log("Keys for myObjC:");
console.log(Object.keys(myObjC));
console.log(Object.getOwnPropertyNames(myObjC));
myObjC.number = 3;
myObjC.course = "Web Dev";
console.log(myObjC)
console.log(myObjC.__proto__)
console.log(myObjC.__proto__.__proto__)

//for...in loops: traverses all enumerable properties and its prototype chain
