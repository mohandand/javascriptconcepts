//Source : http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/

// let's create an alien object to see
var alien = {
    kind: 'alien'
  }
  
  // and a person object
  var person = {
    kind: 'person'
  }
  
  // and an object called 'zack'
  var zack = {};
  
  // assign alien as the prototype of zack
  zack.__proto__ = alien
  
  // zack is now linked to alien
  // it 'inherits' the properties of alien
  console.log(zack.kind); //=> ‘alien’
  
  // assign person as the prototype of zack
  zack.__proto__ = person
  
  // and now zack is linked to person
  console.log(zack.kind); //=> ‘person’
  

  /* As you can see the __proto__ property is very straightforward to understand and use. 
  Even if we shouldn’t use __proto__ in production code, I think that these examples
   give the best foundation to understand the JavaScript object model. */

   //You can check that one object is the prototype of another by doing:
   console.log(alien.isPrototypeOf(zack)) //=> true

   //Prototype lookups are dynamic

   //You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected.
   var person = {}

var zack = {}
zack.__proto__ = person

// zack doesn't respond to kind at this point
console.log(zack.kind); //=> undefined

// let's add kind to person
person.kind = 'person'

// now zack responds to kind
// because it finds 'kind' in person
console.log(zack.kind); //=> 'person'

/* New / updated properties are assigned to the object, not to the prototype
What happens if you update a property that already exists in the prototype? Let’s see: */

var person = {
  kind: 'person'
}

var zack = {}
zack.__proto__ = person

zack.kind = 'zack'

console.log(zack.kind); //=> 'zack'
// zack now has a 'kind' property

console.log(person.kind); //=> 'person'
// person has not being modified

//Note that the property ‘kind’ now exists in both person and zack.

/* Object.create
As explained before __proto__ is not a well supported way of assigning prototypes to objects.
 So the next simplest way is using Object.create(). This is available in ES5, but old browsers /
 engines can be shimmed using this es5-shim. */

 var person = {
  kind: 'person'
}

// creates a new object which prototype is person
var zack = Object.create(person);
  
console.log(zack.kind); // => ‘person’

//You can pass an object to Object.create to add specific properties for the new object

var zack = Object.create(person, {age: {value:  13} });
console.log(zack.age); // => ‘13’
/* Object.getPrototype
You can get the prototype of an object using Object.getPrototypeOf */

var zack = Object.create(person);
Object.getPrototypeOf(zack); //=> person

//The ‘function prototype’

function Person(name) {
  this.name = name;
}

// the function person has a prototype property
// we can add properties to this function prototype
Person.prototype.kind = ‘person’

// when we create a new object using new
var zack = new Person(‘Zack’);

// the prototype of the new object points to person.prototype
zack.__proto__ == Person.prototype //=> true

// in the new object we have access to properties defined in Person.prototype
zack.kind //=> person

//Important:

/* I've split this phrase for myself. Let's see if it's more clear this way:

1. Any function has a 'prototype' property. Why it's needed?
2. Imagine, you create an instance of a function using 'new'.
3. This instance is an object.
4. So, here is why: this object's __proto__ == the original function's 'prototype' property.

It also helped me to open the console and type this code: */

var f = function() {};

var o = new f;

f.prototype == o.__proto__;

