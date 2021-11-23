//adding properties to object

const obj = {
    name:"Mohan",age:'27'
}

obj.sex = 'male';
obj["phone"] = '3413455668';
Object.freeze(obj); //frezzing properties of object so we ccant add
obj.se = 'male';
console.log(obj);

//frezzing properties of object so we ccant add

const obj1 = {
    name:"Mohan",age:'27'
}
Object.freeze(obj1);

obj1.sex = 'male';

console.log(obj1);

// if u want to modify only few properties and other cant be modified then use below
const obj3 = {
    name:"Mohan",age:'27'
}
Object.defineProperty(obj3,'sex',{
    value:'male',
    writable :false
})

obj3.name="Dandigam";
obj3.sex="female";

delete obj3.age;//to delete property and its value
console.log(obj3);



//Object.seal() allows changes to the existing properties
// of an object but you cant create new objects whereas Object.freeze() does not 
//allow both creation and modification