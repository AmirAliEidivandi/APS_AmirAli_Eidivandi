// const user = {
//     name: 'John',
//     age: 36,
// }

// for (let value of Object.values(user)) {
//     console.log(value);
// }

// task ==================================
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}

let salaries = {
    john: 100,
    Pete: 300,
    Mary: 250,
};

console.log(sumSalaries(salaries));

// task2 ===============================
// const user = {
//     name: "John",
//     age: 36,
// };

// function count(obj) {
//     return Object.keys(obj).length;
// }

// console.log(count(user));

// ===============================
// const user = {
//     name: "John",
//     age: 36,
// }

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// iterate over with map
// let user = new Map();
// user.set("name", "John");
// user.set("age", 36);

// for (let [key, value] of user) {
//     console.log(`${key}: ${value}`);
// }

// ========================================================
// let guest = "Jane";
// let admin = "Pete";

// [guest, admin] = [guest, admin];

// console.log(`${guest} ${admin}`);

// destructure
let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

const { width: w, height: h, title } = options;

console.log(title);
console.log(w);
console.log(h);