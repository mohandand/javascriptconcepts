class Mammal {
    constructor(commonName) {
        this.backbone = true;
        this.neocortex = true;
        this.name = commonName;
    }

    locomotion() {
        return "usually walking, but not always";
    }

    speak() {
        return "Some kind of mammal sound";
    }
}
class Marsupial extends Mammal {
    constructor(commonName) {
        super(commonName); // parent constructor
        this.pouch = true;
        this.aussie = "likely";
    }

    speak() {
        return "Some kind of Marsupial sound";
    }
}
mam1 = new Mammal("Kitty");
console.log(mam1.locomotion());
console.log(mam1.speak());
mars1 = new Marsupial("Taz Devil");
console.log(mars1.speak());
console.log(mars1.locomotion());
console.log(Object.keys(mars1))
Array [ "backbone", "neocortex", "name", "pouch", "aussie" ]
console.log(Object.keys(mam1))

console.log(mam1)
console.log(mam1.__proto__)
console.log(mam1.__proto__.constructor)
console.log(mars1)
console.log(mars1.__proto__)
console.log(mars1.__proto__.constructor)
console.log(mars1.__proto__.__proto__)
console.log(mars1.__proto__.__proto__.constructor)

mam1 instanceof Mammal
mars1 instanceof Mammal
mars1 instanceof Marsupial
mam1 instanceof Marsupi