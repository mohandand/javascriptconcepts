const person = {
    name:"Mohan",
    sayName: function(){
        console.log(`hi ${this.name}`)
    }
}

//person.sayName();

const say = person.sayName;
//say();// its same as window.name

const say1 = person.sayName.bind(person);
//say1(); 

const person1 = {
    name1:"Mohan",
    sayName1: () => console.log(`hi ${this.name1}`)
}

const say2 = person1.sayName1;
say2();  //it work even we use arrow function.