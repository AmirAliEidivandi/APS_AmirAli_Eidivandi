function User(name, age) {
    this.name = name;
    this.age = age;

    this.info = function () {
        return `my name ${this.name} age: ${this.age}`
    }
}

// User.prototype.newUser = function () {
//     return `my name is ${this.name} and my age ${this.age}`;
// };

const user1 = new User("amirali", 20);
console.log(user1.info());
