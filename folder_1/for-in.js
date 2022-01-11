// const user = {
//     name: 'amirali',
//     age: 20,
//     isAdmin: false,
// }

// for (let key in user) {
//     alert(key)
//     alert(user[key])
// }
// result => name: amirali => age: 20 => isAdmin: false

// object like na object
// let codes = {
//     '46': 'uk',
//     '174': 'usa',
//     '53': 'germany',
//     '3': 'iran'
// }
// for (let key in codes) {
//     alert(key)
// }
// result => 3 > 46 > 53 > 174

// check for emptiness
// let schedule = {}

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true
// }
// console.log(isEmpty(schedule)); // true
// schedule['8:30'] = 'get up'
// console.log(isEmpty(schedule)); // false

// sum objects item
// let salaries = {
//     amirali: 100,
//     ali: 200,
//     reza: 300,
// }
// let sum = 0;
// for (let salary in salaries) {
//     sum += salaries[salary]
// }
// console.log(sum); // result 600

// multiple objects item
// let menu = {
//     width: 200,
//     height: 400,
//     title: "my Menu",
// };

// function multiplyNumberic(menu) {
//     for (let item in menu) {
//         if (typeof menu[item] === "number") {
//             menu[item] *= 2;
//             console.log(menu[item]);
//         }
//     }
// }

// multiplyNumberic(menu);
// 400 and 800