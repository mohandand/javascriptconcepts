let obj = {
    name1:"Mohan",
    age:27,
    role:"SoftwareEngineer",
    dob:"22nd Aprial",
    phone:9550435378
}

var {name1 , age, role:Role, ...rest} = obj;

console.log(name1);
console.log(Role);
console.log(rest);

