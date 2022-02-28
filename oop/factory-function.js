// function creatRobot(name) {
//     return {
//         name: name,
//         talk: function () {
//             console.log(`my name is ${name}, the robot`);
//         },
//     };
// }

// const robo1 = creatRobot("Chitti");
// robo1.talk();

// const robo2 = creatRobot("Chitti 2.0 Upgraded");
// robo2.talk();

// factory function creating person
// const Person = function (name, age) {
//     const person = {};

//     person.name = name;
//     person.age = age;

//     person.greeting = function () {
//         return `hello i am ${person.name}, i am ${person.age} years old.`;
//     };
//     return person;
// };

// const person1 = Person("amirali", 20);
// console.log(person1.greeting());

// const person2 = Person("ali", 30);
// console.log(person2.greeting());

// create method
// const personAction = {
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function createPerson(firstName, lastName) {
//     let person = Object.create(personAction);
//     person.firstName = firstName;
//     person.lastName = lastName;
//     return person;
// }

// let person1 = createPerson('amirali', 'eidivandi')
// let person2 = createPerson('jasem', 'ahmadi')
// console.log(person1.getFullName());
// console.log(person2.getFullName());


function makeUser(name, age, username) {
    let user = {};

    user.name = name;
    user.age = age;
    user.username = username;

    user.info = function () {
        const {name, username} = this;
        return `my name is ${name} and my userName: ${username}`;
    }

    user.login = function () {
        return `my name is ${user.name} and age ${this.age}`
    }

    return user;
}

const user1 = makeUser('amirali', 20, 'AmirAli6578');
console.log(user1.info());
const user2 = makeUser('alkfjd', 30, 'fiaejifj');
console.log(user2.login());