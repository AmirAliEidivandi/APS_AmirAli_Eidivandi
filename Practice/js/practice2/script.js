// const array = ["A", "B", "C", "D", ["E", "F"]];
// const person = {
//     name: "amirali",
//     age: 25,
//     favoriteFood: "pizza",
//     address: {
//         street: "123 main St",
//         city: "isfahan",
//     },
// };

// const [first, second, third, fourth, [fifth, sixth]] = array

// console.log(fifth, sixth);

// const {
//     address: { street: st, city, zipcode = "4398749" },
// } = person;
// const { street } = address;
// console.log(st, city, zipcode);

// const { name: firstName, age } = person;

// console.log(firstName);
// console.log(age);

// function addAndMultiply(a, b) {
//     return [a * b, a + b];
// }

// const [result1, result2] = addAndMultiply(2, 3);
// console.log(result1);
// console.log(result2);

// const [first, second, , third, fourth, five] = array;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(five);

// function nameToFirstNameAndLastName(fullName) {
//     const [firstName, lastName] = fullName.split(" ");
//     return {
//         firstName: firstName,
//         lastName: lastName,
//     };
// }

// const { firstName, lastName } = nameToFirstNameAndLastName("amirali eidivandi");
// console.log(firstName);
// console.log(lastName);

// function addAndMultiply({a, b = 38}) {
//     const a = options.a;
//     const b = options.b;
//     const {a, b} = options
//     return [a * b, a + b]
// }

// const [a, b] = addAndMultiply({a: 2});
// console.log(a);
// console.log(b);

// spread ...
// const numArray = [2, 3, 4]

// function sum(multiply, ...numbers) {
//     console.log(multiply);
//     console.log(numbers);
//     return multiply * numbers.reduce((num, sum) => num + sum)
// }

// sum(...numArray)

// const person2 = { ...person };
// person.name = 'mohammad'
// console.log(person2); => amirali
// console.log(person); => mohammad

// enhanced objects litrails
// const propertyName = 'job'
// const firstName = 'amirali';
// const ageProperty = 1;
// const age = 20;
// function sayHi() {
//     console.log('hello');
// }

// const person = {
//     [propertyName]: firstName,
//     [`age${ageProperty}`]: age,
//     sayHi,
// }

// // person[propertyName] = firstName

// console.log(person);

// function fullname(sayHi = "hi", firstName = "amirali", lastName = "eidivnaid", { fullName = "amirali eidivandi" } = {}) {
//     console.log(`${sayHi} ${firstName} ${lastName}: ${fullName}`);
// }

// fullname();

function Animal(name, age, userName) {
    this.name = name;
    this.age = age;
    this.userName = userName;
}

Animal.prototype.info = function () {
    const { name, age, userName } = this;
    return `Name: ${name} - age: ${age} - userName: ${userName}`;
};

const person = new Animal("amirali", 20, "AmirAli6578");
console.log(person.info());
