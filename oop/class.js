// const User = function (email, username) {
//     this.email = email;
//     this.username = username;
// };

// const userName1 = new User("amirah648887@gmail.com", "AmirAli6578");
// console.log(userName1.email);

// class User {
//     constructor(email, username, id) {
//         this.email = email;
//         this.username = username;
//         this.id = id;
//     }

//     info() {
//         return `hello ${this.username} and your email: ${this.email}`;
//     }
// }

// User.prototype.userInfo = function () {
//     return `ID: ${this.id} - userName: ${this.username} - Email: ${this.email}`;
// };

// const userInfo1 = new User("amiralieidivandi175@gmail.com", "AmirAli6578", 23);
// const userInfo2 = new User("amirah658887@gmail.com", "AmirAli6579", 53);
// console.log(userInfo1.userInfo());
// console.log(userInfo2.userInfo());

// class extends
// class Job extends User {
//     constructor(email, username, id, job) {
//         super();
//         this.job = job;
//         this.email = email;
//         this.username = username;
//         this.id = id;
//     }

//     infoFunc() {
//         return `ID: ${this.id} - userName: ${this.username} - Email: ${this.email} - Job: ${this.job}`;
//     }
// }

// const userExtends = new Job("amirah648887@gmail.coom", "amirali6578", 20, "programmer");
// console.log(userExtends.infoFunc());

// class User {
//     constructor(username, email) {
//         this.email = email;
//         this.username = username;
//         this.count = 0;
//     }

//     logout() {
//         console.log(`the user ${this.username} has just logged out`);
//     }

//     login() {
//         this.count++;
//         console.log(`the user ${this.username} has just logged in`);
//     }

//     loginCounter() {
//         console.log(`the ${this.username} has logged in ${this.count} times`);
//         return this;
//     }
// }

// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }

//     deleteUser(user) {
//         const newUsers = useres.filter((u) => u.username !== user.username);
//         console.log(newUsers);
//     }
// }

// const userOne = new User("ali", "ali@gmail.com");
// const userTwo = new User("amir", "amir@gmail.com");
// const userThree = new User("sama", "sama@gmail.com");

// userOne.login()
// userTwo.login()
// userThree.login()
// userOne.loginCounter()

// const useres = [userOne, userTwo, userThree];

// const admin = new Admin('amir', 'amirah648887@gmail.com', 'black-belt-fighter');
// console.log(admin);

// admin.deleteUser(userTwo)

// getters and setters
// const user = {
//     name: "amirali",
//     age: 20,
//     job: "programmer",

//     get userInfo() {
//         return `Name: ${this.name} - age: ${this.age} - job: ${this.job}`;
//     },
//     set userInfo(value) {
//         const result = value.split(" ");
//         this.name = result[0];
//         this.age = result[1];
//         this.job = result[2];
//     },
// };

// user.userInfo = "mohammad 30 doctor";
// console.log(user.userInfo);

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.stop();

// function and class
// function f(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase);
//         }
//     };
// }

// class User extends f("hello") {}

// new User().sayHi();

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, speed, earLength) {
//         super(name);
//         this.earLength = earLength;
//         this.speed = speed;
//     }

//     func() {
//         return `speed: ${this.speed} and earLength: ${this.earLength} and name: ${this.name}`;
//     }
// }

// let rabbit = new Rabbit("dog", 10, 400);
// console.log(rabbit.func());

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

// class Polygon {
//     constructor(...sides) {
//         this.sides = sides;
//     }

//     *getSides() {
//         for (const side of this.sides) {
//             yield side;
//         }
//     }
// }

// const pentagon = new Polygon(1, 2, 3, 4, 5);
// console.log([...pentagon.getSides()]);
// [1, 2, 3, 4, 5]

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static displayName = "Point";
//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot(dx, dy);
//     }
// }

// const p1 = new Point(5, 5)
// const p2 = new Point(10, 10)

// console.log(Point.displayName);
// console.log(p1.x, p1.y);

// class Animal {
//     speak() {
//         return this;
//     }
//     static eat() {
//         return this;
//     }
// }

// let obj = new Animal();
// console.log(obj.speak()); // object
// let speak = obj.speak;
// console.log(speak()); // undefined
// console.log(Animal.eat()); // object
// let eat = Animal.eat;
// console.log(eat()); // undefined