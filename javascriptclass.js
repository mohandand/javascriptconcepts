class Board {
    constructor(){
        this.year= 2010;
        this.make ="Mike Lab";
    }

    about() {
        return `${this.year} ${this.make} founded`
    }
}

var b1 = new Board();

console.log(b1.about());

console.log(b1.__proto__)
console.log(b1.__proto__.constructor)
console.log(b1 instanceof Board)

console.log(Board.__proto__);