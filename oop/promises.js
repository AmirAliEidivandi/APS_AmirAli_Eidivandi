const products = [
    {
        title: 'book1',
        price: 30
    },
    {
        title: 'book2',
        price: 20
    },
    {
        title: 'book3',
        price: 40
    },
    {
        title: 'book4',
        price: 70
    },
]

const getProduct = () => {
    setTimeout(() => {
        const fetchProduct = products.map(item => {
            return `product: ${item.title} - title: ${item.price}`
        })
        console.log(fetchProduct);
    }, 2000)
}

const creatProduct = (callback) => {
    setTimeout(() => {
        products.push({
            title: 'book5',
            price: 754
        })
        callback()
    }, 3000)
}

creatProduct(getProduct)