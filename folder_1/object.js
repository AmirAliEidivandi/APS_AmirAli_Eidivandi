// const user = {
//     name: "amirali",
//     age: 20,
// };

// let key = prompt("what your name?", 'name');
// alert(user[key]);

// computed properties
// let fruit = prompt('which fruit to buy?', 'apple')

// let bag = {
//     [fruit]: 5,
// }
// alert(bag.apple)

// property value shorthand
// function makeUser(name, age) {
//     return {
//         name,
//         age
//     }
// }

// let user = makeUser('amirali', 20)
// alert(user.name)
// alert(user.age)

// let user = { age: 20 };

// let key = 'age'
// alert(key in user)

// copy objects in person object
// const body = {
//     height: 174,
//     weight: 64,
// };

// const brain = {
//     iq: 1,
// };

// const person = {
//     ...body,
//     ...brain,
//     name: 'amirali'
// }
// console.log(person);

// Object Destructuring by index
// const product = {
//     name: 'amirali',
//     price: 100,
//     tags: ['laptop', 'phone', 'tablet']
// }

// const { 0: firstTag, 2: thirdTag } = product.tags;

// console.log(firstTag); // laptop
// console.log(thirdTag); // tablet

// object Destructuring with a dynamic key
// const human = {
//     name: 'amirali',
//     age: 20
// }
// const objKey = 'name'

// const { [objKey]: ultimateGoal } = human;
// console.log(ultimateGoal);

// optional Chaining in Objects
// const brand = { name: 'apple', product: { name: 'macBook'} }

// console.log(brand.product.name); // macBook
// console.log(brand.product && brand.product.name); // macBook
// console.log(brand.product?.name); // macBook

// check if property Exists in an Object
// const car = {
//     engine: "2JZ-GTE",
//     doors: 2,
// };

// console.log("doors" in car); // true
// console.log("menuFacturer" in car); // false

// Add properties to an Object
// const condition = true;

// const something = {
//     id: 1,
//     ...(condition && { food: "pizza" }),
// };
// console.log(something); // { id: 1, food: "pizza" }

// use proxy() to set validiation to js object
// const userValidator = {
//     set(Object, prop, value) {
//         const validProps = ["name", "email"];
//         if (!validProps.includes(prop)) {
//             throw new Error(`can't set ${prop}`);
//         } else {
//             Object[prop] = value;
//             return true;
//         }
//     },
// };

// class User {
//     constructor({ name, email }) {
//         this.name = name;
//         this.email = email;

//         return new Proxy(this, userValidator);
//     }
// }

// const user = new User({ name: "amirali", email: "amirah648887@gmail.com" });
// user.password = "af834qyfdah@r7JJ";
// Error: Can't set Password

// Remove dynamic property from an Object
// const object = {
//     one: 1,
//     two: 2,
//     three: 3
// }

// const propertyame = 'two'
// delete object[propertyame]

// const { [propertyame]: _, ...modlifiedObject } = object;
// console.log(modlifiedObject); // one: 1, three: 3


// let's go create calculator...
// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b
//     },
//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     }
// }
// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())

// user object in clone
// const user = {
//     firstName: 'amirali',
//     lastName: 'eidivandi',
//     age: 20
// }

// const clone = {}

// for (const key in user) {
//     clone[key] = user[key]
// }
// clone.firstName = 'ali'
// clone.age = 25
// console.log(user); // { firstName: 'amirali', lastName: 'eidivandi', age: 20 }
// console.log(clone); // { firstName: 'ali', lastName: 'eidivandi', age: 25 }
