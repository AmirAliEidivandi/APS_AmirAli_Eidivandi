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
        return crt.name.toLowerCase() === item.toLowerCase()
    })
    return indexValue
}

const result = findIndexMethod(cartItems, "mohammad");
console.log(result);