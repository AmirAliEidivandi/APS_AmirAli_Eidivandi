const user = {
    name: "amirali",
    age: 20,
    family: "eidivandi",
    get userInfo() {
        return `name: ${this.name} family: ${this.family} age: ${this.age}.`;
    },
    set userInfo(value) {
        const data = value.split(" ");
        this.name = data[0];
        this.age = data[1];
        this.family = data[2];
    },
};

user.userInfo = "mohammad 30 ahmadi";
console.log(user.userInfo);

const number = 1e5;
console.log(number);