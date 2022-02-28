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
const Person = function (name, age) {
    const person = {};

    person.name = name;
    person.age = age;

    person.greeting = function () {
        return `hello i am ${person.name}, i am ${person.age} years old.`;
    };
    return person;
};

const person1 = Person("amirali", 20);
console.log(person1.greeting());

const person2 = Person("ali", 30);
console.log(person2.greeting());
