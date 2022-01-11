// // local and global scope
// const person = {
//     firstName: "amirali",
//     lastName: "eidivandi",
//     fullName() {
//         // console.log(this); // local scope and show object
//         return `${this.firstName} ${this.lastName}`; // amirali eidivandi
//     },
//     hisName: () => {
//         // console.log(this); // global scope or window
//         return `${this.firstName} ${this.lastName}`; // undefined
//     },
//     sayName() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName());
//         }, 5000)
//     }
// };

// // console.log(person.fullName());
// // console.log(person.hisName());
// console.log(person.sayName());

// this user
// let user = {
//     firstName: 'amirali',
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow()
//     }
// }
// user.sayHi()
// result amirali