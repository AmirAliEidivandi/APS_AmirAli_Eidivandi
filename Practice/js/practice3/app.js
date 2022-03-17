// object methods
// const person = {
//     firstName: "amirali",
//     lastName: "eidivandi",
// };

// function great() {
//     console.log("hello world amirali eidivandi");
// }

// person.great = great;

// person.great();

// const person = {
//     firstName: "amirali",
//     lastName: "eidivandi",
//     greet: function () {
//         console.log("hello world amirali eidivandi");
//     },
//     // getFullName() {
//     //     return `name: ${this.firstName} - lastName: ${this.lastName}`;
//     // },
//     getFullName: function () {
//         return `name: ${this.firstName} - lastName: ${this.lastName}`;
//     },
// };

// console.log(person.getFullName());

// constructor funciton

function Person(fName, lName) {
    if (!new.target) {
        throw Error('Cannot be called without the new keyword')
    }

    this.fName = fName;
    this.lName = lName;

    this.getFullName = function () {
        const { fName, lName } = this;
        return `firstName: ${fName} - lastName: ${lName}`;
    };
}

let person1 = Person("amirali", "eidivandi");
console.log(person1.getFullName());
