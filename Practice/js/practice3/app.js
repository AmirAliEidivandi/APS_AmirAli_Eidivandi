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

const person = {
    firstName: "amirali",
    lastName: "eidivandi",
    greet: function () {
        console.log("hello world amirali eidivandi");
    },
    // getFullName() {
    //     return `name: ${this.firstName} - lastName: ${this.lastName}`;
    // },
    getFullName: function () {
        return `name: ${this.firstName} - lastName: ${this.lastName}`;
    },
};

console.log(person.getFullName());