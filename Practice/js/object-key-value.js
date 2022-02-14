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
const user = {
    name: "John",
    age: 36,
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));
