// const text = "hello amirali eidivandi \nworld \nworld";

// const result = RegExp("^wor", "gm");

// function multiply(rgx, txt) {
//     let math;
//     let array = [];

//     while (math !== null) {
//         math = rgx.exec(txt);
//         if (math !== null) {
//             array.push(math);
//         }
//     }
//     return array;
// }

// console.log(multiply(result, text));

// const defaultResult = 0;
// let currentResult = defaultResult;
// let result;

// function add(num1, num2) {
//     result = num1 * num2;
//     return result;
// }

// result = add(5, 2);
// console.log(result); // result 10 but currentResult => const => error

// const users = {
//     persons: [
//         {
//             firstName: 'amirali',
//             lastName: 'eidivandi',
//             age: 20
//         },
//         {
//             firstName: 'alireza',
//             lastName: 'mohammadi',
//             age: 30
//         },
//         {
//             firstName: 'reza',
//             lastName: 'moradi',
//             age: 16
//         },
//         {
//             firstName: 'saman',
//             lastName: 'sadeghi',
//             age: 24
//         },
//     ],

//     info() {
//         const app = document.getElementById('app');
//         const ul = document.createElement('ul');

//         for (const user of this.persons) {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <h1>my first name: ${user.firstName}</h1>
//                 <h2>my last name: ${user.lastName}</h2>
//                 <p>i am ${user.age} years old</p>
//             `;
//             ul.appendChild(li)
//         }
//         app.appendChild(ul)
//     }
// }

// users.info()
