const cartItems = [
    {
        name: "amirali",
        age: 20,
    },
    {
        name: "alireza",
        age: 25,
    },
    {
        name: "mohammad",
        age: 30,
    },
    {
        name: "saleh",
        age: 23,
    },
];

function findIndexMethod(cart, item) {
    const indexValue = cart.findIndex((crt, idx) => {
        return crt.name.toLowerCase() === item.toLowerCase();
    });
    return cart[indexValue];
}

const result = findIndexMethod(cartItems, "mohammad");
console.log(result);

// task
let obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}

console.log(new A() === new B());



// 
const account = {
    name: 'amirali',
    outgo: [],
    income: [],
    addOutgo(product, money) {
        this.outgo.push({
            product,
            money
        })
    },
    addIncome(product, money) {
        this.income.push({
            product,
            money
        })
    },
    getAccountSummary() {
        let totalOutgo = 0;
        let totalIncome = 0;
        let accountBalance = 0;
        this.outgo.forEach(item => totalOutgo += item.money)
        this.income.forEach(item => totalIncome += item.money)
        accountBalance = totalIncome - totalOutgo;
        return (
            `${this.name}, Balance: ${accountBalance}, outgo: ${totalOutgo}, Income: ${totalIncome}`
        )
    }
}

account.addOutgo('cafe', 39)
account.addOutgo('book', 59)
account.addIncome('job', 1000)
console.log(account.getAccountSummary());