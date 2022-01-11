// const test = {
//     prop: 20,
//     func() {
//         console.log(this.prop);
//     }
// }

// test.func()
// result 20

// this in function
// function makeUser() {
//     return {
//         name: 'amirali',
//         ref() {
//             return this
//         }
//     }
// }
// let user = makeUser()
// console.log(user.ref().name);

// show name in console
// let user = {
//     name: 'john',
//     age: 30,
//     sayHi() {
//         console.log(this.name);
//     }
// }

// user.sayHi()

// let user = {
//     name: "amirali",
//     age: 20,
//     sayHi() {
//         console.log(user.name);
//     },
// };

// let admin = user;
// user = null;
// admin.sayHi();
// typeError: cannot read properties of null(reading 'name')

// what is the result of accessing its ref? why?
// function makeUser() {
//     return {
//         name: 'amirali',
//         ref: this
//     }
// }
// let user = makeUser()
// console.log(user.ref.name);
// undefined
// bug fix 


// solotion
// function makeUser() {
//     return {
//         name: 'amirali',
//         ref() {
//             return this
//         }
//     }
// }
// let user = makeUser()
// console.log(user.ref().name);
// bug fix: amirali


// there's a ladder object that allows to go up and down:
let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        alert(this.step)
        return this
    }
}
ladder
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0