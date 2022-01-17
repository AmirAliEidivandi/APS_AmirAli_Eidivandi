// job matching #1
// function match({ minSalary }, { maxSalaray }) {
//     if (!minSalary || !maxSalaray) throw new Error("");
//     return minSalary * 0.9 <= maxSalaray;
// }

// console.log(match({ minSalary: 120000 }, { maxSalaray: 130000 })); // true
// console.log(match({ minSalary: 120000 }, { maxSalaray: 80000 })); // false

// Crash Override
function aliasGen(firstName, lastName) {
    let fn = firstName.substr(0, 1).toUpperCase();
    let ln = lastName.substr(0, 1).toUpperCase();

    if (!firstName[fn] || !surname[ln]) {
        return "your name must start with a letter from A - Z";
    } else {
        return firstName[fn] + " " + surname[ln];
    }
}

console.log(aliasGen("Mike", "Millington"));