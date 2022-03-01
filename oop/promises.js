const products = [
    {
        title: "book1",
        price: 30,
    },
    {
        title: "book2",
        price: 20,
    },
    {
        title: "book3",
        price: 40,
    },
    {
        title: "book4",
        price: 70,
    },
];

const getProduct = () => {
    setTimeout(() => {
        const fetchProduct = products.map((item) => {
            return `product: ${item.title} - title: ${item.price}`;
        });
        console.log(fetchProduct);
    }, 2000);
};

const creatProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            products.push({
                title: "book5",
                price: 754,
            });
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error");
            }
        }, 3000);
    });
};

// promise
// creatProduct()
//     .then(getProduct)
//     .catch(err => {
//         console.log(err);
//     })

// async && await
async function getData() {
    await creatProduct();
    getProduct();
}

getData();
